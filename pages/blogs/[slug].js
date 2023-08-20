import { useRouter } from 'next/router';
import Image from 'next/image';
import Blogs from '@/api/blogs/blogs'; // Assuming you have the data source here

const SingleBlog = () => {
    const router = useRouter();
    const { slug } = router.query;
    const blog = Blogs.find(item => item.slug === slug); // Assuming you have a 'slug' property in your blog data

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="container">
            <div className="blog_single_image">
                <Image src={`/${blog.imagepath}`} width={600} height={400} />
            </div>
            <div className="blog_body">
                <h1>{blog.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: blog.description }} />
            </div>
        </div>
    );
};

export default SingleBlog;
