import { useEffect, useState } from 'react';
import Link from 'next/link';
import globalConfig from '@/config';
const port = globalConfig.port;


// ... (your imports)

export default function SideBar() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from your Express API
    fetch(`${port}/api/blogs`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  // Function to trim the content while maintaining HTML structure
  const trimHTMLContent = (content, maxLength) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const truncatedContent = doc.body.textContent.slice(0, maxLength);
    return truncatedContent;
  };

  return (
      <div className='row'>
              <div className='col-md-12 box-shadow p-4'>
              <Link href="https://prabisha.com/" target="_blank"><img src="/uploads/blogs_ad.jpg"></img></Link>
              </div>
         
            <div className="blogs_sidebar box-shadow p-4 mt-4 ">
              <h1 className='text-center'>Latest Posts</h1>
              <ul>
                {/* Add links or other sidebar content here */}
                {blogs.slice(0, 5).map((blog) => (
                  <li key={blog.id} className='pb-3'>
                    <Link className="text-black  " href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
     
       
  );
}




