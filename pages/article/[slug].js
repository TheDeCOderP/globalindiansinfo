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
        <div className="article_single_page">
            <div className="article_single_image">
                <Image src={`/${article.imagepath}`} width={600} height={400} />
            </div>
            <div className="single_article_body container pt-10">
                <h1 className="capitalize">{article.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: article.description }} />
            </div>
        </div>
    );
};

export default SingleArticle;
