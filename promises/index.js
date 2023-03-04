//a promisse é uma promessa de um resultado

//example 01
const p = new Promise((resolve, reject) => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        if (1 + 1 === 2) {
            reject("Algo deu errado!")
        }
        console.log('Resolvendo a promise...')
        resolve('Resultado')
    }, 3 * 1000)
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 5 * 1000)

//example 02
function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        }, 3 * 1000)
    })
}

const c = execute()

console.log(c)

setTimeout(() => {
    console.log(c)
}, 5 * 1000)