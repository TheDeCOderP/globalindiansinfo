import Link from "next/link";


const AdminPage = () => {
  const data  = [
    {
      "id" : 1 ,
      "name":"Articles",
      "slug":"/pcsadmin/articles"

 },
    {
      "id" : 2 ,
      "name":"Blogs",
      "slug":"/pcsadmin/blogs"
 },
    {
      "id" : 3 ,
      "name":"Business Listings",
      "slug":"/pcsadmin/business/listings"
 },
  ]
 
  return (
    
    <div className="pt-3 pb-3">
     <div className="row">
      {data.map((items) => (
        <div className="col-sm-12 col-md-4 col-lg-4" key={items.id}>
          <Link href={items.slug}>
        <div className="data box-shadow p-3 text-center">
         <h4>{items.name}</h4>
         <button className="mt-3 button">View All {items.name}</button>
        </div>
       
        </Link>
      </div>

      )
        )}
      
     </div>
    </div>
  )
  };
AdminPage.layout = "admin";

export default AdminPage;
;
