// import Blogs from '@/api/blogs/blogs.js';
import Image from 'next/image';
import Link from 'next/link';

const AllBlogs = () => {
    return (
     <div className="container">
        <div className="row">

            <h2>Will Be Uploaded Soon... </h2>
        {/* {
            Blogs.map((item) =>
            <div className="col-sm-12 col-lg-4 col-md-4" key={item.id}>

                <Link href={`/blogs/${item.slug}`}>
                <div className="blog_image">
                    <Image src={`/${item.imagepath}`} width={300} height={300} alt="blogs"></Image>
                </div>
                <div className="blog_body">
                    <h4>{item.title}</h4>
                </div>
                </Link>

            </div>
            
            )

        } */}
        </div>
        </div>
    )

}

AllBlogs.layout = 'other';

export default AllBlogs;