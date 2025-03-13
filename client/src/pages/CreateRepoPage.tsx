import { useRef, FormEvent } from "react";
import "./CreateRepoPage.css"
import InputForm from "@/components/InputForm/InputForm";
import { ConstructGitHubRepository } from "@shared/repository.types";
import useRepos from "@/services/repositories.service";

const CreateRepoPage = () => {
    const {addNewRepository} = useRepos();

    const input_user = useRef("");
    const input_name = useRef("");
    const input_private = useRef(false);

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const repo: ConstructGitHubRepository = {
            user: input_user.current,
            name: input_name.current,
            isPrivate: input_private.current,
        };

        addNewRepository(repo);
    }

    return (
        <>
        <h2>Create Repository</h2>
        <form className="form_create" onSubmit={submit}>
            <InputForm type="text" name="User" value={input_user} require={true}/>
            <InputForm type="text" name="Project Name" value={input_name} require={true}/>
            <InputForm type="checkbox" name="Is private" value={input_private}/>

            <button type="submit">Ajouter</button>
        </form>
        </>
    );
}

export default CreateRepoPage;