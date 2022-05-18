
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

// app.put("/usuarios", (req, res)=>{
//     const usuarioNombre = req.body.nombre
//     let id
//     const emailUsuario = req.body.email
//     db.collection("users")
//     .where("email", "==" , emailUsuario)
//     .get()
//     .then(
//         (querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             id = doc.id
//         });
        
//         db.collection("users").doc(id).update({nombre : usuarioNombre}).then(()=>{
//             res.send(usuarioNombre)
//         })
        
//     })
    
    
// })

app.delete("/usuarios", (req, res)=>{
    const usuarioNombre = req.body.nombre
    let id
    const emailUsuario = req.body.email
    db.collection("users")
    .where("email", "==" , emailUsuario)
    .get()
    .then(
        (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            id = doc.id
        });
        
        db.collection("users").doc(id).delete().then(()=>{
            res.send('eliminado correctamente')
        })
        
    })
    
    
})


app.listen(port,()=>{})