/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {

  this.read = function() {
    this.a = +prompt('Skaičius a?', 0);
    this.b = +prompt('Skaičius b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.subs = function() {
    return this.a - this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
  this.div = function() {
    return this.a / this.b;
  };
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Substraction=" + calculator.subs().toFixed(2) );
alert( "Multiplication=" + calculator.mul() );
alert( "Division=" + calculator.div() );
alert("End");