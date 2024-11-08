// components/SearchBar.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/router';
import globalConfig from '@/config';
const port = globalConfig.port;


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      // Send the search query to your Express.js backend
      try {
        const response = await fetch(`${port}/api/store-search`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: searchQuery }),
        });

        if (response.status === 200) {
          router.push(`/search-results/${encodeURIComponent(searchQuery)}`);
        } else {
          console.error('Failed to store search query.');
        }
      } catch (error) {
        console.error('Error storing search query:', error);
      }
    }
  };

  return (
    <Form inline="true" onSubmit={handleSearch}>
      <div className="searchBar hide_on_mobile">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit" className="button search_button">
          <FaSearch />
        </Button>
      </div>
    </Form>
  );
};

export default SearchBar;
