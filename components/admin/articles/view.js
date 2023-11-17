import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import EditBlogs from '../blogs/edit';
import { Button } from 'react-bootstrap';
import globalConfig from '@/config';
const port = globalConfig.port;
const AllArticles = () => {
  const [data, setData] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQuery1, setSearchQuery1] = useState('');
  const [searchQuery2, setSearchQuery2] = useState('');
  const [numberOfColumns, setNumberOfColumns] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  

    
    try {
      const response = await fetch(`${port}/api/articles`);
      const jsonData = await response.json();
      // Assuming jsonData is an array of articles
      if (jsonData.length > 0) {
        // Get the keys (properties) of the first article
        const firstArticleKeys = Object.keys(jsonData[0]);
       
        
        // Count the number of columns
        const numberOfColumns = firstArticleKeys.length;
        setNumberOfColumns(numberOfColumns); 
        
        // Print the number of columns
        console.log('Number of columns:', numberOfColumns);
    } else {
        console.log('No data found.');
    }
     
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this article?');
    if (confirmDelete) {
      try {
        const response = await fetch(`${port}/api/articles/${userId}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          console.log('User deleted successfully');
          fetchData(); // Fetch updated data after deletion
        } else {
          console.error('Error deleting user:', response.status);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleUpdate = async (updatedBlog) => {
    try {
      const response = await fetch(`${port}/api/articles/${updatedBlog.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBlog)
      });
      if (response.ok) {
        console.log('User updated successfully');
        fetchData(); // Fetch updated data after update
        setEditingUserId(null); // Reset the editing user ID
      } else {
        console.error('Error updating user:', response.status);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleEdit = (userId) => {
    setEditingUserId(userId);
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
  };

 

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div className="container product_grid">
     
       

      <div className="row">
        {filteredData.map((item) => (
          <div className="admin_articles_list m-3 box-shadow p-3" key={item.id}>
        
                {editingUserId === item.id ? (
                  <EditBlogs blog={item} updateBlogs={handleUpdate} onCancelEdit={handleCancelEdit} />
                ) : (
                  <>
                    <img src={`${port}/uploads/articles/${item.imagepath}`} width={60} height={60}></img>
                   
                    <Card.Title >
                     <Link href={`/blogs/${item.slug}`}>{item.title}  </Link>
                    </Card.Title>
                    
                    <div className="edit_delete">
                     {/*  <button onClick={() => handleEdit(item.id)} className="button p-2 m-3">Edit</button> */}
                      <button onClick={() => handleDelete(item.id)} className="button p-2 ">Delete</button>
                    </div>
                   
                  </>
                )}
              
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
