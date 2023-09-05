// pages/blogs/[slug].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import globalConfig from '@/config';
const port = globalConfig.port;

const Blog = ({ blog }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="section">
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
        {/* Safely render HTML content using dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
    </div>
  );
};

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
    // Fetch the individual blog by slug from your API
    const res = await fetch(`${port}/api/blogs/${slug}`);
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
