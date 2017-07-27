function addLastToArrayPrototype () {
  if (!Array.prototype.hasOwnProperty('last')) {
    Object.defineProperty(Array.prototype, 'last', {
      get: function last() {
        return this[this.length - 1];
      }
    });
  }
}

module.exports = new addLastToArrayPrototype();