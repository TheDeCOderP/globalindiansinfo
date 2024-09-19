import Link from "next/link";
import Magazines from '@/components/admin/magazine/view';

const Articles = () => {
    return (
        <>
        <div className="section text-center">
        <Link href="/pcsadmin/magazines/add"> <button className= "button m-2">Add New Magazine</button></Link>
        <Link href="/pcsadmin/magazines/view"><button className= "button  m-2">View All Magazines</button></Link>
        <div className="all_articles mt-4">
            <Magazines/>
        </div>
            
            </div></>
    )
}

Articles.layout = "admin";

export default Articles;