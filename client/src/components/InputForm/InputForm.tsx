import { RefObject, ChangeEvent } from "react";

type PropsInputForm = {
    name: string,
    type: "text" | "checkbox",
    value: RefObject<string | boolean>,
    require?: boolean,
};

const InputForm = (props: PropsInputForm) => {
    const input_type = props.type;
    const value = props.value;
    const name = props.name;
    const require = props.require;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(input_type !== "checkbox") {
            value.current = e.target.value;
        }
        else {
            value.current = e.target.checked;
        }
    }

    return (
        <label>
            {name}
            <input type={input_type} onChange={handleChange} required={require}/>
        </label>
    )
};

export default InputForm;