import { IoDocumentText } from "react-icons/io5";
import { FaPython, FaRust, FaQuestion } from "react-icons/fa6";
import { TbBrandPowershell } from "react-icons/tb";
import { SiVim, SiCmake } from "react-icons/si";
import { PiFileCppBold } from "react-icons/pi";

type PropsLanguage = {
    lang: string,
    selected: boolean,
};

const IconLanguage = (props: PropsLanguage) => {

    switch(props.lang) {
        case "c++": return <PiFileCppBold className={props.selected ? "selected" : ""} size="1.2rem"/>;
        case "cpp": return <PiFileCppBold className={props.selected ? "selected" : ""} size="1.2rem"/>;
        case "python": return <FaPython className={props.selected ? "selected" : ""} size="1.2rem"/>;
        case "rust": return <FaRust className={props.selected ? "selected" : ""} size="1.2rem"/>;
        case "shell": return <TbBrandPowershell className={props.selected ? "selected" : ""} size="1.2rem"/>;
        case "vim script": return <SiVim className={props.selected ? "selected" : ""} size="1.2rem"/>;
        case "cmake": return <SiCmake className={props.selected ? "selected" : ""} size="1.2rem"/>;
        case "renderscript": return <IoDocumentText className={props.selected ? "selected" : ""} size="1.2rem"/>;
        default: return <FaQuestion className={props.selected ? "selected" : ""} size="1.2rem"/>
    }
}

export default IconLanguage;