const Reflection = require('../../Util/Reflection');
const PenclRuntimeError = require('./PenclRuntimeError');

module.exports = class PenclBadParameterError extends PenclRuntimeError {

  /**
   * @param {(Object|typeof Object)} struct 
   * @param {string} method 
   * @param {string} parameter
   * @param {string} message
   */
  constructor(struct, method, parameter, message = 'Invalid parameter <parameter>: ') {
    super(Reflection.replaceObject(message, {'<parameter>': parameter}) + Reflection.getClassDescription(struct, '->', '::') + Reflection.getFunctionDescription(struct[method]));
  }

}