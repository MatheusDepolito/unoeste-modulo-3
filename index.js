import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import PessoaDao from './Persistencia/PessoaDAO.js'
import rotaPessoa from './Rotas/pessoaRota.js'



const host = "0.0.0.0"
const port = "4000"

const app = express()

dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', rotaPessoa)

app.listen(port, host, () => {
    console.log(`Server listening in the port http://${host}:${port}`)
})


