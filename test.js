const names = ['john smith', 'james bond', 'lara croft', 'tony stark', 'peter parker']

const namesToObject = names.map(function (fullName) {

    let object = {
        value: fullName,
        length:'',
    }
    let noSpaces = fullName.split(" ").join("")
    let nameLength
    nameLength = noSpaces.length
    object.length = nameLength
    return object
}); 

console.log(namesToObject)