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
    <div className="container">
       <Form inline="true" onSubmit={handleSearch}>
      <div className="row">
        
   
    <div className="col-11 searchBar">
      <Form.Control
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      <div className="col-1 searchBar">
      <Button variant="dark" type="submit" className="search_button">
        <FaSearch />
      </Button>
      </div>
      </div>
    </Form>
    
    </div>
  );
};

export default SearchBar;
