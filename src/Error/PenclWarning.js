const PenclThrowable = require('./PenclThrowable');

module.exports = class PenclWarning extends PenclThrowable {

  constructor(message, context = {}) {
    super(message);
    this.context = context;
  }

}