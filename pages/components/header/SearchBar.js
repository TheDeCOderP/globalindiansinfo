import React, { useState } from 'react';
import {Button,Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';



const SearchComponent = () => {
  /* const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredHeadings = headings.filter((heading) =>
    heading.toLowerCase().includes(searchTerm.toLowerCase())
  ); */

  return (
    
        <>
          <Form.Control
            type="text"
            placeholder="Search..."
            action
          />
          <Button variant="dark" type="submit" className="search_button">
                  <FaSearch />
                </Button>
                </>
       

  
  );
};

export default SearchComponent;
