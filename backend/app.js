const express = require('express');
const multer = require('multer');
const mysql = require('mysql2/promise');
const path = require('path');
const app = express();
const port = process.env.PORT || 5001;
const db = require('./db.js');


// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

const cors = require('cors'); 

app.use(cors());


// Multer configuration for handling image uploads
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/blogs'); // Specify your image upload folder
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.static('public'));

// Endpoint to post a new blog
app.post('/api/blogs', upload.single('image'), async (req, res) => {
  try {
    const { title, content , categories } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    // Generate a slug from the title
    const slug = title.toLowerCase().replace(/ /g, '-'); // Converts spaces to hyphens

    const [results] = await db.query('INSERT INTO blogs (title, content,categories, image_path, slug) VALUES (?, ?, ?, ? , ?)', [title, content, categories,  imagePath, slug]);
    const blogId = results.insertId;
    res.status(201).json({ message: 'Blog post created successfully', blogId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to edit an existing blog by ID
app.put('/api/blogs/:id', upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    // Generate a slug from the title (if needed)
    // const slug = title.toLowerCase().replace(/ /g, '-');

    // Update the blog in the database
    await db.query('UPDATE blogs SET title = ?, content = ?, image_path = ? WHERE id = ?', [title, content, imagePath, id]);
    res.status(200).json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to delete an existing blog by ID
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the blog from the database
    await db.query('DELETE FROM blogs WHERE id = ?', [id]);
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});





// Endpoint to get all blog slugs
app.get('/api/blogSlugs', async (req, res) => {
  try {
    // Query the database to fetch all blog slugs
    const [rows] = await db.query('SELECT slug FROM blogs'); // Adjust the query as per your database structure

    // Extract the slugs from the database response
    const slugs = rows.map((row) => row.slug);

    res.json(slugs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});







// Endpoint to get a single blog by slug
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    // Query the database to find the blog by its slug
    const [results] = await db.query('SELECT * FROM blogs WHERE slug = ?', [slug]);

    // Check if a blog with the given slug exists
    if (results.length === 0) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // If a blog with the slug exists, return it
    const blog = results[0];
    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Endpoint to get all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    

    // Use the SQL LIKE operator to search for the category within the categories column
    const [rows] = await db.query('SELECT * FROM blogs ORDER BY id DESC');

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});










/**   articles api  */



// Multer configuration for handling image uploads
let Articlestorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/articles'); // Specify your image upload folder
  },
  filename: (req, file, callback) => {
    const uniqueSuffix2 = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + '-' + uniqueSuffix2 + path.extname(file.originalname));
  },
});

const articleupload = multer({ storage : Articlestorage });

app.use(express.json());
app.use(express.static('public'));

// Endpoint to post a new blog
app.post('/api/articles', articleupload.single('image1'), async (req, res) => {
  try {
    const { title, content , categories } = req.body;
    const articleimagePath = req.file ? req.file.filename : null;

    // Generate a slug from the title
    const slug = title.toLowerCase().replace(/ /g, '-'); // Converts spaces to hyphens

    const [results] = await db.query('INSERT INTO articles ( title, description,categories, imagepath, slug) VALUES ( ?, ?, ?, ? , ?)', [title,content, categories,  articleimagePath, slug]);
    const articleId = results.insertId;
    res.status(201).json({ message: 'Article created successfully', articleId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to edit an existing blog by ID
app.put('/api/articles/:id', articleupload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    // Generate a slug from the title (if needed)
     const slug = title.toLowerCase().replace(/ /g, '-');

    // Update the blog in the database
    await db.query('UPDATE articles SET title = ?, description = ? , slug = ?, imagepath = ? WHERE id = ?', [title, content, imagePath, id , slug]);
    res.status(200).json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to delete an existing article by ID
app.delete('/api/articles/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the article with the given ID exists
    const [article] = await db.query('SELECT * FROM articles WHERE id = ?', [id]);

    if (article.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Delete the article from the database
    await db.query('DELETE FROM articles WHERE id = ?', [id]);
    res.status(200).json({ message: 'Article deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});






// Endpoint to get all blog slugs
app.get('/api/articleSlugs', async (req, res) => {
  try {
    // Query the database to fetch all blog slugs
    const [rows] = await db.query('SELECT slug FROM articles'); // Adjust the query as per your database structure

    // Extract the slugs from the database response
    const slugs = rows.map((row) => row.slug);

    res.json(slugs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




app.get('/api/articles', async (req, res) => {
  try {
    
 // Use the SQL LIKE operator to search for the category within the categories column
    const [rows] = await db.query('SELECT * FROM articles ORDER BY id DESC');

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});










 app.get('/api/articles/latest', async (req, res) => {
  try {
    const category = "latest"; // Get the category from the query parameters

    if (!category) {
      // Handle the case when no category is provided
      return res.status(400).json({ message: 'Category parameter is required' });
    }

    // Use the SQL LIKE operator to search for the category within the categories column
    const [rows] = await db.query('SELECT * FROM articles WHERE categories LIKE ? ORDER BY id DESC', [`%${category}%`]);

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}); 

 app.get('/api/articles/education', async (req, res) => {
  try {
    const category = "education"; // Get the category from the query parameters

    if (!category) {
      // Handle the case when no category is provided
      return res.status(400).json({ message: 'Category parameter is required' });
    }

    // Use the SQL LIKE operator to search for the category within the categories column
    const [rows] = await db.query('SELECT * FROM articles WHERE categories LIKE ? ORDER BY id DESC', [`%${category}%`]);

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}); 


 app.get('/api/articles/events', async (req, res) => {
  try {
    const category = "events"; // Get the category from the query parameters

    if (!category) {
      // Handle the case when no category is provided
      return res.status(400).json({ message: 'Category parameter is required' });
    }

    // Use the SQL LIKE operator to search for the category within the categories column
    const [rows] = await db.query('SELECT * FROM articles WHERE categories LIKE ? ORDER BY id DESC', [`%${category}%`]);

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}); 
 app.get('/api/articles/education', async (req, res) => {
  try {
    const category = "education"; // Get the category from the query parameters

    if (!category) {
      // Handle the case when no category is provided
      return res.status(400).json({ message: 'Category parameter is required' });
    }

    // Use the SQL LIKE operator to search for the category within the categories column
    const [rows] = await db.query('SELECT * FROM articles WHERE categories LIKE ? ORDER BY id DESC', [`%${category}%`]);

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}); 





// Endpoint to get a single blog by slug
app.get('/api/articles/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    // Query the database to find the blog by its slug
    const [results] = await db.query('SELECT * FROM articles WHERE slug = ?', [slug]);

    // Check if a blog with the given slug exists
    if (results.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // If a blog with the slug exists, return it
    const article = results[0];
    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

    

























    






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
