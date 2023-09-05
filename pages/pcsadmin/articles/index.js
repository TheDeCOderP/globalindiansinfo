import Link from "next/link";
import AllArticles from '@/components/admin/articles/view';

const Articles = () => {
    return (
        <>
        <div className="section text-center">
        <Link href="/pcsadmin/articles/add"> <button className= "button m-2">Add New Article</button></Link>
        <Link href="/pcsadmin/articles/view"><button className= "button  m-2">View All Articles</button></Link>
        <div className="all_articles mt-4">
            <AllArticles/>
        </div>
            
            </div></>
    )
}

Articles.layout = "admin";

export default Articles;