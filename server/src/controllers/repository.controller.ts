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
        repository.validation.newRepository,
        repository.finally.deleteRepository,
    ],

    Add: [
        repository.validation.newRepository,
        repository.finally.addRepository
    ],
}
