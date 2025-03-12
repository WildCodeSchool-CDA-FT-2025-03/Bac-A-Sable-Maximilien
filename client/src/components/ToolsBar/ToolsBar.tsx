import { BiListUl, BiGridAlt } from "react-icons/bi";
import useUser, {DisplayCard} from "@/contexts/userContext";
import './ToolsBar.css'

export const ToolsBar = () => {
    const {displayCard , setDisplayCard} = useUser();

    const selectColor = (type: DisplayCard) => {
        if(type === displayCard) {
            return "selected";
        }
        else {
            return "";
        }
    }

    return (
        <div className="tools-bar">
            <select className="select_inline" name="limit">
                <option value="all">all</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
            <div className="select_inline">
                <BiListUl className={selectColor("list")} onClick={()=>setDisplayCard("list")}/>
                <BiGridAlt className={selectColor("grid")} onClick={()=>setDisplayCard("grid")}/>
            </div>
        </div>
    )
}