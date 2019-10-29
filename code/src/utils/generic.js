
export const shuffle = input => {
    let output = [];

    while(input.length !== 0) {
        let randomIndex = Math.floor(Math.random() * input.length);
        output.push(input[randomIndex]);
        input.splice(randomIndex, 1);
    }

    return output;
}