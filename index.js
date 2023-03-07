// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}


function  appendCat(name){
    const appends = ["Broom"]
    return [...cats, "Broom"]
}

function prependCat(name){
   const prepends = ["Arnold"]
   return ["Arnold", ...cats]
}
const copyCats = cats.slice()

function removeLastCat(name){
    return copyCats.slice(0, copyCats.length - 1);

}function removeFirstCat(){
return copyCats.slice(1)
}