import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </nav>
            
            <Outlet />
        </>
    )
};

export default Layout;