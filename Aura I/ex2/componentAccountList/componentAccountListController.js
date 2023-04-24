({
    carregarContas : function(component, event, helper) {//essa função é chamada no handler ao iniciar a página INIT
        var action = component.get("c.getAccounts");//esse médoto é da minha classe Apex é nescessario obter ela a armazenar em uma variavel
        var ordem = component.get("v.ordem");//Aqui estou captando o valor da minha aura attribute que vai seer o parametro do metodo acima
        action.setParams({//esse metodo "setParams" seta um paramentro para meu metodo Apex armazena na variavel
            "ordem": ordem//primeiro vai o nome do paramentro Apex depois o que vai ser setado nele
        });
        action.setCallback(this, function(response) {//setCallback é uma função para nuscar informações no servido de forma que não tave a nossa página
            var state = response.getState();//this é para refenciar ele mesmo a função recebe uma resposta que armazenamos em uma variavel para:
            if (state === "SUCCESS") {//Fazer o nosso caminho lógico caso sucesso "SUCCESS" isso que o servidor vai retornar
                var contas = response.getReturnValue();//caso sucesso armazena a respostanesse caso a lista em uma variavel
                component.set("v.listaContas", contas);//agora setamos a resposta no nossa aura:attribute para mostar as informações no componente
            }
        });
        $A.enqueueAction(action);//é usado para executar a ação você está colocando a solicitação em uma fila de ações que é gerenciada pela Salesforce
    }
})