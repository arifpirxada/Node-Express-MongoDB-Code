const myObj = {
    name: "arif",
    fullName: "arifpirxada",
    age: 18
}

const jsonData = JSON.stringify(myObj)
console.log(`JSON data: ${jsonData}`)

const jsData = JSON.parse(jsonData)
console.log(`Javascript data: ${jsData.fullName}`)