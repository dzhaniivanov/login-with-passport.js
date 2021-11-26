
const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Passport.js test</span>
            <ul className="list">
                <li className="listItem">
                    <img src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className="avatar" />
                </li>
                <li className="listItem">
                    Ivan Ivanov
                </li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
    )
}

export default Navbar
