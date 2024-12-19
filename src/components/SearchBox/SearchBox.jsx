import React from "react";
import { useDispatch } from "react-redux";
import { setNameFilter } from "../../redux/filtersSlice";
import style from './SearchBox.module.css';


const SearchBox = () => {
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      dispatch(setNameFilter(e.target.value));
    };
  
    return (
      <div className={style.searchContainer}>
        <input
          className={style.inputSearch}
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
      </div>
    );
};
 

export default SearchBox;