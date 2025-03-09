import repository from "./middlewares/repository/repository"

export default {
    GetRepositorys: [
        repository.validation.getRepositorys,
        repository.finally.getRepositorys,
    ],

    GetRepositoryFromID: [
        repository.validation.getRepositorys,
        repository.filter.match,
        repository.filter.limit,
        repository.filter.fields,
        repository.finally.getOneRepository,
    ],

    Delete: [
        repository.validation.getRepositorys,
        repository.filter.match,
        repository.finally.deleteRepository,
    ],
}
