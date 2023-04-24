public with sharing class AccountNegociationAura {
    @AuraEnabled
    public static List<Account> getNegociationAcc (){
        return [SELECT Id, Name, Rating, Negociacao__c, Phone, Type FROM Account WHERE Negociacao__c = true];
    }
}