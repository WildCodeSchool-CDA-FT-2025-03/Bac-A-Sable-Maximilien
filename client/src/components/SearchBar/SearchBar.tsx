import "./SearchBar.css"
import { Repositories } from "@shared/repository.types";
import IconLanguage  from "@/components/Language/IconLanguage";
import useUser from "@/contexts/userContext";
import useRepos from "@/services/repositories.service";
type PropsSearchBar = {
    repos: Repositories
};

const SearchBar = (props: PropsSearchBar) => {
    const {languagesFilter, setLanguagesFilter} = useUser();

    const repos = props.repos;

    const setFilter = (lang: string) => {
        console.log(languagesFilter);
        let f = [...languagesFilter];
        console.log(f);

        if(languagesFilter.includes(lang)) {
            f = f.filter(l => l !== lang);
        }
        else {
            f = [...f, lang];
        }
        console.log(f);

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
                    <span key={crypto.randomUUID()} onClick={()=>setFilter(l)}>
                        <IconLanguage key={crypto.randomUUID()} lang={l} selected={!languagesFilter.includes(l)}/>
                    </span>
                )}
            </div> 
        </div>
    )
}

export default SearchBar;