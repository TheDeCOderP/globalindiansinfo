const express = require('express');
const router = express.Router();
const db = require('../db.js');

// Function to ensure table and columns exist
async function ensureTableExists() {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS important_links (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                link VARCHAR(255) NOT NULL,
                country VARCHAR(50) DEFAULT 'UK'
            )
        `);

        const [columns] = await db.query("SHOW COLUMNS FROM important_links");
        const columnNames = columns.map(column => column.Field);

        const requiredColumns = {
            title: "VARCHAR(255) NOT NULL",
            link: "VARCHAR(255) NOT NULL",
            country: "VARCHAR(50) DEFAULT 'UK'"
        };

        for (const [columnName, columnType] of Object.entries(requiredColumns)) {
            if (!columnNames.includes(columnName)) {
                await db.query(`ALTER TABLE important_links ADD COLUMN ${columnName} ${columnType}`);
                console.log(`Added missing column: ${columnName}`);
            }
        }
    } catch (error) {
        console.error('Error ensuring table and columns:', error);
    }
}

ensureTableExists();

// CRUD routes

// Route to fetch distinct countries from the database
router.get('/countries', async (req, res) => {
    try {
        const [countries] = await db.query("SELECT DISTINCT country FROM important_links");
        res.json(countries.map(row => row.country));
    } catch (error) {
        console.error('Error fetching countries:', error);
        res.status(500).send({ error: 'Error fetching countries' });
    }
});

// Get all links
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM important_links');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve links' });
    }
});

// Get a single link by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM important_links WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Link not found' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve link' });
    }
});

// Create a new link
router.post('/', async (req, res) => {
    const { title, link, country } = req.body;
    try {
        const [result] = await db.query('INSERT INTO important_links (title, link, country) VALUES (?, ?, ?)', [title, link, country]);
        res.status(201).json({ id: result.insertId, title, link, country });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create link' });
    }
});

// Update a link by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, link, country } = req.body;
    try {
        await db.query('UPDATE important_links SET title = ?, link = ?, country = ? WHERE id = ?', [title, link, country, id]);
        res.json({ message: 'Link updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update link' });
    }
});

// Delete a link by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM important_links WHERE id = ?', [id]);
        res.json({ message: 'Link deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete link' });
    }
});

module.exports = router;
