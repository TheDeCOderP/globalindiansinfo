const Blogs = [

    {
        'id' : '1',
        'title':'Navigating Cross-Cultural Identity: Insights from Global Indians',
        'description':`<p><b>Navigating Cross-Cultural Identity: Insights from Global Indians</b></p>
        <p>In an increasingly interconnected world, the concept of identity hasbecome more complex, especially for those who belong to multiple cultures. One such group is the Global Indian community, individuals of Indian origin who have settled in various parts of the world. Navigating a cross-cultural identity is a fascinating journey that involves balancing heritage, adapting to new environments, and forging a unique sense of self. In this blog, we delve into the experiences of Global Indians and uncover valuable insights into how they navigate their multifaceted identities.</p>
        `,
        'imagepath':'uploads/images/blogs/blog2.jpg',
        
    },
    
]


// Generate slugs and assign them to the articles
Blogs.forEach(blog => {
    blog.slug = `${blog.title.toLowerCase().replace(/\s+/g, '-')}`;
  });

export default Blogs;