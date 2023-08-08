const express = require('express');
const cors = require('cors');
const connection = require('./backend/db');

const multer = require("multer");






const app = express();
app.use(express.static('public'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: 'public/uploads/images/products/',
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original filename
  },
});

const upload = multer({ storage: storage });








app.post('/products', upload.single('image'), (req, res) => {
  try {
    const { productname, description, category } = req.body;

    // Fixing the issue
    const slugName = productname; // Assigning a value to 'str'

    const slug = slugName.toLowerCase(); // Calling 'toLowerCase' method on 'str'




    const { originalname: imageName } = req.file;
    const PublicPath = "/uploads/images/products/";

    const image = PublicPath + imageName;

    connection.query(
      'INSERT INTO products (productname, description , category ,  slug , image) VALUES (?, ? , ? , ? , ?)',
      [productname, description, category, slug, image],
      (error, results) => {
        if (error) {
          console.error('Error saving menu to database:', error);
          return res.status(500).send('Internal Server Error');
        }
        return res.status(200).send('Menu added successfully!');
      }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).send('Internal Server Error');
  }
});



app.post('/contact' , (req, res) => {
  try {
    const { name, email, mobile , message } = req.body;

    

    connection.query(
      'INSERT INTO contact_forms (name, email , mobile ,  message ) VALUES (? , ? , ? , ?)',
      [name, email, mobile, message],
      (error, results) => {
        if (error) {
          console.error('Error saving menu to database:', error);
          return res.status(500).send('Internal Server Error');
        }
        return res.status(200).send('Added');
      }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).send('Internal Server Error');
  }
});




app.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/data/users', (req, res) => {
  const query = 'SELECT * FROM contact_forms ORDER BY id DESC';
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});


app.get('/login', (req, res) => {
  const query = 'SELECT * FROM users';
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});













app.listen(5000, () => {
  console.log('Server is running on port 5000');
});