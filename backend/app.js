const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const port = 8187;
const db = require('./db.js');
const fs = require('fs');
const globalConfig = require('./config');
const serverLink = globalConfig.port;
const nodemailer = require('nodemailer');
 // const cors = require('cors');


const app = express();




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());








app.use('/uploads', express.static('uploads'));

// Enable CORS for all origins (you can restrict it to specific origins)
app.use((req, res, next) => {
  const allowedOrigins = ['https://globalindiansinfo.com', 'http://localhost:3000', 'https://intranet.prabisha.com'];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});


const transporter = nodemailer.createTransport({
  host: 'consulting.prabisha.com',
  port: 587,
  secure: false,
  auth: {
    user: 'info@prabisha.com',
    pass: 'ElzAeL6n',
  },
});

transporter.verify((error) => {
  if (error) {
    console.error('Nodemailer verification failed:', error);
  } else {
    console.log('Nodemailer transporter is ready');
  }
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





// Create a route to store search queries
app.post('/api/store-search', async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Search query cannot be empty' });
  }

  const sql = 'INSERT INTO searched_items (query) VALUES (?)';

  try {
    await db.query(sql, [query]);
    res.status(200).json({ message: 'Search query stored successfully' });
  } catch (error) {
    console.error('Error storing search query:', error);
    res.status(500).json({ error: 'Failed to store search query' });
  }
});

// Create a route to fetch top searches using app.get
app.get('/api/top-searches', async (req, res) => {
  try {
    const [results] = await db.query(
      'SELECT query, COUNT(*) as count FROM searched_items GROUP BY query ORDER BY count DESC LIMIT 14'
    );

    const topSearches = results.map((row) => row.query);

    res.status(200).json(topSearches);
  } catch (error) {
    console.error('Error fetching top searches:', error);
    res.status(500).json({ error: 'Failed to fetch top searches' });
  }
});


// Multer configuration for handling image uploads
const customStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/articlesupload'); // Specify your image upload folder
  },
  filename: (req, file, callback) => {
    const { title } = req.body; // Assuming the title is sent in the request body
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const modifiedFilename = title.replace(/\s+/g, '-') + '-' + uniqueSuffix + path.extname(file.originalname);
    callback(null, modifiedFilename);
  },
});

const customUpload = multer({ storage: customStorage });





 
// Multer middleware to handle file uploads
app.post('/api/articlesupload', customUpload.single('articleImage'), async (req, res) => {
  try {
    const { name, email, date, category, title, description, consent } = req.body;
    const articleImagePath = req.file ? req.file.filename : null;

    // Insert data into the MySQL database
    const [results] = await db.query(
      'INSERT INTO articles_upload (name, email, date, category, title, description, consent, image_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, email, date, category, title, description, consent, articleImagePath]
    );
    const articleId = results.insertId;

    // Send thank-you email to the user
    const userMailOptions = {
      from: 'info@prabisha.com',
      to: email,
      subject: 'Article Submission Confirmation',
      html: `<p>Thank you for submitting your article. Your article with the title "${title}" has been received.</p>`,
    };

    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.error('Error sending user email:', error);
      } else {
        console.log('User email sent: ' + info.response);
      }
    });


// Send submitted data to multiple admins with HTML content
const adminRecipients = ['developerprakash10@gmail.com', 'prakash10.prabisha@gmail.com', 'info@prabisha.com'];

