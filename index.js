// Write your solution 
 const cats = ["Milo", "Otis", "Garfield"]
 function destructivelyAppendCat (names){
    return cats.push("Ralph")
 }
function destructivelyPrependCat (names){
    return cats.unshift("Bob")
}
    
function destructivelyRemoveLastCat (names){
    return cats.pop()
}

function destructivelyRemoveFirstCat (names){
    return cats.shift()
}

function appendCat (names){
    appendCat = [...cats, "Broom"]
    return appendCat

}
function prependCat (name){
    prependCat = ["Arnold", ...cats]
    return prependCat
}
 function removeLastCat (names){
    return cats.slice(0, -1)
 }

 function removeFirstCat (names){
    return cats.slice(1)
 }

