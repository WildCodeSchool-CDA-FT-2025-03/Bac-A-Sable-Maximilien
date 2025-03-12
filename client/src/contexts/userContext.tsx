import { createContext, useState, ReactNode, useContext } from 'react';

export type DisplayCard = "list" | "grid"

export type UserContextType = {
    displayCard: DisplayCard;
    setDisplayCard: (value: DisplayCard) => void;
};

const UserContext = createContext<UserContextType>({
    displayCard: "list",
    setDisplayCard: (_: DisplayCard) => {},
  });

  export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [displayCard, setDisplayCard] = useState("list" as DisplayCard);

    return (
        <UserContext.Provider value={{displayCard, setDisplayCard}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export default useUser;