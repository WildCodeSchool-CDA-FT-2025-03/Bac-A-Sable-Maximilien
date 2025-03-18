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
    const {githubUser, setGithubUsers} = useUser();

    const deleteUser = () => {
        const new_users = [...githubUser];
        const index = githubUser.findIndex((e) => e === name);
        new_users.splice(index, 1);
        setGithubUsers(new_users);
    }

    return (
        <div className='user_name' title={name}>
            <div>{name}</div>
            <div className="user_name-icon user_name-eye" title="hidden">
                <FaRegEye size="1rem"/>
            </div>
            <div className="user_name-icon user_name-close" title="delete" onClick={()=>deleteUser()}>
                <IoCloseSharp size="1rem"/>
            </div>
        </div>
    )
}

export default UserName;