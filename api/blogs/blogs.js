const Blogs = [

    {
        'id' : '1',
        'title':'Navigating Cross-Cultural Identity: Insights from Global Indians',
        'description':`<p><b>Navigating Cross-Cultural Identity: Insights from Global Indians</b></p>
        <p>In an increasingly interconnected world, the concept of identity hasbecome more complex, especially for those who belong to multiple cultures. One such group is the Global Indian community, individuals of Indian origin who have settled in various parts of the world. Navigating a cross-cultural identity is a fascinating journey that involves balancing heritage, adapting to new environments, and forging a unique sense of self. In this blog, we delve into the experiences of Global Indians and uncover valuable insights into how they navigate their multifaceted identities.</p>
        `,
        'imagepath':'uploads/images/blogs/blog1.jpg',
        
    },
    {
        'id' : '2',
        'title':'Global Indians Unite: Stories of Connection and Belonging',
        'description':`<p><b>Global Indians Unite: Stories of Connection and Belonging</b></p>
        <p>In a world that's increasingly interconnected, the stories of Global Indians stand as inspiring narratives of connection, adaptation, and a profound sense of belonging. As individuals of Indian origin who have dispersed across the globe, they bring with them a unique blend of heritage and experiences. In this blog, we delve into the stories of Global Indians, exploring their journeys of building connections and finding a sense of belonging in diverse corners of the world.</p> `,
        'imagepath':'uploads/images/blogs/blog1.jpg',
        
    },
    {
        'id' : '3',
        'title':'blog No 3',
        'description':'blog description is here',
        'imagepath':'uploads/images/blogs/blog1.jpg',
        
    },
]


// Generate slugs and assign them to the articles
Blogs.forEach(blog => {
    blog.slug = `${blog.title.toLowerCase().replace(/\s+/g, '-')}`;
  });

export default Blogs;