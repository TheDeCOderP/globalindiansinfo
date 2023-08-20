
 

const LatestArticles = [
  {
    id: '1',
    title: 'Any panditji number who can do hawan',
    description:'<a href="tel:1234567890">Hello</a>',
    imagepath: 'uploads/images/articles/a1.jpg',
    categories: ['featured', 'business', 'education', 'events'],
  },
  
  {
    id: '2',
    title: 'What is the alternative for MSeal here in UK',
    description: 'Sugru',
    imagepath: 'uploads/images/articles/sugru.jpg',
    categories: ['featured', 'business', 'education', 'events'],
  },
  // Add more articles here if needed
];

// Generate slugs and assign them to the articles
LatestArticles.forEach(article => {
  article.slug = `${article.title.toLowerCase().replace(/\s+/g, '-')}`;
});

export default LatestArticles;
