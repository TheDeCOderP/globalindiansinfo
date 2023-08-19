import Categories from '@/api/articles/categories';
import Link from 'next/link';

const AllCategories = () => {
  return (
    <div className="category_grid container">
      <div className="row">
        {Categories.map((item) => (
          <div key={item.id} className="category_grid col-sm-6 col-md-4 col-lg-4">
            <Link href={`/category/${item.title?.toLowerCase()}`}>
              <div className="thumbnail">
                <img className="category_image" src={item.imagepath} alt={item.title} />
              </div>
              <div className="category_body">
                <h2 className="text-center">{item.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
