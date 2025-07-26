import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir itens na lista de ToDo', () => {

    beforeEach(() => {
        cy.visit('/')
        var todoItens = ["Maçã", "Banana", "Cenoura"]

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
    })
    
    it('Concluir um item na lista de ToDo', () => {
       telaInicial.concluirItem()
    })
})