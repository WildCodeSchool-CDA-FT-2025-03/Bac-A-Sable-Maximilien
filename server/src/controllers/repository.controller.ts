import repository from "./middlewares/repository/repository";
import errorHandler from "./middlewares/error.middlewares";
import log from "./middlewares/repository/log.middlewares";

export default {
  Get: [
    log,
    repository.validation.getRepositorys,
    repository.finally.getRepositorys,
    errorHandler,
  ],

  GetMetadata: [
    log,
    repository.validation.getRepositorys,
    repository.finally.getMetadataRepositories,
    errorHandler,
  ],

  GetFromID: [
    log,
    repository.validation.getRepositorys,
    repository.finally.getOneRepository,
    errorHandler,
  ],

  Delete: [
    log,
    repository.validation.newRepository,
    repository.finally.deleteRepository,
    errorHandler,
  ],

  Add: [
    log,
    repository.validation.newRepository,
    repository.finally.addRepository,
    errorHandler,
  ],

  Update: [
    log,
    repository.validation.updateRepository,
    repository.finally.updateRepository,
    errorHandler,
  ],
};
