// pages/blogs/[slug].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import globalConfig from '@/config';
const port = globalConfig.port;
// Create a function to render HTML content safely
const renderHtmlContent = (htmlString) => {
    return { __html: htmlString };
  };



const Blog = ({ blog }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="section">
      <Image className="single_blog" src={`/uploads/images/blogs/${blog.image_path}`} height={400} width={1920} />
      <div className="blog_single_content mt-4 ">
      <h3 className="text-center p-4">{blog.title}</h3>
      <div dangerouslySetInnerHTML={renderHtmlContent(blog.content)} />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  // Replace with your API endpoint to fetch all blog slugs
  const res = await fetch(`${port}/api/blogSlugs`);
  const slugs = await res.json();

  // Generate paths for all slugs
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Replace with your API endpoint to fetch the individual blog by slug
  const res = await fetch(`${port}/api/blogs/${slug}`);
  const blog = await res.json();

  return {
    props: { blog },
  };
}

export default Blog;
