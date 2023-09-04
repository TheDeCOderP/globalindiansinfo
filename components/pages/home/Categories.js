import Categories from '@/api/articles/categories'
import Link from 'next/link';
import Image from 'next/image';
const HomeCategories = () => {
    return (
        
            <div className="row">
               
        {
           Categories.map((item) => (
            
            <div className="col-sm-12 col-lg-4 col-md-4 mb-4" key={item.id}>
                
                    <Link href={`/${item.link}`}>
                    <div className="category_image">
                        <Image className="aspect-ratio" src={`/${item.imagepath}`} width={500} height={400}></Image>
                    </div>
                    <div className="category_body">
                        <h3 className="text-center">{item.title}</h3>
                    </div>
                        </Link>               
                

            </div>
           
           )) 
        }
        </div> 
    )
}

export default HomeCategories;