const Reflection = require('../Util/Reflection');
const PenclDefinitionError = require('./PenclDefinitionError');

module.exports = class PenclMethodDefinitionError extends PenclDefinitionError {

  /**
   * @param {(Object|typeof Object)} struct 
   * @param {string} method 
   */
  constructor(struct, method) {
    super('Not defined: ' + (struct.constructor !== Function ? struct.constructor.name + '->' : struct.name + '::') + Reflection.getFunctionDescription(struct[method]));
  }

}