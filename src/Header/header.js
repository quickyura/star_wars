import React, {Component} from 'react';


const Header = () => {

    return (
        <div className="wrap_header">
            <h1>Star DB</h1>
            <ul className="nav">
                <li className="nav_item">
                    <a href="#">Piople</a>
                </li>
                <li className="nav_item">
                    <a href="#">Planets</a>
                </li>
                <li className="nav_item">
                    <a href="#">Starships</a>
                </li>

            </ul>
        </div>
    )

};
export default Header;