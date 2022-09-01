export const genRandomId = (amnt: number, range: number): number[] => {
    const arr = [];
    for(let i = 0; i < amnt; i++) {
        const random = Math.ceil(Math.random() * range);
        arr.push(random);
    }

    return arr;
}