import { useRef } from "react";
import "./CreateRepoPage.css"
import InputForm from "@/components/InputForm/InputForm";

const CreateRepoPage = () => {
    const input_user = useRef("");
    const input_name = useRef("");
    const input_private = useRef(false);

    const submit = async () => {
        console.log(input_user);
        console.log(input_private);
    }

    return (
        <>
        <h2>Create Repository</h2>
        <form className="form_create" onSubmit={submit}>
            <InputForm type="text" name="User" value={input_user}/>
            <InputForm type="text" name="Project Name" value={input_name}/>
            <InputForm type="checkbox" name="Is private" value={input_private}/>

            <button type="submit">Ajouter</button>
        </form>
        </>
    );
}

export default CreateRepoPage;