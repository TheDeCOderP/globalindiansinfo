import { useRouter } from 'next/router';
import { useState } from 'react';
import globalConfig from '@/config';
import SideBar from '@/components/blogs_sidebar';

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

  // Function to render a limited excerpt of the content with HTML support
  const renderExcerpt = (content, maxLength) => {
    const truncatedContent = content.slice(0, maxLength);
    return { __html: truncatedContent };
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
                <h3 className=" p-1">{blog.title}</h3>
                {showFullArticle ? (
                  // Show the full article with HTML rendering
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                ) : (
                  // Show a limited excerpt with HTML rendering
                  <div dangerouslySetInnerHTML={renderExcerpt(blog.content, 1000)} />
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

export async function getStaticPaths() {
  try {
    const res = await fetch(`${port}/api/blogSlugs`);
    const slugs = await res.json();
    const paths = slugs.map((slug) => ({ params: { slug } }));

    return {
      paths,
      fallback: true,
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
    const decodedSlug = decodeURIComponent(slug);
    const res = await fetch(`${port}/api/blogs/${decodedSlug}`);
    const blog = await res.json();

    return {
      props: { blog },
    };
  } catch (error) {
    console.error(`Error fetching blog for slug ${slug}:`, error);
    return {
      notFound: true,
    };
  }
}

export default Blog;
