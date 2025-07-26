import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na lista de ToDo', () => {

    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        });

        it('Validar a area label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?")
        })
    })

    context('Validar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/')
        });

        it.skip('Adicionar mais de um item na lista', () => {
            var todoItens = ["Maçã", "Banana", "Cenoura"]
    
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })

            telaInicial.validarContador(3)
          })
        })

    context('Validar a concnlusão de itens', () => {
        beforeEach(() => {
                cy.visit('/')
                var todoItens = ["Maçã", "Banana", "Cenoura"]
        
                todoItens.forEach(function(item, indice, array){
                    telaInicial.inputText(item)
                })
            })
        
        it('Concluir um item na lista de ToDo', () => {
            telaInicial.concluirItem()
            telaInicial.validarContador(2)
        })
    })

    context('Validar o filtro da aplicação', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maçã", "Banana", "Cenoura"]
        
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
        
            telaInicial.concluirItem()
        })

        it('Validar a lista de itens ativos', () => {
            telaInicial.filtrarItem("Active")
            telaInicial.validarSizeToDo(2)
        })

        it('Validar a lista de itens concluídos', () => {
            telaInicial.filtrarItem("Completed")
            telaInicial.validarSizeToDo(1)
        })
    })

    context('Validar a remoção de itens', () => {
        beforeEach(() => {
                cy.visit('/')
                var todoItens = ["Maçã", "Banana", "Cenoura"]
        
                todoItens.forEach(function(item, indice, array){
                    telaInicial.inputText(item)
                })
        
            })
            
            it('Deleção de um item da lista', () => {
                telaInicial.deletarItem()
                telaInicial.validarSizeToDo(2)
        })
    })

})
