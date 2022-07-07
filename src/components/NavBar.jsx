import CartWidget from "./CartWidget"

function NavBar(){
    const styles={
        display: 'inline-block',
        paddingRight: 20
    }
    return(
        <nav>
            <ul>
                <li style={styles}><a href="#">Home</a></li>
                <li style={styles}><a href="#">Contact</a></li>
                <li style={styles}><a href="#">FAQ</a></li>
                <li style={styles}><CartWidget/></li>
            </ul>
        </nav>
    )
}

export default NavBar