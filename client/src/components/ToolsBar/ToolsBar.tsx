import { BiListUl, BiGridAlt, BiAddToQueue } from "react-icons/bi";
import { Link } from "react-router-dom";

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
            <Link to={`/create`}>
                <BiAddToQueue className="selectable" size="1.5rem"/>
            </Link>
            <div className="box-bar">
                <select className="select_inline" name="limit"
                        value={paging.count}
                        onChange={(e) => setPaging({...paging, count: +e.target.value})}>

                    <option value="0">all</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>

                <BiListUl size="1.5rem" className={"selectable react-icons " + selectColor("list")} onClick={()=>setDisplayCard("list")}/>
                <BiGridAlt size="1.5rem" className={"selectable " + selectColor("grid")} onClick={()=>setDisplayCard("grid")}/>
            </div>
        </div>
    )
}