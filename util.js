const generateIntRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = array => array [generateIntRandom(0, array.length - 1)];

const isEqualArrays = (a, b) => {
    if(a.length !== b.length){
        return false;
    }

    const sorteA = [ ...a].sort();
    const sorteB = [ ...b].sort();
    return sorteA.every((e, i) => e === sorteB[i]);
}

export { getRandomElement, isEqualArrays};