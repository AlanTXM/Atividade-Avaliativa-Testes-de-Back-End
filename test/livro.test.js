import Livro from "../livro";

describe('Teste dos Itens', () => {
    it('Deve inicializar vazio', () => {
        const livro = new Livro();

        expect(livro.nome).toBeNull();
        expect(livro.valor).toBeNull();
        expect(livro.editora.length).toBe(0);
        expect(livro.autor.length).toBe(0);
        expect(livro.desconto).toBeNull();
        expect(livro.total).toBeNull();
    })

    it('Deve adicionar um nome', () => {
        const livro = new Livro();
        livro.adicionaNome('O curioso caso do teste unitário');

        expect(livro.nome).toEqual('O curioso caso do teste unitário');
    })

    it('Deve adicionar um valor', () => {
        const livro = new Livro();
        livro.adicionaValor(52)

        expect(livro.valor).toEqual(52)
    })

    it('Deve adicionar uma editora', () => {
        const livro = new Livro();
        livro.adicionaEditora('EditoraSC', 'EditoraRJ', 'EditoraMG');

        expect(livro.editora).toContain('EditoraSC')
    })

    it('Deve adicionar um autor', () => {
        const livro = new Livro();
        livro.adicionaAutor('Alan T.X.M', 'Luker T.S.M');

        expect(livro.autor).toContain('Alan T.X.M');
    })

    it('Deve adicionar um desconto', () => {
        const livro = new Livro();
        livro.adicionaDesconto(15);

        expect(livro.desconto).toEqual(15);
    })

    it('Deve calcular o total', () => {
        const livro = new Livro();
        livro.adicionaDesconto(15);
        livro.adicionaValor(100);
        livro.calculaTotal();

        expect(livro.total).toBeCloseTo(85);
    })
})