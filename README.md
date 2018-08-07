# iv-crypto
More of an example, not reccomended for production use

##  General
![code](/screenshot.png?raw=true)

```js
const  iv  =  new  IvCrypto({
    algorithm:  "aes128",
    encoding:  "base64",
    key:  "1234567891012345"
})

const  text  =  "Sit amet marshmallow muffin topping."
const  enc  =  iv.encrypt(text)
console.log(`encrypted: ${enc}`)
console.log(`decrypted: ${iv.decrypt(enc)}`)
```


## Command line
![code](/screenshot-cli.png?raw=true)
Supplying ``cli:  true`` when creating class instance will enable an interactive command line.

```js
const  iv  =  new  IvCrypto({
    cli:  true,
    algorithm:  "aes128",
    encoding:  "base64",
    key:  "1234567891012345"
})
``` 

## Quick Start
Clone or download

```sh
git clone https://github.com/RyLeeHarrison/iv-crypto
cd iv-crypto-master
```
### example for command line
```sh
npm run cli
```
### example for general usage
```sh
npm run general
```
