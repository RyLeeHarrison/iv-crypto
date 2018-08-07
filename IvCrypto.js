const crypto = require("crypto")
const {Buffer} = require("buffer")

class IvCrypto {
    constructor({algorithm, encoding, key, cli}) {
        this.iv = null
        this.algorithm = algorithm || "aes128"
        this.encoding = encoding || "binary"
        this.key = (key instanceof Buffer) ? key : new Buffer.from(key)
        this.cli = cli ? this.startCli() : false
    }
    encrypt(value) {
        this.iv = crypto.pseudoRandomBytes(16)
        const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv)
        let result = cipher.update(value, "utf8", this.encoding)
        result += cipher.final(this.encoding)
        return result
    }
    decrypt(value) {
        const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv)
        let result = decipher.update(value, this.encoding)
        result += decipher.final()
        this.iv = null
        return result
    }
    startCli() {
        this.cli = true;
        const rl = require('readline')
        .createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: `${this.algorithm.toLocaleUpperCase()} > `
        })
        rl.prompt()
        rl.on('line', (line) => {
            if (!(line === '')) {
                const enc = this.encrypt(line)
                console.log(`encrypted: ${enc}`)
                console.log(`decrypted: ${this.decrypt(enc)}`)
            }
            rl.prompt()
        }).on('close', () => {
            console.log('\nCloseing\n')
            process.exit(0)
        })
    }
}

module.exports = { IvCrypto }