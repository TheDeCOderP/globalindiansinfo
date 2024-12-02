const axios = require('axios');

const fetchTrendingTopics = async () => {
  const options = {
    method: 'GET',
    url: 'https://newsapi90.p.rapidapi.com/trendingTopics',
    params: { region: 'US' },
    headers: {
      'x-rapidapi-key': 'c46902314cmsh5b533d6abef3418p1bcf3bjsncf1d26759a3d',
      'x-rapidapi-host': 'newsapi90.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Call the function
fetchTrendingTopics();
