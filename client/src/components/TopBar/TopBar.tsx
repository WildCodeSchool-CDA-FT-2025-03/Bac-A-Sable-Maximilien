import { Link, useLocation } from "react-router-dom";
import "./TopBar.css"

const TopBar = () => {
    const location = useLocation();

    const selectedApi = () => {
        const className =  location.pathname === "/static" ?
            "top-bar-selected-right" : "top-bar-selected-left";
        console.log(className);
        return className;
    }

    return (
        <div className="top-bar">
            <div className=".icon-top-bar">
                <img src="GitHub_Logo_White.png" className="icon-img"></img>
            </div>
            <div className="icons">

                <div className="top-bar-icon">
                    <Link to="/">API GitHub</Link>
                </div>

                <div className="top-bar-icon">
                    <Link to="/static">Static</Link>
                </div>

                <div className={"top-bar-selected "+selectedApi()}></div>
            </div>
        </div>
    )
}

export default TopBar;