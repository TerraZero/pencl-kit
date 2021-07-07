const PenclThrowable = require('./PenclThrowable');

module.exports = class PenclError extends PenclThrowable {

  constructor(message, context = {}) {
    super(message);
    this.context = context;
  }

}