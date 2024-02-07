import { Outlet, Link } from "react-router-dom";
import "./layout.css";

const Layout = () => {
    return (
        <>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/therichdad">The Rich Dad</Link>
                </li>
                <li>
                    <Link to="/thinkandgrowrich">Think And Grow Rich</Link>
                </li>
                <li>
                    <Link to="/fourhourworkweek">Four Hour Work Week</Link>
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