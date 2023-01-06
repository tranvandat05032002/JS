import logger from './logger/index.js';
import {TYPE_LOG, TYPE_WARN, TYPE_ERROR, vari} from './constants.js';
import * as constants from './constants.js';
console.log(constants);
logger('tranvandat', TYPE_WARN)

logger(vari, TYPE_ERROR)