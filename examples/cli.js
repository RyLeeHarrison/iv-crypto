const {IvCrypto} = require("../")

const iv = new IvCrypto({
    cli: true,
    algorithm: "aes128",
    encoding: "base64",
    key: "1234567891012345"
})