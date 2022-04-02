
// Importing the crypto module
const crypto = require("crypto-js")

var data = ''
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Digite um texto : `, texto => {
    console.log(`Ola ${texto}!`)
    data = texto

    var key = "password@111"

    // Encrypte the data
    var encrypted = crypto.AES.encrypt(data, key).toString()
    console.log("Encrypted data")

    // Printing the encrypted data
    console.log(encrypted)
    console.log("Decrypted data")

    // Decrypting the data
    var decrypted = crypto.AES.decrypt(encrypted, key)
        .toString(crypto.enc.Utf8)
    console.log(decrypted)
    readline.close()
})

