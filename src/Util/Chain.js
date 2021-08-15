module.exports = class Chain {

  static create() {
    return new Proxy(new Chain(), {

      get(target, param, receiver) {
        console.log(target, param, receiver);
      },

    });
  }

}