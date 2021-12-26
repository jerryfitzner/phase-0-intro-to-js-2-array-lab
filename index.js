const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const newCats = [...cats, "Broom"];
        return newCats;
}

function prependCat(){
    const neCats = ["Arnold", ...cats];
        return neCats;
}

function removeLastCat(){
    const copyCats = cats.slice(0, cats.length - 1);
        return copyCats;
}

function removeFirstCat(){
    const remCats = cats.slice(1);
        return remCats;
}