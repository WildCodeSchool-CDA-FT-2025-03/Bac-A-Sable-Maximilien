import { Link, useLocation } from "react-router-dom";
import "./TopBar.css"

const TopBar = () => {
    const location = useLocation();

    const selectedApi = (path: string) => {
        return location.pathname === path ? "top-bar-selected" : "";
    }

    return (
        <div className="top-bar">
            <div className=".icon-top-bar">
                <img src="GitHub_Logo_White.png" className="icon-img"></img>
            </div>
            <div className="top-bar-icon-right">
                <Link to="/">
                    <div className={"icon-github-button "+selectedApi("/")}>API GitHub</div>
                </Link>
                <Link to="/static">
                    <div className={"icon-github-button "+selectedApi("/static")}>Static</div>
                </Link>
            </div>
        </div>
    )
}

export default TopBar;