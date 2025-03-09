import repository from "./middlewares/repository/repository"

export default {
    Get: [
        repository.validation.getRepositorys,
        repository.finally.getRepositorys,
    ],

    GetFromID: [
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
