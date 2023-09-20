import Categories from '@/api/articles/categories'
import Link from 'next/link';
import Image from 'next/image';
const HomeCategories = () => {
    return (
        
            <div className="row">
               
        {
           Categories.map((item) => (
            
            <div className="col-sm-12 col-lg-2 col-md-2 mb-4 " key={item.id}>
                
                    <Link href={`/${item.link}`}>
                    <div className="category_image">
                        <Image className="aspect-ratio" src={`/${item.imagepath}`} width={500} height={400} alt="categories"></Image>
                    </div>
                    <div className="category_body box-shadow">
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