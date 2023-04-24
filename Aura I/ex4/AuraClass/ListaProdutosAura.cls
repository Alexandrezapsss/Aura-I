public with sharing class ListaProdutosAura {
    @AuraEnabled
   public static List<ListaMaterial__c> listaProdutos(){
        List<ListaMaterial__c> produtos = [SELECT Id, Name, DataCompra__c, Quantidade__c, PrecoUnitario__c, PrecoTotal__c FROM ListaMaterial__c];
        return produtos;
   }
}