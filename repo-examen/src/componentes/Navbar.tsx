
function Navbar() {

    return (
        <div className="Nav">
            <nav className="Nav-nav">
                <div className="nav-div-content">
                    <ul className="nav-div-content-ul">
                        <li className="ul-nav__item">
                            <a className="nav__buttom" onClick={() => window.location.href = 'http://localhost:5173'}>Home</a>
                        </li>
                        <li className="ul-nav__item">
                            <a className="nav__buttom" onClick={() => window.location.href = 'http://localhost:5173/crud'}>CRUD</a>
                        </li>
                        
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;