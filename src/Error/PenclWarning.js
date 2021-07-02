module.exports = class PenclWarning extends Error {

  constructor(message, context = {}) {
    super(message);
    this.context = context;
  }

}