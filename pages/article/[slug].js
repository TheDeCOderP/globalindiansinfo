import { useRouter } from 'next/router';
import Image from 'next/image';
import Articles from '@/api/articles/articles'

const SingleArticle = () => {
    const router = useRouter();
    const { slug } = router.query;
    const article = Articles.find(item => item.slug === slug); // Assuming you have a 'slug' property in your blog data

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="container">
            <div className="article_single_image">
                <Image src={`/${article.imagepath}`} width={600} height={400} />
            </div>
            <div className="blog_body">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
            </div>
        </div>
    );
};

export default SingleArticle;
