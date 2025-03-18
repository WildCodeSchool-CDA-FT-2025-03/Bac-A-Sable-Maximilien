import { useLocation } from "react-router";
import { ReactNode } from "react";
import { BiListUl, BiGridAlt, BiAddToQueue } from "react-icons/bi";
import { Link } from "react-router-dom";
import UserName from "@/components/UserName/UserName";

import useUser, {DisplayCard} from "@/contexts/userContext";

import './ToolsBar.css'

type PropsToolsBar = {
    githubUsers: string[],
};

export const ToolsBar = (props: PropsToolsBar = {githubUsers: []}) => {
    const githubUsers = props.githubUsers;
    const {displayCard , setDisplayCard, paging, setPaging} = useUser();
    const location = useLocation();

    const selectColor = (type: DisplayCard) => {
        if(type === displayCard) {
            return "selected";
        }
        else {
            return "";
        }
    }

    const getOptional = (): ReactNode => {
        if(location.pathname !== "/") {
            return (
                <Link to={`/create`}>
                    <BiAddToQueue className="selectable" size="1.5rem"/>
                </Link>
            )
        }
        else {
            return (
                <div className="tools-bar-users">
                    {githubUsers.map(u => <UserName key={u} name={u} hidden={false}/>)}
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