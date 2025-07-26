import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na lista de ToDo', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it.skip('Adicionar um item na lista', () => {
        telaInicial.inputText("dado1")
      })
    
    it('Adicionar mais de um item na lista', () => {
        var todoItens = ["Maçã", "Banana", "Cenoura"]

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
      })
})