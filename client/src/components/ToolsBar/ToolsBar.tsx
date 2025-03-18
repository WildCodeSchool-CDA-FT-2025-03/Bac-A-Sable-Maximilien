import { ReactNode } from "react";
import { BiListUl, BiGridAlt, BiAddToQueue } from "react-icons/bi";
import { Link } from "react-router-dom";
import UserName from "@/components/UserName/UserName";

import useUser, {DisplayCard} from "@/contexts/userContext";

import './ToolsBar.css'


export const ToolsBar = ({githubUsers = []}) => {
    const {displayCard , setDisplayCard, paging, setPaging} = useUser();

    const githubApi = true;

    const selectColor = (type: DisplayCard) => {
        if(type === displayCard) {
            return "selected";
        }
        else {
            return "";
        }
    }

    const getOptional = (): ReactNode => {
        if(githubApi === false) {
            return (
                <Link to={`/create`}>
                    <BiAddToQueue className="selectable" size="1.5rem"/>
                </Link>
            )
        }
        else {
            console.log(githubUsers);
            return (
                <div>
                    {githubUsers.map(u => <UserName name={u}/>)}
                </div>
            )
        }
    }

    return (
        <div className="tools-bar">
            {getOptional()}
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