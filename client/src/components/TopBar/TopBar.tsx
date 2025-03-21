import { Link, useLocation } from "react-router-dom";
import "./TopBar.css"

const TopBar = () => {
    const pathname = useLocation().pathname
                        .split('/')
                        .filter(p => p != '');

    const selectedApi = () => {
        const className =  pathname.length > 0 && pathname[0] === 'static'?
            "top-bar-selected-right" : "top-bar-selected-left";
        return className;
    }

    return (
        <div className="top-bar">
            <div className=".icon-top-bar">
                <Link to={location}>
                    <img src="GitHub_Logo_White.png" className="icon-img"></img>
                </Link>
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