const adminMailOptions = {
  from: 'admin@prabisha.com',
  bcc: adminRecipients.join(', '), // Use the "Bcc" field for multiple recipients
  subject: 'New Article Submission',
  html: `
     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <p style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">A new article has been submitted:</p>
      <ul style="margin-bottom: 1rem; list-style: none; padding: 0;">
        <li style="padding: 0.75rem 1.25rem; border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem;">
          <strong>Name:</strong> ${name}
        </li>
        <li style="padding: 0.75rem 1.25rem; border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem;">
          <strong>Email:</strong> ${email}
        </li>
        <li style="padding: 0.75rem 1.25rem; border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem;">
          <strong>Date:</strong> ${date}
        </li>
        <li style="padding: 0.75rem 1.25rem; border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem;">
          <strong>Category:</strong> ${category}
        </li>
        <li style="padding: 0.75rem 1.25rem; border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem;">
          <strong>Title:</strong> ${title}
        </li>
        <li style="padding: 0.75rem 1.25rem; border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem;">
          <strong>Description:</strong> ${description}
        </li>
        <li style="padding: 0.75rem 1.25rem; border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem;">
          <strong>Image Path:</strong> <a href="${serverLink}/uploads/articlesupload/${articleImagePath}" target="_blank">View Image</a>
        </li>
        <li style="padding: 0.75rem 1.25rem; border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem;">
          <strong>Consent:</strong> ${consent}
        </li>
      </ul>
      <p style="margin-top: 1rem;">Thank you for your attention.</p>
    </div>
  `,
};






    transporter.sendMail(adminMailOptions, (error, info) => {
      if (error) {
        console.error('Error sending admin email:', error);
      } else {
        console.log('Admin email sent: ' + info.response);
      }
    });

    // Send success response
    res.status(201).json({ message: 'Article submitted successfully', articleId });
  } catch (error) {
    console.error('Submission error:', error);
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








let MagazineStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/magazines');
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const magazinesupload = multer({ storage: MagazineStorage });

// API endpoint for uploading magazine details
app.post('/api/magazines', magazinesupload.single('magazineImage'), (req, res) => {
  const { title, flipbookLink } = req.body;
  const magazineImage = req.file.filename;

  const sql = 'INSERT INTO magazines (title, flipbook_link, image) VALUES (?, ?, ?)';
  db.query(sql, [title, flipbookLink, magazineImage], (err, result) => {
    if (err) {
      console.error('Error inserting data into database: ', err);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } else {
      res.status(200).json({ success: true, message: 'Magazine uploaded successfully' });
    }
  });
});


// Endpoint to delete an existing article by ID
app.delete('/api/magazines/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the article with the given ID exists
    const [magazines] = await db.query('SELECT * FROM magazines WHERE id = ?', [id]);

    if (magazines.length === 0) {
      return res.status(404).json({ message: 'Magazines not found' });
    }

    // Delete the article from the database
    await db.query('DELETE FROM magazines WHERE id = ?', [id]);
    res.status(200).json({ message: 'Magazines deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});







app.get('/api/magazines', async (req, res) => {
  try {
    
 // Use the SQL LIKE operator to search for the category within the categories column
    const [rows] = await db.query('SELECT * FROM magazines ORDER BY id DESC');

    res.json(rows);
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
    
    // Check if new images are provided
    const logopath = req.files && req.files.image ? req.files.image[0].filename : null;
    const bannerpath = req.files && req.files.banner ? req.files.banner[0].filename : null;

    // Fetch the current image paths from the database
    const [currentImages] = await db.execute('SELECT logoimage, bannerimage FROM business_listings WHERE id = ?', [businessId]);
    const currentLogoPath = currentImages[0].logoimage;
    const currentBannerPath = currentImages[0].bannerimage;

    // Update the business listing in the database based on businessId
    await db.execute('UPDATE business_listings SET name = ?, type = ?, location = ?, status = ?, email = ?, mobile = ?, website = ?, logoimage = IFNULL(?, logoimage), bannerimage = IFNULL(?, bannerimage) WHERE id = ?', [name, type, location, status, email, mobile, website, logopath, bannerpath, businessId]);

    // Remove old images if new images are provided
    if (logopath && currentLogoPath) {
      // Delete the old logo image file (implement your file deletion logic)
    }
    if (bannerpath && currentBannerPath) {
      // Delete the old banner image file (implement your file deletion logic)
    }

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