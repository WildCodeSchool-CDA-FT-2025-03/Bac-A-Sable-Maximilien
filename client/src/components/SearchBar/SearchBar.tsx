import "./SearchBar.css"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { ResponseRepositoryMetadata } from "@shared/requests.types";
import IconLanguage  from "@/components/Language/IconLanguage";
import useUser from "@/contexts/userContext";

type PropsSearchBar = {
    datas: ResponseRepositoryMetadata[]
};

const SearchBar = (props: PropsSearchBar) => {
    const {languagesFilter, setLanguagesFilter, paging, setPaging} = useUser();

    const data = props.datas;

    const totaux = data.reduce((acc, d) => {
        acc.total += d.total;
        acc.languages.push(...d.languages);
        return acc;
    }, {total: 0, languages: []} as {total: number, languages: string[]});

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


    let count_page = 1;
    let max_page = 1;
    if(totaux.total !== 0 && paging.count !== 0) {
        max_page = Math.ceil( totaux.total / paging.count );
        if(paging.count !== 0) {
            count_page = max_page;
        }
    }
    const current_page = paging.page + 1;

    const turnPage = (dir: 'back' | 'next') => {
        if(dir === 'next' && current_page < count_page) {
            setPaging({count: paging.count, page: paging.page + 1});
        }
        else if(dir === 'back' && paging.page > 0){
            setPaging({count: paging.count, page: paging.page - 1});
        }
    };

    const list_languages = totaux.languages;

    const arrowCallClass = (dir: 'back' | 'next') => {
        if(dir === 'back') {
            if(current_page === 1) {
                return "disable"
            }
            else {
                return "selectable"
            }
        }
        else {
            if(current_page === max_page) {
                return "disable"
            }
            else {
                return "selectable"
            }
        }
    }

    return (
        <div className="search-bar">
            <p className="search-bar_side ">Found: {totaux.total}</p>
             <div>
                {list_languages.map(l =>
                    <span className="ptr_click" key={crypto.randomUUID()} onClick={()=>setFilter(l)} title={l}>
                        <IconLanguage  key={crypto.randomUUID()} lang={l} selected={!languagesFilter.includes(l)} />
                    </span>
                )}
            </div>
            <div className="">
                <FaAngleLeft className={arrowCallClass('back')} size="1.2rem" onClick={()=>{turnPage('back')}}/>
                <span className="unselectable">{current_page} / {count_page}</span>
                <FaAngleRight className={arrowCallClass('next')} size="1.2rem" onClick={()=>{turnPage('next')}}/>
            </div>
        </div>
    )
}

export default SearchBar;