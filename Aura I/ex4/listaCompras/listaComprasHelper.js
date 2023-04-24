({
    getData : function(cmp) {
        var action = cmp.get('c.listaProdutos');
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.mydata', response.getReturnValue());
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);//alteração
            }
        }));
        $A.enqueueAction(action);
    },
    showToast : function(component, event, helper, titulo, tipo, mensagem) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": titulo,
            "type" : tipo,
            "message": mensagem
        });
        toastEvent.fire();
 }
})