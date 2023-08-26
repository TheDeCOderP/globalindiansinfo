// components/SearchBar.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      router.push(`/search-results/${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    
       <Form inline="true" onSubmit={handleSearch} width={'100%'}>
        
   
    <div className="searchBar">
      <Form.Control
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button  type="submit" className="button search_button">
        <FaSearch />
      </Button>
      </div>
      
      
    </Form>
    
   
  );
};

export default SearchBar;
