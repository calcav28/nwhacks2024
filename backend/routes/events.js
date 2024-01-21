const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

// Fetches all events or events based on filters: /events
router.get('/', async (req, res) => {
    try {
        const db = req.mongoClient;
        const query = req.query;
        const queryParams = {};

        for (let key in query) {
            if (query[key]) {
                queryParams[key] = query[key];
            }
        }

        const data = await db.collection("events").find(queryParams).toArray();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send(`Error: ${e.message}`);
    }
});

// Fetches all events in the next two weeks; returns ordered by desc. attendees: /events/popular
router.get('/popular', async (req, res) => {
    try {
        const db = req.mongoClient;
        const startDate = new Date();
        const endDate = new Date(startDate.getTime());
        endDate.setDate(startDate.getDate() + 14);

        const queryParams = {
            "event_date": {
                "$gte": startDate.toISOString(),
                "$lte": endDate.toISOString()
            }
        }
        
        const data = await db.collection("events").find(queryParams).sort({ attendees: 1 }).toArray();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send(`Error: ${e.message}`);
    }
});

// Fetches all events coming up in the next 7 days: /events/week
router.get('/week', async (req, res) => {
    try {
        const db = req.mongoClient;
        const startDate = new Date();
        const endDate = new Date(startDate.getTime());
        endDate.setDate(startDate.getDate() + 7);

        const queryParams = {
            "event_date": {
                "$gte": startDate.toISOString(),
                "$lte": endDate.toISOString()
            }
        }
        
        const data = await db.collection("events").find(queryParams).toArray();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send(`Error: ${e.message}`);
    }
});

// Adds a new event: /events
router.post('/', async (req, res) => {
    try {
        const db = req.mongoClient;
        const requiredKeys = ["event_title", "club_name", "event_date", "event_description", "image_url", "event_location", "attendees"];
        const newEvent = req.body;
        const missingKeys = requiredKeys.filter(key => !newEvent.hasOwnProperty(key));
        
        if (missingKeys.length > 0)
            return res.status(400).send(`Missing keys: ${missingKeys.join(", ")}`);

        await db.collection("events").insertOne(newEvent);
        res.status(201).send();
    } catch (e) {
        res.status(500).send(`Error: ${e.message}`);
    }
});

// Fetches events that start with given name param: /events/search
router.get('/search', async (req, res) => {
    try {
        const db = req.mongoClient;
        const partialName = req.query.event_title;

        if (!(partialName === "") && !partialName)
           return res.status(400).send("An event title must be provided.");

        const data = await db.collection("events").find({ "event_title": new RegExp(`^${partialName}`) }).toArray();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send(`Error: ${e.message}`);
    }
});

// Fetches a specific event: /events/:eventId
router.get('/:eventId', async (req, res) => {
    try {
        const db = req.mongoClient;
        const eventId = req.params.eventId;
        
        if (!eventId)
            return res.status(400).send("eventId must be provided.");

        const data = await db.collection("events").findOne({ "_id": new ObjectId(eventId) });

        if (data.length == 0)
            return res.status(404).send("Event not found.");

        res.status(200).send(data);
    } catch (e) {
        res.status(500).send(`Error: ${e.message}`);
    }
});

// Deletes a specific event: /events/:eventId
router.delete('/:eventId', async (req, res) => {
    try {
        const db = req.mongoClient;
        const eventId = req.params.eventId;
        
        if (!eventId)
            throw Error("eventId must be provided.");

        const data = await db.collection("events").deleteOne({ "_id": new ObjectId(eventId)});
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send(`Error: ${e.message}`);
    }
});

module.exports = router;