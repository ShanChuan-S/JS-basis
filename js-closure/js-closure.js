;
console.log(/a/);
function closure() {
    this.text = 'text';
}
closure.prototype.a = '123';
closure.prototype.b = function() {
    this.a = 789;
    this.text = '456';
    return this.text;
}