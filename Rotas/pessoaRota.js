import { Router } from "express";
import PessoaCtrl from "../Controle/PessoaCtrl.js";

const pessoactrl = new PessoaCtrl();
const rotaPessoa = new Router();


rotaPessoa
.get('/consulta-dados', pessoactrl.consultar)
.get('/readiness', pessoactrl.readiness)
.get('/liveness', pessoactrl.liveness)

export default rotaPessoa;