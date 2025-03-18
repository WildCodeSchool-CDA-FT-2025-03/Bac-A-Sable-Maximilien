import { createContext, useState, ReactNode, useContext } from 'react';
import { Paging } from '@shared/repository.types';

export type DisplayCard = "list" | "grid"

export type UserContextType = {
    displayCard: DisplayCard;
    paging: Paging;
    languages: string[];
    languagesFilter: string[];
    githubUser: string[];
    setGithubUsers: (name: string[]) => void;
    setDisplayCard: (value: DisplayCard) => void;
    setPaging: (value: Paging) => void;
    setLanguages: (value: string[]) => void;
    setLanguagesFilter: (value: string[]) => void;
};

const UserContext = createContext<UserContextType>({
    displayCard: "list",
    paging: {count: 0, page: 0},
    languages: [],
    languagesFilter: [],
    githubUser: [],
    setGithubUsers: (_: string[]) => {},
    setDisplayCard: (_: DisplayCard) => {},
    setPaging: (_: Paging) => {},
    setLanguages: (_: string[]) => {},
    setLanguagesFilter: (_: string[]) => {},
  });

  export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [displayCard, setDisplayCard] = useState("list" as DisplayCard);
    const [paging, setPaging] = useState({count: 0, page: 0});
    const [languages, setLanguages] = useState([] as string[]);
    const [languagesFilter, setLanguagesFilter] = useState([] as string[]);
    const [githubUser, setGithubUsers] = useState<string[]>([]);

    return (
        <UserContext.Provider value={
        {
            displayCard, setDisplayCard,
            paging, setPaging,
            languages, setLanguages,
            languagesFilter, setLanguagesFilter,
            githubUser, setGithubUsers,
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export default useUser;