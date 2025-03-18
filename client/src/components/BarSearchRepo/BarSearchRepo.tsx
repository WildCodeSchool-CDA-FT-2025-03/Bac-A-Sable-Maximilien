import './BarSearchRepo.css'
import { FaGithub, FaSearch } from "react-icons/fa";

const BarSearchRepo = () => {

    return (

        <div className='bar-search'>

            <FaGithub size="1.7rem"/>
            <input className="bar-input" type="text"/>
            <div className="bar-enter">
                <FaSearch size="1.3rem"/>
            </div>
        </div>
    )
}

export default BarSearchRepo;