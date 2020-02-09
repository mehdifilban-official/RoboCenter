import React from "react";


const SearchBox = ({searchField, searchChange}) => {
    console.log("searchBox");
    return (
        <div>
            <input 
                className="pa3 ba bg-lightest-blue b--green"
                type="search" 
                placeholder="Search Robots ... "
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;