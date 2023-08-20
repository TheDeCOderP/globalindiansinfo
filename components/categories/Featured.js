import Categories from '@/api/articles/categories';
import Link from 'next/link';

const AllCategories = () => {
  const FeaturedCategories = Categories.slice(0,6);
  return (
    <div className="category_grid container">
      <div className="row">
        {FeaturedCategories.map((item) => (
          <div key={item.id} className="article_column col-sm-6 col-md-4 col-lg-4">
            <Link href={`/category/${item.title?.toLowerCase()}`}>
              <div className="thumbnail">
                <img className="category_image" src={item.imagepath} alt={item.title} />
              </div>
              <div className="category_body">
                <h3 className="text-center">{item.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
