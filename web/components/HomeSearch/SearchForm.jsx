import React from 'react';
import { useRouter } from 'next/router';
import componentStyles from "../../styles/Home.search.module.css";

const SearchForm = () => {
    const router = useRouter();
  
    const [searchTerm, setSearchTerm] = React.useState('');
  
    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/search?term=${searchTerm}`);
    };
  
    return (
        <form onSubmit={handleSearch} className={componentStyles["d-flex"]}>
            <input className={componentStyles["form-control"]} type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className={componentStyles["btn"]} type="submit">Search</button>
        </form>
    );
  };

export default SearchForm;