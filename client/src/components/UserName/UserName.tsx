import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import useUser from "@/contexts/userContext";

import './UserName.css'
type PropsUserName = {
    name: string,
    hidden: boolean,
}

const UserName = (props: PropsUserName) => {
    const name = props.name;
    const {githubUser, setGithubUsers, hiddenUser, setHidenUser} = useUser();

    const isHidden = hiddenUser.includes(name);

    const deleteUser = () => {
        const new_users = [...githubUser];
        const index = githubUser.findIndex((e) => e === name);
        new_users.splice(index, 1);
        setGithubUsers(new_users);
    }

    const setIcon = () => {
        if(!isHidden) {
            return <FaRegEye size="1rem" onClick={()=>{setHidenUser([...hiddenUser, name])}}/>
        }
        else {
            return <FaRegEyeSlash size="1rem" onClick={()=>{
                const newHiddenUser = hiddenUser.filter(e => e !== name);
                setHidenUser(newHiddenUser);
            }}/>
        }
    }

    return (
        <div className='user_name' title={name}>
            <div>{name}</div>
            <div className="user_name-icon user_name-eye" title="hidden">
                {setIcon()}
            </div>
            <div className="user_name-icon user_name-close" title="delete" onClick={()=>deleteUser()}>
                <IoCloseSharp size="1rem"/>
            </div>
        </div>
    )
}

export default UserName;