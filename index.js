
let admin = require("firebase-admin")
var passwords = require("./cert.json")
admin.initializeApp({ credential: admin.credential.cert(passwords) })
const db = admin.firestore()


let express = require("express")
let app = express()
const port = 3000
app.use(express.json())

// app.get("/usuarios", (req, res) => {
//     db.collection("users")
//         .get()
//         .then(
//             (querySnapshot) => {
//             const usuarios = []
//             querySnapshot.forEach((doc) => {
//                 usuarios.push(doc.data())
//             });
//             res.send(usuarios)
//     })

// })

// app.post('/usuarios', (req, res)=> {
//     const usuario = req.body
//     db.collection("users").add(usuario).then(()=>{
//         res.send(req.body)
//     })
    
// });

// app.put("/usuarios", (req, res)=>{
//     const usuarioNombre = req.body
//     const array = []
//     const emailFranco = "olanofranco1@gmail.com"
//     db.collection("users")
//     .where("email", "==" , emailFranco)
//     .get()
//     .then(
//         (querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             array.push(`${doc.id}`);
            
//         });
        
//         db.collection("users").doc(array[0]).update({nombre: req.body.nombre}).then(()=>{
//             res.send(usuarioNombre)
//         })
        
//     })
    
    
// })
app.delete("/usuarios", (req, res)=>{
    const usuarioNombre = req.body
    const array = []
    const emailFranco = "olanofranco1@gmail.com"
    db.collection("users")
    .where("email", "==" , emailFranco)
    .get()
    .then(
        (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            array.push(`${doc.id}`);
            
        });
        
        db.collection("users").doc(array[0]).delete().then(()=>{
            res.send(usuarioNombre)
        })
        
    })
    
    
})


app.listen(port,()=>{})