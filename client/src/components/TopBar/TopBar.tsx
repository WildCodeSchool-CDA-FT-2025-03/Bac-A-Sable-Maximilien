// import { DiGithubFull } from "react-icons/di";
import "./TopBar.css"
// import "./GitHub_Logo_White.png"

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className=".icon-top-bar">
                <img src="GitHub_Logo_White.png" className="icon-img"></img>
                {/* <DiGithubFull size="6rem"/> */}
            </div>
        </div>
    )
}

export default TopBar;