let arrOne = [8, 3, 4, 6, 34, 24, 234, 454, 22, 48, 32];
let mid = 0;

arrOne.forEach((e) => {
    mid = mid + e;
})

let arithmeticMid = mid/arrOne.length;
let maxCounter = 0;

arrOne.forEach((e) => {
    if (e > arithmeticMid) {
        maxCounter++;
    }
})

console.log(`Среднеарифметическое элементов массива: ${arithmeticMid}, Элементов больше среднеарифметического элементов массива: ${maxCounter}`)
