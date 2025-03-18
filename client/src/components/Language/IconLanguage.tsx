import { IoDocumentText } from "react-icons/io5";
import { FaPython, FaRust, FaQuestion, FaJava, FaNodeJs, FaPhp, FaSwift, FaHtml5, FaCss3Alt, FaDocker, FaReact, FaMarkdown } from "react-icons/fa6";
import { TbBrandPowershell, TbBrandTypescript, TbBrandCSharp, TbBrandKotlin, TbBrandGolang, TbSql, TbBrandJavascript, TbBrandAngular, TbBrandNuxt, TbBrandVue, TbBrandNextjs, TbBrandSvelte, TbBrandDjango, TbZigzag } from "react-icons/tb";
import { SiVim, SiCmake, SiDart, SiRuby, SiScala, SiHaskell, SiLua, SiElixir, SiClojure, SiGradle, SiNim, SiExpress, SiLaravel, SiFlask, SiSpring, SiZig } from "react-icons/si";
import { PiFileCppBold } from "react-icons/pi";

type PropsLanguage = {
    lang: string,
    selected: boolean,
};

const IconLanguage = (props: PropsLanguage) => {
    const baseClass = props.selected ? "selected" : "disable";

    switch(props.lang.toLowerCase()) {
        case "c++":
            return <PiFileCppBold className={baseClass} size="1.2rem" color="#4D9EE6"/>;
        case "cpp":
            return <PiFileCppBold className={baseClass} size="1.2rem" color="#4D9EE6"/>;
        case "python":
            return <FaPython className={baseClass} size="1.2rem" color="#5F9AD3"/>;
        case "rust":
            return <FaRust className={baseClass} size="1.2rem" color="#E67E45"/>;
        case "shell":
            return <TbBrandPowershell className={baseClass} size="1.2rem" color="#79B4FE"/>;
        case "vim script":
            return <SiVim className={baseClass} size="1.2rem" color="#4DD17A"/>;
        case "cmake":
            return <SiCmake className={baseClass} size="1.2rem" color="#4A92D6"/>;
        case "renderscript":
            return <IoDocumentText className={baseClass} size="1.2rem" color="#ADADAD"/>;
        case "javascript":
            return <TbBrandJavascript className={baseClass} size="1.2rem" color="#FAE86B"/>;
        case "typescript":
            return <TbBrandTypescript className={baseClass} size="1.2rem" color="#6AA9EA"/>;
        case "java":
            return <FaJava className={baseClass} size="1.2rem" color="#FFAE4D"/>;
        case "c#":
            return <TbBrandCSharp className={baseClass} size="1.2rem" color="#4DC761"/>;
        case "csharp":
            return <TbBrandCSharp className={baseClass} size="1.2rem" color="#4DC761"/>;
        case "go":
            return <TbBrandGolang className={baseClass} size="1.2rem" color="#49CCF0"/>;
        case "golang":
            return <TbBrandGolang className={baseClass} size="1.2rem" color="#49CCF0"/>;
        case "ruby":
            return <SiRuby className={baseClass} size="1.2rem" color="#FF7A76"/>;
        case "php":
            return <FaPhp className={baseClass} size="1.2rem" color="#A5A0D6"/>;
        case "swift":
            return <FaSwift className={baseClass} size="1.2rem" color="#FF8871"/>;
        case "kotlin":
            return <TbBrandKotlin className={baseClass} size="1.2rem" color="#A585FF"/>;
        case "html":
            return <FaHtml5 className={baseClass} size="1.2rem" color="#FF8159"/>;
        case "css":
            return <FaCss3Alt className={baseClass} size="1.2rem" color="#52A0E8"/>;
        case "dart":
            return <SiDart className={baseClass} size="1.2rem" color="#4DB0F2"/>;
        case "scala":
            return <SiScala className={baseClass} size="1.2rem" color="#FF7B79"/>;
        case "haskell":
            return <SiHaskell className={baseClass} size="1.2rem" color="#9079C4"/>;
        case "lua":
            return <SiLua className={baseClass} size="1.2rem" color="#6F6FB8"/>;
        case "elixir":
            return <SiElixir className={baseClass} size="1.2rem" color="#8B59B0"/>;
        case "clojure":
            return <SiClojure className={baseClass} size="1.2rem" color="#8AAFE9"/>;
        case "sql":
            return <TbSql className={baseClass} size="1.2rem" color="#71A3D6"/>;
        case "docker":
            return <FaDocker className={baseClass} size="1.2rem" color="#5FB8FF"/>;
        case "react":
            return <FaReact className={baseClass} size="1.2rem" color="#8DEFFB"/>;
        case "node":
            return <FaNodeJs className={baseClass} size="1.2rem" color="#5ECC5E"/>;
        case "nodejs":
            return <FaNodeJs className={baseClass} size="1.2rem" color="#5ECC5E"/>;
        case "gradle":
            return <SiGradle className={baseClass} size="1.2rem" color="#5D7E8A"/>;
        case "markdown":
            return <FaMarkdown className={baseClass} size="1.2rem" color="#6B6B6B"/>;
        case "nim":
            return <SiNim className={baseClass} size="1.2rem" color="#FFC866"/>;
       case "zig":
            return <SiZig className={baseClass} size="1.2rem" color="#F7A41D"/>;
        case "angular":
            return <TbBrandAngular className={baseClass} size="1.2rem" color="#FF6B8B"/>;
        case "vue":
            return <TbBrandVue className={baseClass} size="1.2rem" color="#5BD6A2"/>;
        case "svelte":
            return <TbBrandSvelte className={baseClass} size="1.2rem" color="#FF3E00"/>;
        case "nextjs":
            return <TbBrandNextjs className={baseClass} size="1.2rem" color="#A3A3A3"/>;
        case "next":
            return <TbBrandNextjs className={baseClass} size="1.2rem" color="#A3A3A3"/>;
        case "nuxt":
            return <TbBrandNuxt className={baseClass} size="1.2rem" color="#5ED9A7"/>;
        case "express":
            return <SiExpress className={baseClass} size="1.2rem" color="#A8A8A8"/>;
        case "expressjs":
            return <SiExpress className={baseClass} size="1.2rem" color="#A8A8A8"/>;
        case "django":
            return <TbBrandDjango className={baseClass} size="1.2rem" color="#44B78B"/>;
        case "laravel":
            return <SiLaravel className={baseClass} size="1.2rem" color="#FF7B7B"/>;
        case "flask":
            return <SiFlask className={baseClass} size="1.2rem" color="#B3B3B3"/>;
        case "spring":
            return <SiSpring className={baseClass} size="1.2rem" color="#6DB33F"/>;
        default:
            return <FaQuestion className={baseClass} size="1.2rem" color="#F07F73"/>
    }
}

export default IconLanguage;