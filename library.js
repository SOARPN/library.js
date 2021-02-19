function Calc (a,b){
    this.firstValue = a;
    this.secondValue = b;
}

Calc.prototype.addNum = function () {
    return this.firstValue + this.secondValue;
}

Calc.prototype.subtract = function () {
    return this.firstValue - this.secondValue;
}

Calc.prototype.multiply = function () {
    return this.firstValue * this.secondValue;
}

Calc.prototype.divide = function () {
    return this.firstValue / this.secondValue;
}

Calc.prototype.square = function () {
    return this.firstValue * this.firstValue;
}