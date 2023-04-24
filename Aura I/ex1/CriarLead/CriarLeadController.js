({
    handleSubmit: function(component, event, helper) {//função para resetar os campos quando registro for enviado
        //mudar meu atributo boolean que controla o comportamento if Aura
        component.set('v.spinner', true);
        event.preventDefault();       // stop the form from submitting
        var fields = event.getParam('fields');//todos os campos do meu form estão aqui em 'filds'
        component.find('recordEditForm').submit(fields);//envia dos dados dos campos para o sales
    },
    handleSuccess: function(component, event, helper) {//função para informar que o registro foi enviado e regitrado com sucesso
        //como o registro foi enviado com sucesse vamos mudar o status do controlador
        component.set('v.spinner', false);
        //helper vai paracer uma mensagem que o record foi criado com sucesso Pego na documentação
        helper.showToast(component, event, helper, 'Sucesso', 'success', 'Lead criado com sucesso');
    },
    handleReset: function(cmp, event, helper) {
        cmp.find('field').forEach(function(f) {
            f.reset();
        });
    }
})