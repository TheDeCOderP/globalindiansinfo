import { useEffect, useState } from 'react';
import Link from 'next/link';
import globalConfig from '@/config';
import SideBar from '@/components/blogs_sidebar';
const port = globalConfig.port;



export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(5); // Number of blogs to initially display
  const blogsPerPage = 5; // Number of blogs to display when "View More" is clicked

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

  const handleViewMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + blogsPerPage);
  };

  return (
    <div className="section mt-5">
      <div className="container">
        <div className="row">
          <div className="flex flex-row col-md-8 text-start">
            <div className="row">
              {blogs.slice(0, visibleBlogs).map((blog) => (
                <div key={blog.id} className="col-md-12 mb-4 box-shadow">
                  <Link href={`/blogs/${blog.slug}`}>
                    <div className='row'>
                      <div className='col-md-6'>
                        {blog.image_path && (
                          <img
                            src={`${port}/uploads/blogs/${blog.image_path}`}
                            alt={blog.title}
                            className="cover"
                          />
                        )}
                      </div>
                      <div className='col-md-6 flex'>
                        <div className="blog_body text-start">
                          <h3 className="text-start mb-2">{blog.title}</h3>
                          <div className="text-white small" dangerouslySetInnerHTML={{ __html: trimHTMLContent(blog.content, 130) }} />
                          <Link href={`/blogs/${blog.slug}`} legacyBehavior>
                            <a className="btn bg-white mt-3 small">Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              {blogs.length > visibleBlogs && (
                <div className="col-md-12 mb-4 text-center">
                  <button onClick={handleViewMore} className="button mt-2 small">
                    View More
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-4">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}




