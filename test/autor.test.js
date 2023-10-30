import Autor from "../autor";

describe('Teste de variáveis corretas', () => {
    it('Deve ter 2 corpos do tipo string', () => {
        const autor = new Autor('Alan','Brasileiro');
        
        expect(autor.nome).toEqual('Alan');
        expect(autor.nacionalidade).toEqual('Brasileiro');
    })
})