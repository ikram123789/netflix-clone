import './navbar.css'
function Navbar() {

    return (
        <div className="nav-bar">
            <div className="logo">
                <img src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg" alt="logo" />
            </div>
            <div className="container">
                <div className="left-side">
                    <div className="lang">
                        <select name="lang" id="lang">
                            <option value="english">English</option>
                            <option value="sspanol">Espanol</option>
                            <option value="hindi">Hindi</option>
                            <option value="german">German</option>
                        </select>
                    </div>
                    <div className="sign-in">
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar