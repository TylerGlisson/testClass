class CleverArray extends Array {
  constructor(...items) {
    super(...items);
  }

  //sum method
  get sum() {
    if(this.length < 1 ){ return NaN }
    return this.reduce((a, b) => a +b);
  }

  //average method
  get average() {
    if(this.length < 1 ){ return NaN }
    return this.sum/this.length;
  }
}

// const clev = new CleverArray(1,2,3,4);
// CleverArray.prototype.sum = CleverArray.sumz()
// CleverArray.prototype.average = CleverArray.averagez()
// console.log(clev.length);

// console.log(CleverArray.averagez);
export default CleverArray
