const Reflection = require('../../Util/Reflection');
const PenclDefinitionError = require('./PenclDefinitionError');

module.exports = class PenclMethodDefinitionError extends PenclDefinitionError {

  /**
   * @param {(Object|typeof Object)} struct 
   * @param {string} method 
   * @param {string} message
   */
   constructor(struct, method, message = 'Method not defined: ') {
    super(message + Reflection.getClassDescription(struct, '->', '::') + Reflection.getFunctionDescription(struct[method]));
  }

}