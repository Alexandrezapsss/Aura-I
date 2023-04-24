({
    getContas: function(component) {
        let action = component.get("c.getNegociationAcc");
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.contas", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
