export default class Point {
  constructor(opts) {
    this.name = opts.name;
    this.greet = () => {
       console.warn(`hi, my name is ${this.name}`);
    }
  }
  
  sayBye() {
    console.warn('bye~'); 
  }
 }
