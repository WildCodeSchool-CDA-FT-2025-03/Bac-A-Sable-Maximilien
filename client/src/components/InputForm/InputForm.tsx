import { RefObject, ChangeEvent } from "react";

type PropsInputForm = {
    name: string,
    type: "text" | "checkbox",
    value: RefObject<string | boolean>,
};

const InputForm = (props: PropsInputForm) => {
    const input_type = props.type;
    let value = props.value;
    let name = props.name;

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
            <input type={input_type} onChange={handleChange}/>
        </label>
    )
};

export default InputForm;