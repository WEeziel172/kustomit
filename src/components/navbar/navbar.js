import React from 'react';

const Navbar = (props) => {
    const ul =
    <ul className="navbar-ul">{props.children}</ul>;
    return ul;
}

export default Navbar;