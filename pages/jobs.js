
import Articles from '@/api/articles/articles'
import JobsLayout from '@/components/layout/pages/Jobs';
import Image from 'next/image';
import Link from 'next/link';

const Jobs = () => {
    const  category  = "jobs";
    

    let categoryBlogs = [];
  
    if (category) {
      categoryBlogs = Articles.filter(article => article.categories.includes(category));
    }
    return (
        <section className="section">
        <JobsLayout/>
        <div className="container">
          <div className="row">
          <h1 className="text-center mb-4 mt-3">Latest <span className="green">Articals</span></h1>
         
            {categoryBlogs.slice(0,3).map(item => (
              <div key={item.id} className="article_column col-sm-12 col-lg-4 col-md-4">
                <Link href={`/article/${item.slug}`}>
                  <div className="blog_image">
                    <Image src={`/${item.imagepath}`} width={300} height={300} alt="blog_image" />
                  </div>
                  <div className="article_body">
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-3">
        <button className="button text-center text-light p-1 "><Link href={`/category/${category}`} className="text-light p-2">View All Articles</Link></button>
        </div>
      </section>
      
    )
}

Jobs.layout = "other";
export default Jobs;