const { log } = require('console');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

arrRange = [
    [0, 85],
    [86, 171],
    [172, 255]
]

const getRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const test = () => {
    var arrContries = [];
    var nameContries = require('./countries.json');
    for (var key in nameContries){
        arrContries.push(nameContries[key]);
    }
    // console.log(arrContries);
    const testFolder = './svg';
    const fs = require('fs');
    let random1;
    let random2;
    let random3;

    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            var idContry = file.substring(0, file.indexOf('.')).toUpperCase()
            for(i = 0; i < arrRange.length; i++) {
                min = arrRange[i][0];
                max = arrRange[i][1];
                var randomNumber = getRandomNumber(min, max);
                if (i == 0) {
                    random1 = randomNumber;
                } else if (i == 1) {
                    random2 = randomNumber;
                } else {
                    random3 = randomNumber;
                }
            }
            let arr = [0,1,2,3];
            let randomNumberArr = getRandomNumber(0, 3);
            let arr0 = arr[randomNumberArr];
            arr.splice(randomNumberArr, 1);
            randomNumberArr = getRandomNumber(0, 2);
            let arr1 = arr[randomNumberArr];
            arr.splice(randomNumberArr, 1);
            randomNumberArr = getRandomNumber(0, 1);
            let arr2 = arr[randomNumberArr];
            arr.splice(randomNumberArr, 1);
            let arr3 = arr[0];
            let answer = [];
            answer[arr0] = arrContries[random1];
            answer[arr1] = arrContries[random2];
            answer[arr3] = arrContries[random3];
            answer[arr2] = nameContries[idContry];
            console.log({
                id: idContry,
                name: nameContries[idContry],
                answer: answer,
                correct: arr2
            });
        });
    });
}
const server = http.createServer((req, res) => {
    test();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('DONE');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});