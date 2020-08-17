function speakToFriendAsync(){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("Hi, How were you?")
            // reject('Something gone wrong')
       },2000)
    })        
}



console.log('--start--')

async function test(){
    var response = await speakToFriendAsync();
    console.log(response);
}
test();

// speakToFriendAsync()
// .then((response)=> {
//     console.log(response);
//     return 1
// })
// .then((response)=> console.log(response))
// .catch(err => console.log(err))
console.log('--end--')

