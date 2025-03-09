import repository from "./middlewares/repository/repository";
import errorHandler from "./middlewares/error.middlewares";

export default {
  Get: [
    repository.validation.getRepositorys,
    repository.finally.getRepositorys,
    errorHandler,
  ],

  GetFromID: [
    repository.validation.getRepositorys,
    repository.finally.getOneRepository,
    errorHandler,
  ],

  Delete: [
    repository.validation.newRepository,
    repository.finally.deleteRepository,
    errorHandler,
  ],

  Add: [
    repository.validation.newRepository,
    repository.finally.addRepository,
    errorHandler,
  ],

  Update: [
    repository.validation.updateRepository,
    repository.finally.updateRepository,
    errorHandler,
  ],
};
