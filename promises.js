// let p = new Promise((resolve,reject)=>{
//     let a = 1+1
//     if (a ==2){
//         resolve('Success')
//     } else {
//         reject('failed')
//     }
// })

// p.then((message)=>{
//     console.log('this in the then')
// }).catch((message)=>{
//     console.log('this is in the catch')
// })
userleft=false
userWatchingCatMeme=false

function watchTutorialPromise() {
    return new Promise((resolve,reject)=>{
        if (userleft){
            reject({
                name:'User Left',
                message:':('
            })
        } else if (userWatchingCatMeme){
            reject({
                name:'User watching cat meme',
                message:'WebDev < Cat'
            })
        } else {
            resolve('Thumbs up and sub')
        }
    })
}

watchTutorialPromise().then((message)=>{
    console.log('success')
}).catch((error) => {
    console.log(error.name)
})