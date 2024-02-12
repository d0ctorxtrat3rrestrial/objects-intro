const tributeChest = []

const payTribute = (tributeId, tributeDescription, queenId) => {
    const tribute = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId
    }

    tributeChest.push(tribute)
}

payTribute(1, "Barrel of wine", 2)
payTribute(2, "Silk", 1)
payTribute(3, "Bushel of oranges", 3)
payTribute(4, "Ten gold coins", 1)

const queens = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Sydney Noh")
createQueen(3, "Christina Ashworth")
createQueen(4, "Aja Washington")

/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

for (const queenObject of queens) {

    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)

}

for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)

    for (const tributeObject of tributeChest) {
        if (tributeObject.queenId === queenObject.id) {
            console.log(`${queenObject.name} has tribute: ${tributeObject.description}`);
        }
    }
}
    
// const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
// console.log(athena)
// const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
// console.log(charisse)
// const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
// console.log(jenna)
// const clara = hailTheQueen("Clara Adkins") // Argument value is "Jenna Solis"
// console.log(clara)
// const ramona = hailTheQueen("Ramona Flowers")
// console.log(ramona)
// const monica = hailTheQueen("Monica Dinglehopper")
// console.log(monica)
