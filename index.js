// Приклад...

const my_library = require("./File_Library") // імпортуємо бібліотеку

my_library.newFolder("NewFolder") // створюємо попку

setTimeout(() => {
    my_library.createFile("./NewFolder/NewFile.txt") // створюємо файл в цій папці

    setTimeout(() => {
        my_library.appendFile("./NewFolder/NewFile.txt", "Hello world") // записуємо текст в файл
    }, 200)

    setTimeout(() => {
        my_library.readFile("./NewFolder/NewFile.txt") // читаємо файл і виводемо текст в консоль
    }, 200)
}, 200)