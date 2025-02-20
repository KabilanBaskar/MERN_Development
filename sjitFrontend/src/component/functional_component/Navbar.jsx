import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'
const Navbar = () => {
    return (
        <header>
            <nav style={{listStyleType:"none",textAlign:"center"}}>
                <li><Link to = '/Home'>Home</Link></li>
                <li><Link to = '/About'>About</Link></li>   
                <span>Hooks</span>
                <ol>
                    <li><Link to = '/useState'>useState</Link></li>
                    <li><Link to = '/useEffect'>useEffect</Link></li>
                </ol>
                <li><Link to = '/Gallery'>Gallery</Link></li>
                <li><Link to = '/Contact'>Contact</Link></li>
                <li><Link to = '/Signup'>Signup</Link></li>
            </nav>
        </header>
    )
}
export default Navbar;