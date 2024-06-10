import PessoaDao from "../Persistencia/PessoaDAO.js";



export default class Pessoa {
    id;
    nome;

    constructor(id = 0, nome) {
        this.id = id;
        this.nome = nome;
    }


    toJson() {
        return {
            id: this.id,
            nome: this.nome
        }
    }

    async consultar() {
        const pessoaDao = new PessoaDao();
        return await pessoaDao.consultarPessoas();
    }
}