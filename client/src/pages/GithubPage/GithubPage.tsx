import BarSearchRepo from "@/components/BarSearchRepo/BarSearchRepo";
import { ToolsBar } from "@/components/ToolsBar/ToolsBar";

import "./GithubPage.css"

const GithubPage = () => {

    return (
        <div className="github-page">
            <BarSearchRepo/>
            <ToolsBar/>
        </div>
    )
}
export default GithubPage;