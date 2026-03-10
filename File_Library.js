// Бібліотека для роботи з файлами та папками
const fs = require("fs");

// Робота з файлами

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
            fs.readFile("", () => {})
        }
    // дописати текст у файл
        function appendFile(filename, text) {
            fs.writeFile("", () => {
                console.log()
            })
        } 
    // перевірити, чи існує файл
        function fileExists() {
            fs.existsSync("", () => {
                console.log()
            })
        }

// Робота з папками

        // створення папки
        function newFolder(foldername) {
            fs.mkdir(foldername, () => {
                console.log("Папку створенно")
            })
        }


// Видалення об'єктів
        
        // видалення папки
        function delFolder() {

        }
        // видалення файлу
        function delFile() {

        }
        // видалення файлу з папки а потім папки 
        function delet() {

        }



// Експорт
module.exports =  {
    // Робота з файлуми
    createFile,
    readFile,
    appendFile,
    fileExists,

    // Робота з папками
    newFolder,

    // Видалення об'єктів
    delFolder,
    delFile,
    delet
}