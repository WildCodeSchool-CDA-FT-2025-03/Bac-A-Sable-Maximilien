
type PropsUserName = {
    name: string,
}

const UserName = (props: PropsUserName) => {
    const name = props.name;

    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default UserName;