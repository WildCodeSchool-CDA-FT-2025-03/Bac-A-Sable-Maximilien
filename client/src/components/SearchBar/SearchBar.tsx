import "./SearchBar.css"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Repositories } from "@shared/repository.types";
import IconLanguage  from "@/components/Language/IconLanguage";
import useUser from "@/contexts/userContext";

type PropsSearchBar = {
    repos: Repositories
};

const SearchBar = (props: PropsSearchBar) => {
    const {languagesFilter, setLanguagesFilter, paging} = useUser();

    const repos = props.repos;

    const setFilter = (lang: string) => {
        let f = [...languagesFilter];

        if(languagesFilter.includes(lang)) {
            f = f.filter(l => l !== lang);
        }
        else {
            f = [...f, lang];
        }

        setLanguagesFilter(f);
    };


    const languages = repos.reduce((acc, r) => {
        r.languages.forEach(l => {
            const lang = l.node.name.toLowerCase();
            if (!acc.includes(lang)) {
                acc.push(lang);
            }
        });
        return acc;
    }, [] as string[])


    const list_languages = [...languages.filter(l => !languagesFilter.includes(l)), ...languagesFilter].sort();

    return (
        <div className="search-bar">
            <p>Found: {repos.length}</p>
             <div>
                {list_languages.map(l => 
                    <span key={crypto.randomUUID()} onClick={()=>setFilter(l)} title={l}>
                        <IconLanguage  key={crypto.randomUUID()} lang={l} selected={!languagesFilter.includes(l)} />
                    </span>
                )}
            </div>
            <div>
                <FaAngleLeft className="selectable" size="1.2rem"/>
                <span>{paging.page + 1} / 1</span>
                <FaAngleRight className="selectable" size="1.2rem"  />
            </div>
        </div>
    )
}

export default SearchBar;