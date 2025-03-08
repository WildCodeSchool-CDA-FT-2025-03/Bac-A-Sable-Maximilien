import check from './check.middlewares';
import filter from './filter.middlewares';
import f from './finally.middlewares';
import validation from './validation.middlewares'

export default {
    check: check,
    filter: filter,
    finally: f,
    validation: validation,
}