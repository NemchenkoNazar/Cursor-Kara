async function getRandomChinese(length) {
    let counter = 0;
    let result = "";
    while (counter < length) {
        await new Promise((resolve) => {
            result += String.fromCharCode(Date.now()).slice(-5);
            counter++;
            setTimeout(() => {
                resolve(result)
            }, 50);
        });
    };
    return result;
};

export {getRandomChinese}