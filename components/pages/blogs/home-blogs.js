import { useEffect, useState } from 'react';
import Link from 'next/link';
import globalConfig from '@/config';
const port = globalConfig.port;

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from your Express API
    fetch(`${port}/api/blogs`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="section mt-5">
        <div className="row">
      
        {blogs.slice(0 , 3).map((blog) => (

          <div key={blog.id} className="col-sm-12 col-md-4 col-lg-4">
          <Link href={`/blogs/${blog.slug}`}> {blog.image_path && (
              <img
                src={`${port}/uploads/blogs/${blog.image_path}`}
                alt={blog.title}
                className="aspect-ratio"
              />
            )}
            <div className="blog_body">
            <h3 className="text-center mb-2">{blog.title}</h3>
            </div>
            </Link> 

            
          </div>
        ))}
      
    </div>
    <div className="text-center">
        <Link href="/blogs"><button className="button primary">View All Blogs</button></Link>
      </div>
    </div>
  );
}


