



// services/openaiService.js
import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/chat/completions'; // Updated endpoint for GPT-4 or GPT-3.5-turbo
const API_KEY = process.env.OPENAI_API_KEY; // Store your API key securely

// export const generateText = async (prompt) => {
//     try {
//         const response = await axios.post(
//             API_URL,
//             {
//                 model: 'gpt-4', // Use a newer model
//                 messages: [
//                     { role: 'user', content: prompt }
//                 ],
//                 max_tokens: 100,
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${API_KEY}`,
//                 },
//             }
//         );
//         return response.data.choices[0].message.content.trim(); // Adjust based on response format
//     } catch (error) {
//         if (error.response && error.response.data) {
//             const errorMessage = error.response.data.message || 'An error occurred';
//             if (error.response.data.code === 'insufficient_quota') {
//                 console.error('Quota exceeded. Please check your plan and billing details.');
//             } else {
//                 console.error('Error:', errorMessage);
//             }
//         } else {
//             console.error('Error:', error.message);
//         }
//         throw error;
//     }
// };

// const token=process.env.API_TOKEN

// export const generateText = async (prompt) => {
//   try {
//     const response = await axios.post(
//       'https://api-inference.huggingface.co/models/gpt2',
//       { inputs: prompt },
//       {
//         headers: {
//           'Authorization': `Bearer ${token}`, // Replace with your actual API key
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     return response.data[0].generated_text; // Adjust based on the response structure
//   } catch (error) {
//     console.error('Error generating text:', error);
//     throw error;
//   }
// };

export async function generateText(prompt) {
    const response = await axios.post(
      'https://api.cohere.ai/v1/generate',
      {
        model: 'command-r-plus-08-2024',
        prompt: prompt,
        max_tokens: 100
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(response,"response")
    return response.data.generations[0].text;
  }