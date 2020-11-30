// prmise 加载图片
function loadImg(src) {
    const p = new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            const err = new Error(`图片加载失败 ${src}`)
            reject(err)
        }
        img.src = src
    })
    return p
}

// const url = 'http://www.wensoul.com/static/img/avatar.jpg'
// loadImg(url).then(img => {
//     console.log(img.width)
//     // 传到第二个then中
//     return img
// }).then(img => {
//     console.log(img.height)
// }).catch(ex => {
//     console.error(ex)
// })
const url1 = 'http://www.wensoul.com/static/img/avatar.jpg'
const url2 = 'http://www.wensoul.com/static/img/7de5437.png'
loadImg(url1).then(img1 => {
    console.log(img1.width);
    return img1
}).then(img1 => {
    console.log(img1.height)
    return loadImg(url2)
}).then(img2 => {
    console.log(img2.width)
    return img2
}).then(img2 => {
    console.log(img2.height)
}).catch(ex => {
    console.error(ex)
})
