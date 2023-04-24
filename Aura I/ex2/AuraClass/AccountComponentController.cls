public with sharing class AccountComponentController {
    @AuraEnabled//usado para uqe possamos acessar em nosso componente aura - precisa ser público por favor
    
    public static List<Account> getAccounts(String ordem){//paramentro que vai ser definido pelo Attribute Aura nesse caso ele só é pego pelo Name
        String queryString = 'SELECT Id, Name, Phone, Type, Rating FROM Account ORDER BY ' + ordem;//Porem podemos colocar por data de criação ou utro campo de nossa escolha
        return Database.query(queryString);//pegamos o comando SOQL armazenamos em uma variavel e depois chamamos esse metodo que executa o comando
    }
}