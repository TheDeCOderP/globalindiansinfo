// pages/blogs/[slug].js
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import globalConfig from '@/config';
import SideBar from '@/components/blogs_sidebar';
import ReactHtmlParser from 'react-html-parser'; // Import the react-html-parser library
const port = globalConfig.port;

const Blog = ({ blog }) => {
  const router = useRouter();
  const [showFullArticle, setShowFullArticle] = useState(false);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Function to toggle showing the full article
  const toggleFullArticle = () => {
    setShowFullArticle(!showFullArticle);
  };

  // Function to render a limited excerpt of the content
  const renderExcerpt = (content, maxLength) => {
    const truncatedContent = content.slice(0, maxLength);
    return truncatedContent;
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="flex flex-row col-md-8 text-start">
            <div className="single_page">
              <img
                className="single_blog"
                src={`${port}/uploads/blogs/${blog.image_path}`}
                height={400}
                width={1920}
                alt={blog.title}
              />
              <div className="blog_single_content mt-4">
                <h3 className="text-center p-4">{blog.title}</h3>
                {showFullArticle ? (
                  // Show the full article
                  <div>{ReactHtmlParser(blog.content)}</div>
                ) : (
                  // Show a limited excerpt
                  <div>{ReactHtmlParser(renderExcerpt(blog.content, 1000))}</div>
                )}
                {/* "Read Full Article" button */}
                {!showFullArticle && (
                  <div className="text-center mt-4">
                    <button onClick={toggleFullArticle} className="button">
                      Read Full Article
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};
// ... (rest of your code)

export async function getStaticPaths() {
  try {
    // Fetch all blog slugs from your API
    const res = await fetch(`${port}/api/blogSlugs`);
    const slugs = await res.json();

    // Generate paths for all slugs
    const paths = slugs.map((slug) => ({ params: { slug } }));

    return {
      paths,
      fallback: true, // Set to true to generate pages on-demand for missing slugs
    };
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    // Decode the slug before making the API request
    const decodedSlug = decodeURIComponent(slug);

    // Fetch the individual blog by slug from your API
    const res = await fetch(`${port}/api/blogs/${decodedSlug}`);
    const blog = await res.json();

    return {
      props: { blog },
    };
  } catch (error) {
    console.error(`Error fetching blog for slug ${slug}:`, error);
    return {
      notFound: true, // Handle 404 errors gracefully
    };
  }
}


export default Blog;
