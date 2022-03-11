public with sharing class CatController {

    @AuraEnabled
    public static Map<String, CatWrapper> getAllCats(){
        Map<String, CatWrapper> mapCatsById = new Map<String, CatWrapper>();
        try {
            List<Cat__c> catList = [SELECT Id, Name, Gender__c, Age__c, Sterilized__c, Vaccinated__c FROM Cat__c];
            if(catList.size() > 0){
                for(Cat__c cat : catList){
                    mapCatsById.put(cat.Id, new CatWrapper(cat));
                }
            }
            return mapCatsById;
        } catch (Exception e) {
            return mapCatsById;
        }
    }

    @AuraEnabled
    public static CatWrapper registerCat(String name, String gender, String age, Boolean sterilized, Boolean vaccinated){
        try {
            CatWrapper wrapper = new CatWrapper();
            wrapper.name = name;
            wrapper.gender = gender;
            wrapper.age = age;
            wrapper.sterilized = sterilized;
            wrapper.vaccinated = vaccinated;

            Cat__c cat  = CatWrapper.getSobject(wrapper, true);
            insert cat;

            wrapper.id = cat.Id;
            return wrapper;
        } catch (Exception e) {
            return null;
        }
    }

    @AuraEnabled
    public static CatWrapper updateCat(String strCat){
        try {
            CatWrapper wrapper =  (CatWrapper)JSON.deserialize(strCat, CatWrapper.class);
            Cat__c cat  = CatWrapper.getSobject(wrapper, true);
            update cat;
            return wrapper;
        } catch (Exception e) {
            return null;
        }
    }

}
