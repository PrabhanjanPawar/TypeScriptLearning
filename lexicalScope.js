var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.growOld = function () {
            _this._age++;
        };
        this._age = age;
    }
    Person.prototype.age = function () {
        return this._age;
    };
    return Person;
}());
var objPerson1 = new Person(0); // object 
//objPerson1.growOld();
var growOldss = objPerson1.growOld; // 
growOldss();
console.log('age', objPerson1.age());
