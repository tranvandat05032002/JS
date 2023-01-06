import {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from '../constants.js';
function logger(log, type = TYPE_ERROR) {
    console[type](log);
}
// function logger2(log2, type2 = ''){
//     console[type2](log2);
// }
// logger2('1212121212', TYPE_ERROR)
export default logger;