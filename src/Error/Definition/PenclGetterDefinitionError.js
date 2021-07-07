const Reflection = require('../../Util/Reflection');
const PenclDefinitionError = require('./PenclDefinitionError');

module.exports = class PenclGetterDefinitionError extends PenclDefinitionError {

  /**
   * @param {(Object|typeof Object)} struct 
   * @param {string} getter 
   * @param {string} message
   */
  constructor(struct, getter, message = 'Getter not defined: ') {
    super(message + ' get ' + Reflection.getClassDescription(struct, '->', '::') + getter);
  }

}