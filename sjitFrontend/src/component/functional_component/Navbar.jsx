import '../CSS/Navbar.css'
const Navbar = () => {
    return (
        <header>
            <nav style={{listStyleType:"none",textAlign:"center"}}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Signup</a></li>
            </nav>
        </header>
    )
}
export default Navbar;