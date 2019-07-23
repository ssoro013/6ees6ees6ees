class Bee extends Grub {
  constructor(){
    super()
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing'
  }
};

//a "super" call in the constructor calls the constructor of the parent class
//super.method(...) to call a parent method
//must call the super constructor in derived class before accessing "this" or returning from derived constructor