import Editora from "../editora";

describe('Teste de variáveis corretas', () => {
    it('Deve ter 3 corpos do tipo string', () => {
        const editora = new Editora('EditoraSC','Jaraguá do Sul','editora@gmail.com');
        
        expect(editora.nome).toEqual('EditoraSC');
        expect(editora.cidade).toEqual('Jaraguá do Sul');
        expect(editora.email).toEqual('editora@gmail.com')
    })
})