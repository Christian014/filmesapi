const conexao = require("../database/conection");

module.exports = {
    async postFilmes(request, response){
        const { nomeFilme } = request.body
        const [id] = await conexao("filmes").insert({
            nomeFilme,
        });

        return response.json({id});
    },

    async getAllFilmes(request, response){
        const { nomeFilme } = request.body
        let filmes = conexao
        filmes = await conexao ("filmes").select("*")
        return response.json(filmes)
    },

    async updateFilmes(request, response){
        try {
            const { id } = request.params
            const { nomeFilme } = request.body

            await conexao("filmes").update({
                nomeFilme: nomeFilme
            }).where("id", id)
            return response.status(200).send("foi atualizado com sucesso");
        } catch (error) {
            return response.status(500).send(error)
        }
    },

    async deleteFilmes(request, response){
        try {
            const { id } = request.params

            await conexao("filmes").delete()
            .where("id", id)
            return response.status(200).send("foi deletado com sucesso");
        } catch (error) {
            return response.status(500).send(error)
        }
    },

    async getId(request, response){

        const { id } = request.params
        let filmes = conexao
        const verifyID = await conexao("filmes").where('id', id).first();
        
        if (verifyID) {
        filmes = await conexao ("filmes")
        .select("*")
        .where("id", id)

        return response.json(filmes)

        } else {
        
        return response.send("inexistente")
        }
    }
}