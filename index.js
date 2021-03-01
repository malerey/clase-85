// // ES6 ES2015

// // fetch
// // Promises

// // new Promise((resolve, reject) => {
// //   const nombre = ''

// //   if (nombre === "Homero") {
// //     reject("Este es el club de los no Homeros")
// //   }
// //   if (nombre) {
// //     resolve(nombre);
// //   } else {
// //     reject('Esto es un error');
// //   }
// // }).then(info => console.log(info))
// // .catch(err => {
// //   console.log(err)
// // })

// // fetch es un metodo que retorna una promesa 

// // let infoDelUsuario = {}

// // fetch("https://reqres.in/api/users/2")
// // .then(res => res.json())
// // .then(data  => {
// //   // console.log(data)
// //   infoDelUsuario = data.data

// //   mostrarInfoDelUsuarioEnHTML()
// // })

// // const mostrarInfoDelUsuarioEnHTML = () => {
// //   console.log(infoDelUsuario)
// // }


// // console.log(infoDelUsuario)


// // async await 
// // "azucar sintactica", "sugar syntax"

// // const traerInfoDelUsuario = async () => {
// //     const respuesta = await fetch("https://reqres.in/api/users/2")
// //     const data = await respuesta.json()
// //     return data
// // }


// console.log("1")
// const nombre = "Malena"
// const funcionUno = () => { 
//   const num = 1

//   return funcionDos(num)
// }

// console.log("2")
// const funcionDos = (num) => { 
//   const num2 = 2
//   return funcionTres(num, num2)
// }

// console.log("3")
// const funcionTres = (num, num2) => { 
//   return num + num2
// }

// const funcionSencilla = () => { 
//   return "hola"
// }

// funcionSencilla()

// console.log(funcionUno())

// console.log("ultimo console log")

// // callstack           
// // event loop 





// // rompamos el call stack

// // const funcionUno = () => {
// //   funcionDos()
// // }

// // const funcionDos = () => {
// //   funcionUno()
// // }


// // funcionUno()



