const fs = require('fs').promises
const path = require('path')

console.log(__filename)

console.log(path.join('files', 'sample.txt'));
console.log(path.extname('files/sample.txt'));
console.log(path.parse('files/sample.txt').ext);

async function fileio(){
    const items = await fs.readdir('files', {withFileTypes: true});
    console.log(items)

    for(let item of items)
    {
        const type = item.isDirectory()?'folder':'file';
        console.log(`${item.name} - ${type}`)
    }
}
// fileio();

async function findFiles(folderName){
    const items = await fs.readdir(folderName, {withFileTypes: true})
    items.forEach((item)=>{
        if(item.isDirectory()){
            findFiles(`${folderName}/${item.name}`)
        }
        else{
            console.log(`Found file: ${item.name} in folder ${folderName}`)
        }
    })
}

// findFiles("files");



