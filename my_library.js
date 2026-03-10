// Бібліотека для роботи з файлами
const fs = require("fs") // бібліотека для роботи з файлами


// створити файл
    function createFile(filename) {
        fs.writeFile(filename, "", (err) => {
            if (err) {
                console.log("Помилка створення файлу")
            }
            else {
                console.log("Файл створено")
            }
        })
    }

// прочитати файл
    function readFile() {
        fs.readFile("", () => {
            console.log(readFile);
        })
    }
// дописати текст у файл
    function appendFile(filename, text) {
        fs.writeFile("", () => {

        })
    } 

// перевірити, чи існує файл
    function fileExists() {
        fs.existsSync("", () => {

        })
    }

// Експорт
module.exports =  {
    createFile,
    readFile,
    appendFile,
    fileExists

}