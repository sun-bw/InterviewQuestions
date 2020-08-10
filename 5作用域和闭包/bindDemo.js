function fn1(a, b) {
    console.log('this', this)
    console.log(a, b)
    return 'this is fn1'
}
const fn2 = fn1.bind({x:100}, 10, 20)
const res = fn2();
console.log(res)

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