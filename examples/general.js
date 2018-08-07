const {IvCrypto} = require("../")

const iv = new IvCrypto({
    algorithm: "aes128",
    encoding: "base64",
    key: "1234567891012345"
})

const text = "Sit amet marshmallow muffin topping."
const enc = iv.encrypt(text);
const dec = iv.decrypt(enc);

console.log(`encrypted: ${enc}`)
console.log(`decrypted: ${dec}`)