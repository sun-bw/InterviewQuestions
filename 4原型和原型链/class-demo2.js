class People {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name}`)
    }
}

//子类
class Student extends People {
    constructor(name,number) {
        super(name)
        this.number = number
    }
    sayHi() {
        console.log(`${this.name}  ${this.number}`)
    }
}

class Teacher extends People {
    constructor(name,major) {
        super(name)
        this.major = major
    }
    teach() {
        console.log(`${this.name} 教 ${this.major}`)
    }
}
const xialuo = new Student('下落',100);
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi();
xialuo.eat();

const wanglaoshi = new Teacher();
wanglaoshi.teach();
wanglaoshi.eat();