import { createContext, useState, ReactNode, useContext } from 'react';
import { Paging } from '@shared/repository.types';
export type DisplayCard = "list" | "grid"

export type UserContextType = {
    displayCard: DisplayCard;
    paging: Paging;
    setDisplayCard: (value: DisplayCard) => void;
    setPaging: (value: Paging) => void;
};

const UserContext = createContext<UserContextType>({
    displayCard: "list",
    paging: {count: 0, page: 0},
    setDisplayCard: (_: DisplayCard) => {},
    setPaging: (_: Paging) => {},
  });

  export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [displayCard, setDisplayCard] = useState("list" as DisplayCard);
    const [paging, setPaging] = useState({count: 0, page: 0});

    return (
        <UserContext.Provider value={{
            displayCard, setDisplayCard,
            paging, setPaging,
        }
            }>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export default useUser;