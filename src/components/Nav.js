import React from 'react';

const Nav = ({ searchInput, handleSearchInput }) => {
    return (
        <header className="header">
           <div className="container"> 
            <nav className="nav">
                <div className="header__left">
                    <h3>React Movie App</h3>
                </div>

                <div className="header__right">
                        <input type="search" placeholder="Search Movies" onChange={searchInput}/>
                        <button type="submit" className="btn" onClick={handleSearchInput}>Search</button>
                </div>
            </nav>
            </div> 
        </header>
    )
}

export default Nav
