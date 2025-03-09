import repository from "./middlewares/repository/repository"

export default {
    GetRepositorys: [
        repository.validation.getRepositorys,
        repository.finally.getRepositorys,
    ],

    GetRepositoryFromID: [
        repository.validation.getRepositorys,
        repository.finally.getOneRepository,
    ],

    Delete: [
        repository.finally.deleteRepository,
    ],
}
