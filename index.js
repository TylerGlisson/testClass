class CleverArray extends Array {
  constructor(...items) {
    super(...items);
  }

  //sum method
  sum() {
    if(this.length < 1){
      return NaN;
    }
    const sums = this.reduce((a, b) => a +b);
    return sums;
  }

  //average method
  average() {
    const avg = this.sum()/this.length;
    return avg;
  }
  
}

// const clev = new CleverArray();
// console.log('array', clev);

// console.log(clev.sum());
export default CleverArray
