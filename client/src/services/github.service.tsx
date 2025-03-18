import { useState } from "react";

const useGithub = () => {
    const [users, setUsers] = useState<string[]>([]);


    return {
        users, setUsers
    }

}

export default useGithub;