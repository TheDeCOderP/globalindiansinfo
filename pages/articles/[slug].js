// pages/blogs/[slug].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import globalConfig from '@/config';

const port = globalConfig.port;

const Article = ({ article }) => {
  const router = useRouter();

  // Check if the data is still being fetched
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="section">
      {/* Use Next.js Image component for optimized image rendering */}
      <Image
        className="single_blog"
        src={`/uploads/images/articles/${article.imagepath}`}
        height={400}
        width={1920}
        alt={article.title} // Add alt text for accessibility
      />
      <div className="blog_single_content mt-4">
        <h3 className="text-center p-4">{article.title}</h3>
        {/* Safely render HTML content using dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: article.description }} />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch the slugs for all articles from your API
  try {
    const res = await fetch(`${port}/api/articleSlugs`);
    const slugs = await res.json();

    // Generate paths for all article slugs
    const paths = slugs.map((slug) => ({ params: { slug } }));

    return {
      paths,
      fallback: true, // Set to true to generate pages on-demand for missing slugs
    };
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Fetch the article data for the specific slug from your API
  try {
    const res = await fetch(`${port}/api/articles/${slug}`);
    const article = await res.json();

    return {
      props: { article },
    };
  } catch (error) {
    console.error(`Error fetching article for slug ${slug}:`, error);
    return {
      notFound: true, // Handle 404 errors gracefully
    };
  }
}

export default Article;
