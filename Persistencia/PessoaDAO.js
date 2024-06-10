import Pessoa from "../Modelo/Pessoa.js";
import conectar from "./conexao.js"






export default class PessoaDao {

    async consultarPessoas() {
        const sql = "SELECT * FROM pessoa;";
        const conexao = await conectar();
        const retorno = await conexao.execute(sql);
        let listaPessoas = [];

        for (const pessoa of retorno[0]) {
            const p = new Pessoa(pessoa.id, pessoa.nome);
            listaPessoas.push(p.toJson());
        }

        return listaPessoas;
    } 
}