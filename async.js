function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`making request to ${location}`)
        if (location === 'Google') {
            resolve('google says hi')
        } else {
            reject(' we only talkm to google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject) => {
        console.log('processing response')
        resolve(`extra info+${response}`)
    })
}

// makeRequest('Google').then(response => {
//     console.log('response received')
//     return processRequest(response)
// }).then(processResponse => {
//     console.log(processResponse)
// }).catch(err => {
//     console.log(err)
// })

async function doWork() {

    try {
        const response = await makeRequest('Google')
        console.log('response received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err){
        console.log(err)
    }

}
doWork()