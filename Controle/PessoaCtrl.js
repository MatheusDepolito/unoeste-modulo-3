import Pessoa from "../Modelo/Pessoa.js"
import os from 'os'

export default class PessoaCtrl {
    async consultar(req, res) {
        if(req.method === "GET") {
            try {
                var pessoa = new Pessoa();
                var consulta = await pessoa.consultar();

                res.status(200).json({
                    "status": true,
                    "dados": consulta
                })
            } catch (error) {
                
            }


        } else {
            res.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o metodo Get para consultar."
            })
        }
    }

    async readiness(req, res) {

        res.status(200).json({
            "status": true,
            "menssagem": "readiness",
            "os": os.platform(),
            "freemem": os.freemem(),
            "homedir": os.homedir()
        })
    }

    async liveness (req, res) {
        
        res.status(200).json({
            "status": true,
            "menssagem": "liveness",
            "path": "",
            "gid": "",
            "uid": ""
        })
    }
}