import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [dropDown, showDropdown] = useState(false);

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <div className='dropDown' o nClick={() => showDropdown(!dropDown)}>
                        <span>Hooks</span>
                        {dropDown && (
                            <ol className="set">
                                <li><Link to='/useState'>useState</Link></li>
                                <li><Link to='/useEffect'>useEffect</Link></li>
                            </ol>
                        )}
                    </div>
                    <li><Link to='/Gallery'>Gallery</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/Signup'>Signup</Link></li>
                    <li><Link to='/UseEffectApi'>UseEffectApi</Link></li>
                    <li><Link to='/UseMemo'>UseMemo</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
