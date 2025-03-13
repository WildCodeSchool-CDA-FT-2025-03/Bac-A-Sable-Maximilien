import { TbBrandCpp } from "react-icons/tb";
import { FaPython, FaRust, FaQuestion } from "react-icons/fa6";
import { TbBrandPowershell } from "react-icons/tb";

type PropsLanguage = {
    lang: string,
    selected: boolean,
};

const IconLanguage = (props: PropsLanguage) => {

    switch(props.lang) {
        case "c++": return <TbBrandCpp className={props.selected ? "selected" : ""} />;
        case "python": return <FaPython className={props.selected ? "selected" : ""} />;
        case "rust": return <FaRust className={props.selected ? "selected" : ""}/>;
        case "shell": return <TbBrandPowershell className={props.selected ? "selected" : ""}/>;
        default: return <FaQuestion className={props.selected ? "selected" : ""}/>
    }
}

export default IconLanguage;