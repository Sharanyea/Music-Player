import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import './Search.Bar.css';
import apiClient from "../../spotify";


export const SearchBar = () => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://api.spotify.com/v1/");
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

  return (
    <div className="input-wrapper"> 
    <FaSearch id="search-icon" />
    <input placeholder="What's the mood?"  
    value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  );
};
