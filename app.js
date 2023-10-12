const { log } = require('console');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

arrRange = [
    [0, 17],
    [18, 34],
    [35, 52]
]

const getRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const asia = () => {
    var arrContries = [];
    var arrContriesVi = [];
    var nameContriesvi = require('./countries195.json');
    var nameContriesarea = require('./csvjson.json');
    var index = 0;
    for (var key in nameContriesarea){
        if (nameContriesarea[key].Continent == 'North America')
        arrContries.push({
            ...nameContriesarea[key],
            index: index
        });
        // index += 1;
    }
    var arrContriesName = [];
    for (var key in nameContriesvi) {
        for (var ke in arrContries) {
            if (arrContries[ke].Code == nameContriesvi[key].alpha2.toUpperCase()) {
                arrContriesName.push(nameContriesvi[key].name);
                arrContriesVi.push({
                    ...nameContriesvi[key],
                    index: index
                });
            }
        }
        index += 1;
    }
    let random1;
    let random2;
    let random3;
    // console.log(arrContriesVi.length)
    for (var key in arrContriesVi) {
        const lengArr = Math.round(arrContriesVi.length / 3);
        let arrRange = [
            [0, lengArr],
            [lengArr + 1, (lengArr + 1) * 2],
            [(lengArr + 1) * 2 + 1, arrContriesVi.length - 1]
        ]
        var idContry = arrContriesVi[key].alpha2.toUpperCase();
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
        answer[arr0] = arrContriesName[random1];
        answer[arr1] = arrContriesName[random2];
        answer[arr3] = arrContriesName[random3];
        answer[arr2] = arrContriesVi[key].name;
        console.log({
            id: idContry,
            name: arrContriesVi[key].name,
            uri: `require('../../assets/flagpng/${idContry}.png)`,
            answer: answer,
            correct: arr2,
            index: arrContriesVi[key].index,
        });
        console.log(',')
    }
}

const countries195 = () => {
    var arrContriesVi195 = [];
    var nameContriesvi = require('./contriesvi.json');
    var nameContriesarea = require('./countries195.json');
    var index = 0;
    var arrContriesName = [];
    for (var key in nameContriesvi) {
        for (var ke in nameContriesarea) {
            if (nameContriesarea[ke].alpha2 == nameContriesvi[key].id.toLowerCase()) {
                arrContriesName.push(nameContriesvi[key].name);
                arrContriesVi195.push({
                    ...nameContriesvi[key],
                    index: index
                });
            }
        }
        index += 1;
    }
    let random1;
    let random2;
    let random3;
    for (var key in arrContriesVi195) {
        const lengArr = Math.round(arrContriesVi195.length / 3);
        let arrRange = [
            [0, lengArr],
            [lengArr + 1, (lengArr + 1) * 2],
            [(lengArr + 1) * 2 + 1, arrContriesVi195.length - 1]
        ]
        var idContry = arrContriesVi195[key].id.toUpperCase();
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
        answer[arr0] = arrContriesName[random1];
        answer[arr1] = arrContriesName[random2];
        answer[arr3] = arrContriesName[random3];
        answer[arr2] = arrContriesVi195[key].name;
        console.log({
            id: idContry,
            name: arrContriesVi195[key].name,
            uri: `require('../../assets/flagpng/${idContry}.png)`,
            answer: answer,
            correct: arr2,
            index: arrContriesVi195[key].index,
        });
        console.log(',')
    }

}

const countriesAll = () => {
    var arrContriesVi195 = [];
    var nameContriesvi = require('./contriesvi.json');
    var nameContriesarea = require('./csvjson.json');
    // console.log(nameContriesvi.length)
    // console.log(nameContriesarea.length)
    // let country = [];
    // for (var i = 0; i < nameContriesvi.length; i++) {
    //     for (var j = 0; j < nameContriesarea.length; j++) {
    //         if (nameContriesarea[j].Code == nameContriesvi[i].id) {
    //             break;
    //         }
    //         if (j == nameContriesarea.length - 1) {
    //             country.push(nameContriesvi[i])
    //             console.log('Hii')
    //         }
    //     }
    // }
    // console.log(country)
    // return;
    var index = 0;
    var arrContriesName = [];
    for (var key in nameContriesvi) {
        for (var ke in nameContriesarea) {
            if (nameContriesarea[ke].alpha2 == nameContriesvi[key].id.toLowerCase()) {
                arrContriesName.push(nameContriesvi[key].name);
                arrContriesVi195.push({
                    ...nameContriesvi[key],
                    index: index
                });
            }
        }
        index += 1;
    }
    let random1;
    let random2;
    let random3;
    for (var key in arrContriesVi195) {
        const lengArr = Math.round(arrContriesVi195.length / 3);
        let arrRange = [
            [0, lengArr],
            [lengArr + 1, (lengArr + 1) * 2],
            [(lengArr + 1) * 2 + 1, arrContriesVi195.length - 1]
        ]
        var idContry = arrContriesVi195[key].id.toUpperCase();
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
        answer[arr0] = arrContriesName[random1];
        answer[arr1] = arrContriesName[random2];
        answer[arr3] = arrContriesName[random3];
        answer[arr2] = arrContriesVi195[key].name;
        console.log({
            id: idContry,
            name: arrContriesVi195[key].name,
            uri: `require('../../assets/flagpng/${idContry}.png)`,
            answer: answer,
            correct: arr2,
            index: arrContriesVi195[key].index,
        });
        console.log(',')
    }

}


const test = () => {
    var arrContries = [];
    var nameContries = require('./countries.json');
    // var nameContriesvi = require('./contriesvi.json');
    // console.log(nameContriesvi.length)
    // var nameContriesarea = require('./csvjson.json');
    // // console.log(nameContriesarea.length)
    // var index = 0;
    // for (var key in nameContriesarea){
    //     if (nameContriesarea[key].Continent == 'Africa')
    //     arrContries.push({
    //         ...nameContriesarea[key],
    //         index: index
    //     });
    //     // console.log({
    //     //     ...nameContries[key],
    //     //     index: index
    //     // })
    //     // console.log(',')
    //     index += 1;
    // }
    // console.log(arrContries)
    for (var key in nameContries) {
        arrContries.push(nameContries[key])
    }
    const testFolder = './svg';
    const fs = require('fs');
    let random1;
    let random2;
    let random3;
    let index = 0;
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            const lengArr = Math.round(arrContries.length / 3);
            let arrRange = [
                [0, lengArr],
                [lengArr + 1, (lengArr + 1) * 2],
                [(lengArr + 1) * 2 + 1, arrContries.length - 1]
            ]
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
                uri: `require('../../assets/flagpng/${idContry}.png)`,
                answer: answer,
                correct: arr2,
                index: index,
            });
            index ++;
            console.log(',')
        });
    });
}
const server = http.createServer((req, res) => {
    // test();
    asia();
    // countries195();
    // countriesAll();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('DONE');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});