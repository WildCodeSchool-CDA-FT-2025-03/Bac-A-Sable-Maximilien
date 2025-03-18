import { useRef } from 'react';
import './BarSearchRepo.css'
import { FaGithub, FaSearch } from "react-icons/fa";
import useUser from '@/contexts/userContext';

const BarSearchRepo = () => {

    const input = useRef<HTMLInputElement>(null);
    const {githubUser, setGithubUsers} = useUser();
    const pushUser = () => {
        const name = input.current ? input.current.value : "";
        if(name.length > 0 && !githubUser.includes(name)) {

            if(input.current !== null) {
                setGithubUsers([...githubUser, name]);
                // addUser(name);
                input.current.value = "";
            }
            console.log(githubUser);
        }
    }

    return (

        <div className='bar-search'>

            <FaGithub size="1.7rem"/>
            <input ref={input} className="bar-input" type="text"/>
            <div className="bar-enter" onClick={()=>pushUser()}>
                <FaSearch size="1.3rem"/>
            </div>

        </div>
    )
}

export default BarSearchRepo;