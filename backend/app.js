const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const port = 8187;
const db = require('./db.js');
const fs = require('fs');
 // const cors = require('cors');

const app = express();




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/uploads', express.static('uploads'));

// Enable CORS for all origins (you can restrict it to specific origins)
app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', 'https://globalindiansinfo.com');
// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
 next();
});








app.use('/uploads', express.static('uploads'));










// Multer configuration for handling media uploads
const mediaStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/media'); // Specify your media upload folder
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const mediaUpload = multer({ storage: mediaStorage });

// Endpoint to upload media files
app.post('/api/media', mediaUpload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const mediaPath = req.file.filename;
    res.status(201).json({ message: 'Media file uploaded successfully', mediaPath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




// Endpoint to get the list of media files
app.get('/api/media', async (req, res) => {
  try {
    // You should list the files in the 'uploads/media' directory
    const mediaDirectory = path.join(__dirname, 'uploads', 'media');
    const files = await fs.promises.readdir(mediaDirectory);

    // Return the list of media files
    res.json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



// Add this code to your existing Express.js application

// Endpoint to delete a media file by filename
app.delete('/api/media/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const mediaPath = path.join(__dirname, 'uploads', 'media', filename);

    // Check if the file exists
    const fileExists = await fs.promises.access(mediaPath, fs.constants.F_OK).then(() => true).catch(() => false);

    if (!fileExists) {
      return res.status(404).json({ message: 'Media file not found' });
    }

    // Delete the file
    await fs.promises.unlink(mediaPath);

    res.status(200).json({ message: 'Media file deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});








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

 app.get('/api/articles/jobs', async (req, res) => {
  try {
    const category = "jobs"; // Get the category from the query parameters

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

 app.get('/api/articles/business', async (req, res) => {
  try {
    const category = "business"; // Get the category from the query parameters

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


 app.get('/api/articles/tech', async (req, res) => {
  try {
    const category = "tech"; // Get the category from the query parameters

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

 app.get('/api/articles/travel', async (req, res) => {
  try {
    const category = "travel"; // Get the category from the query parameters

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

 app.get('/api/articles/news', async (req, res) => {
  try {
    const category = "news"; // Get the category from the query parameters

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















/* business listing api start */


let BusinessStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/business');
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const businessuploads = multer({ storage: BusinessStorage });

app.use(express.json());
app.use(express.static('public'));

app.post('/api/business', businessuploads.fields([{ name: 'image', maxCount: 1 }, { name: 'bannerimage', maxCount: 1 }]), async (req, res) => {
  try {
    const { name, email, mobile, type, location, website } = req.body;
    const status = false;
    const logoPath = req.files['image'] ? req.files['image'][0].filename : null;
    const bannerImagePath = req.files['bannerimage'] ? req.files['bannerimage'][0].filename : null;

    const [results] = await db.query('INSERT INTO business_listings (name, email, mobile, type, location, status, logoimage, bannerimage, website) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, email, mobile, type, location, status, logoPath, bannerImagePath, website]);

    const businessId = results.insertId;
    res.status(201).json({ message: 'Business Listing Uploaded Successfully', businessId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




app.get('/api/business', async (req, res) => {
  try {
    
 // Use the SQL LIKE operator to search for the category within the categories column
    const [rows] = await db.query('SELECT * FROM business_listings ORDER BY id DESC');

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});





// PUT route to update the status of a business listing by businessId
app.put('/api/business/:businessId', async (req, res) => {
  try {
    const { businessId } = req.params; // Get the businessId from the URL parameter
    const { status } = req.body; // Get the new status from the request body

    // You can add validation logic here to ensure the status is either 'Active' or 'Inactive'


    // Update the status in the database based on businessId
    const [results] = await db.execute('UPDATE business_listings SET status = ? WHERE id = ?', [status, businessId]);

   // Release the connection back to the pool

    if (results.affectedRows === 1) {
      res.status(200).json({ message: 'Business listing status updated successfully' });
    } else {
      res.status(404).json({ message: 'Business listing not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




// Endpoint to get a specific business by ID for editing
app.get('/api/business/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Query the database to find the business by its ID
    const [results] = await db.query('SELECT * FROM business_listings WHERE id = ?', [id]);

    // Check if a business with the given ID exists
    if (results.length === 0) {
      return res.status(404).json({ message: 'Business not found' });
    }

    // If a business with the ID exists, return it for editing
    const business = results[0];
    res.status(200).json(business);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});





// DELETE route to delete a business listing by businessId with confirmation
app.delete('/api/business/:businessId', async (req, res) => {
  try {
    const { businessId } = req.params; // Get the businessId from the URL parameter
    const { confirm } = req.query; // Get the confirmation query parameter


    // Delete the business listing from the database based on businessId
    const [results] = await db.execute('DELETE FROM business_listings WHERE id = ?', [businessId]);

    if (results.affectedRows === 1) {
      res.status(204).send(); // No Content
    } else {
      res.status(404).json({ message: 'Business listing not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




// Endpoint to update a business listing by businessId
app.put('/api/businessedit/:businessId', businessuploads.fields([
  { name: 'image', maxCount: 1 }, // Assuming image is a single file upload
  { name: 'banner', maxCount: 1 }, // Assuming banner is a single file upload
]), async (req, res) => {
  try {
    const { businessId } = req.params;
    const { name, type, location, status, email, mobile, website } = req.body;
    const logopath = req.files && req.files.image ? req.files.image[0].filename : null;
    const bannerpath = req.files && req.files.banner ? req.files.banner[0].filename : null;

    // Update the business listing in the database based on businessId
    await db.execute('UPDATE business_listings SET name = ?, type = ?, location = ?, status = ?, email = ?, mobile = ?, website = ?, logoimage = ?, bannerimage = ? WHERE id = ?', [name, type, location, status, email, mobile, website, logopath, bannerpath, businessId]);

    res.status(200).json({ message: 'Business listing updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});








/* business listing api end */




    

























    






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});