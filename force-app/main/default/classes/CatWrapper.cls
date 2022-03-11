public with sharing class CatWrapper {
    @AuraEnabled
    public String id {get;set;}

    @AuraEnabled
    public String name {get;set;}

    @AuraEnabled
    public String gender {get;set;}

    @AuraEnabled
    public String age {get;set;}

    @AuraEnabled
    public Boolean sterilized {get;set;}

    @AuraEnabled
    public Boolean vaccinated {get;set;}

    public CatWrapper() {

    }

    public CatWrapper(Cat__c cat){
        this.id = cat.Id;
        this.name = cat.Name;
        this.gender = cat.Gender__c;
        this.age = cat.Age__c;
        this.sterilized = cat.Sterilized__c;
        this.vaccinated = cat.Vaccinated__c;
    }

    public static Cat__c getSobject(CatWrapper wrapper, Boolean isCreate){
        Cat__c cat = new Cat__c();
        cat.Name = wrapper.name;
        cat.Gender__c = wrapper.gender;
        cat.Age__c = wrapper.age;
        cat.Sterilized__c = wrapper.sterilized;
        cat.Vaccinated__c = wrapper.vaccinated;

        if(!isCreate){
            cat.Id = wrapper.id;
        }
        return cat;
    }
    
}
