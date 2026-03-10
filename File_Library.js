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
        function readFile(filename) {
            fs.readFile(filename, "utf-8" , (err, data) => {
                if(err) {
                    console.log("Помилка читання")
                }
                else {
                    console.log(data)
                }
            })
        }
    // дописати текст у файл
        function appendFile(filename, text) {
            fs.appendFile(filename, text, (err) => {
                if (err) {
                    console.log("Помилка запису")
                }
                else {
                    console.log("Текст додано")
                }
            })
        } 
    // перевірити, чи існує файл
        function fileExists(filename) {
            if (fs.existsSync(filename)) {
                console.log("Файл існує")
            }
            else {
                console.log("Файлу не існує")
            }
        }

// Робота з папками

        // створення папки
        function newFolder(foldername) {
            fs.mkdir(foldername, (err) => {
                if (err) {
                    console.log("Помилка створення папки")
                }
                else {
                    console.log("Папку створено")
                }
            })
        }

// Видалення об'єктів
        
        // видалення папки
        function delFolder(foldername) {
            fs.rmdir(foldername, (err) => {
                if (err) {
                    console.log("Папки не існує")
                }
                else {
                    console.log("Папку видалено")
                }  
            })
        }
        // видалення файлу
        function delFile(filename) {
            fs.unlink(filename, (err) => {
                if (err) {
                    console.log("Файлу не існує")
                }
                else {
                    console.log("файл виладено")
                }
            })
        }
        // видалення файлу з папки а потім папки 
        function deleteFileAndFolder(filename, foldername) {
            fs.unlink(filename, (err) => {
                if (err) {
                    console.log("Помилка видалення файлу")
                }
                else {
                    fs.rmdir(foldername,(err) => {
                        if (err) {
                            console.log("Помилка видалення папки")
                        }
                        else {
                            console.log("Папку з фалом видалено")
                        }
                    })
                }
            })
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
        deleteFileAndFolder
    }