// function speakToFriend(){
//     return "Hi, How were you?"
// }
function speakToFriendAsync(callback){
    setTimeout(function(){
         callback("Hi, How were you?")
    },2000)    
}


console.log('--start--')
speakToFriendAsync(function(response){
    console.log(response)
});
console.log('--end--')