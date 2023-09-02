import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from your Express API
    fetch('https://server.globalindiansinfo.com/api/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="section mt-5">
        <div className="row">
      
        {blogs.map((blog) => (

          <div key={blog.id} className="col-sm-12 col-md-4 col-lg-4">
          <Link href={`/blogs/${blog.slug}`}> {blog.image_path && (
              <img
                src={`/uploads/images/blogs/${blog.image_path}`}
                alt={blog.title}
                className="img-fluid rounded"
              />
            )}
            <div className="blog_body">
            <h3 className="text-center mb-2">{blog.title}</h3>
            </div>
            </Link> 
            
          </div>
        ))}
      
    </div>
    </div>
  );
}


