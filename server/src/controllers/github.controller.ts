import github from "./middlewares/github";
import errorHandler from "./middlewares/error.middlewares";
import log from "./middlewares/repository/log.middlewares";

export default {

  GetMetadata: [
    log,
    github.validations.getRepositorys,
    github.fetch.getRepositorys,
    errorHandler,
  ],
};
