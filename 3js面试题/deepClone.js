const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a','b','c']
}
const obj2 = obj1
obj2.address.city = 'sahnghai'
console.log()

/**
 * 
 * @param {*} obj 
 */
function deepClone(obj) {
    if(obj == null || typeof obj !== 'object'){
        return obj
    }

    //初始化返回结果
    let newObj;
    if(obj instanceof Array) {
        newObj = [];
    } else {
        newObj = {}
    }
    for(let key in obj){
        //保证key不是原型属性
        if(obj.hasOwnProperty(key)){
            //递归调用
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj;
}