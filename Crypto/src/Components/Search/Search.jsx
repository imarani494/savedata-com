import styles from "./Search.module.css";
import { FcSearch } from "react-icons/fc";
import { useState } from "react";

const Search = ({ searchValuefn }) => {
  const [search, setSearch] = useState(""); 

  const submitFn = (e) => {
    e.preventDefault();
    if (!search) return; 

    searchValuefn(search); 
    setSearch("");
  };

  return (
    <div className={styles.searchStyle}>
      <form action="#" onSubmit={submitFn}>
        <div>
          <div className={styles.searchIconStyle}>
            <FcSearch className={styles.searchIcon} />
          </div>
          <label htmlFor="search">
            <input
              type="search"
              name="search"
              className={styles.searchedValue}
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <button type="submit">Search Coin</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
