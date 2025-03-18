import { useRef } from 'react';
import './BarSearchRepo.css'
import { FaGithub, FaSearch } from "react-icons/fa";
import useGithub from '@/services/github.service';

const BarSearchRepo = () => {
    const {users, setUsers} = useGithub();
    const input = useRef<HTMLInputElement>(null);

    const addUser = () => {
        const name = input.current ? input.current.value : "";
        if(name.length > 0 && !users.includes(name)) {

            if(input.current !== null) {
                setUsers([...users, name ]);
                input.current.value = "";
            }
        }
    }

    return (

        <div className='bar-search'>

            <FaGithub size="1.7rem"/>
            <input ref={input} className="bar-input" type="text"/>
            <div className="bar-enter" onClick={()=>addUser()}>
                <FaSearch size="1.3rem"/>
            </div>

        </div>
    )
}

export default BarSearchRepo;