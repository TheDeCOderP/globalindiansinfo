import Link from "next/link";
import AllBlogs from '@/components/admin/blogs/view';

const Blogs = () => {
    return (
        <>
        <div className="section text-center">
        <Link href="/pcsadmin/blogs/add"> <button className= "button m-2">Add New Blog</button></Link>
        <Link href="/pcsadmin/blogs/view"><button className= "button  m-2">View All Blogs</button></Link>
        <div className="all_blogs">
            <AllBlogs/>
        </div>
        
            
            </div></>
    )
}

Blogs.layout = "admin";

export default Blogs;