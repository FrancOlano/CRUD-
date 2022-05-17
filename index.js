
let admin = require("firebase-admin")
var passwords = require("./cert.json")
admin.initializeApp({ credential: admin.credential.cert(passwords) })
const db = admin.firestore()


let express = require("express")
let app = express()
const port = 3000
app.use(express.json())

app.get("/usuarios", (req, res) => {
    db.collection("users")
        .get()
        .then(
            (querySnapshot) => {
            const usuarios = []
            querySnapshot.forEach((doc) => {
                usuarios.push(doc.data())
            });
            res.send(usuarios)
    })

})

app.post('/usuarios', (req, res)=> {
    const usuario = req.body
    db.collection("users").doc("Franco").set(usuario).then(()=>{
        res.send(req.body)
    })
    
});

app.put('/usuarios', (req, res)=> {
    const usuario = req.body
    db.collection("users").doc("Franco").set(usuario).then(()=>{
        res.send(req.body)
    })
    
});

app.listen(port,()=>{})