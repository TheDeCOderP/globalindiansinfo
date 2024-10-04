import axios from 'axios';

// LanguageTool API URL
const LANGUAGE_TOOL_API_URL = 'https://api.languagetoolplus.com/v2/check';

// Function to check grammar using LanguageTool API
export const checkGrammar = async (text) => {
  try {
    const response = await axios.post(LANGUAGE_TOOL_API_URL, {
      text: text,
      language: 'en-US',
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Return the matches array from the API response
    return response.data.matches;
  } catch (error) {
    console.error('Error checking grammar:', error);
    throw error;
  }
};