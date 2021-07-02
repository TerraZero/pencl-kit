const PenclError = require('./PenclError');
const PenclWarning = require('./PenclWarning');

module.exports = class ErrorCollector {

  constructor() {
    this._errors = [];
    this._warnings = [];
  }

  /** @returns {Error[]} */
  get errors() {
    return this._errors;
  }

  /** @returns {Error[]} */
  get warnings() {
    return this._warnings;
  }

  /**
   * @param {Function[]} callback 
   */
  collect(callback) {
    try {
      return callback();
    } catch (e) {
      if (e instanceof PenclError) {
        this.addError(e);
      } else if (e instanceof PenclWarning) {
        this.addWarning(e);
      } else {
        throw e;
      }
    }
    return null;
  }

  error(message, context = {}) {
    return this.addError(new PenclError(message, context));
  }

  addError(error) {
    this._errors.push(error);
    return this;
  }

  warning(message, context = {}) {
    return this.addWarning(new PenclWarning(message, context));
  }

  addWarning(warning) {
    this._warnings.push(warning);
    return this;
  }

  hasErrors() {
    return this._errors.length > 0;
  }

  hasWarnings() {
    return this._warnings.length > 0;
  }

  throwErrors() {
    const messages = [];
    for (const error of this.errors) {
      messages.push('[ERROR:' + error.name + ']: ' + error.message)
    }
    if (messages.length) {
      throw new PenclError('- ' + messages.join("\n- "));
    }
  }

  logWarnings() {
    for (const warning of this.warnings) {
      console.log('[WARNING:' + warning.name + ']: ' + warning.message);
    }
  }

  flush() {
    this._errors = [];
    this._warnings = [];
    return this;
  }

}