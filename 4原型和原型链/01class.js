//类
class Student {
    constructor(name ,number,gender) {
        this.name = name;
        this.number = number;
        this.gender = gender;
    }
    sayHi() {
        console.log(`姓名${this.name} , 学号 ${this.number}`)
    }
}
//通过类声明对象/实例
const xialuo = new Student('下落',100);
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi();