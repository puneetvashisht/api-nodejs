const fs = require('fs').promises

console.log('--start--')
// fs.readFile('files/sample.txt', (err, data)=> {
//     if(err) throw err;
//     console.log('Contents:' + data)
// })

// fs.readFile('files/sample.txt')
// .then(data => {
//     console.log('Contents:' + data)
// })
// .catch(err=>{
//     console.log(err)
// })
// 

async function test(){
    let content = await fs.readFile('files/sample.txt')
    console.log('Contents:' + content)
}
test();

console.log('--end--')



// console.log('--start--')
// speakToFriendAsync(function(response){
//     console.log(response)
// });
// console.log('--end--')