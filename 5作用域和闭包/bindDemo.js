let Person = {
    name:'Tom',
    say() {
        console.log(this)
        console.log(`我叫${this.name}`)
    }
}
//代码执行效果
// Person.say();

let Person1 = {
    name:'tom1'
}
//使用原生call，改变this指向
// Person.say.call(Person1)

Function.prototype.myCall = function(content) {
    //content是传入的对象，
    console.log(this)
    content.say = this
    content.say()
}
Person.say.myCall(Person1)

//手写call
// Function.prototype.myCall = function (content) {
//     if(typeof this !== 'function'){
//         throw new TypeError('Error')
//     }
//     content = content || window;
//     content.fn = this;
//     const args = [...arguments].slice(1);
//     const result = content.fn(...args);
//     delete content.fn;
//     return result
// }
// fn1.myCall({x:10},1,2,3,4)
//模拟bind
Function.prototype.bind = function () {
    //将参数拆解成数组
    const args = Array.prototype.slice.call(arguments)

    //获取this（数组第一项）
    const t = args.shift()

    //fn1.bind中的fn1
    const self = this

    return function () {
        return self.apply(t, args)
    }
}