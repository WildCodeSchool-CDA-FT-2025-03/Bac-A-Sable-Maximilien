import { BiListUl, BiGridAlt } from "react-icons/bi";
import useUser, {DisplayCard} from "@/contexts/userContext";
import './ToolsBar.css'

export const ToolsBar = () => {
    const {displayCard , setDisplayCard, paging, setPaging} = useUser();

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
            <select className="select_inline" name="limit"
                    value={paging.count}
                    onChange={(e) => setPaging({...paging, count: +e.target.value})}
                    >
                <option value="0">all</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
            <div className="select_inline">
                <BiListUl className={"selectable " + selectColor("list")} onClick={()=>setDisplayCard("list")}/>
                <BiGridAlt className={"selectable " + selectColor("grid")} onClick={()=>setDisplayCard("grid")}/>
            </div>
        </div>
    )
}