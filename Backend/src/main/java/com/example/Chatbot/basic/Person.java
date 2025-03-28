package com.example.Chatbot.basic;

public class Person {

    private String name;
    private int age;
    private String city;

    public Person(String name, int age, String city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getCity() {
        return city;
    }

    public String getDescription() {

        String description = "Die Person heißt " + name + ", ist " + age + " Jahre alt und lebt in " + city;
        boolean istErwachsen = age >= 18;

        if (istErwachsen){
            return description + " und ist erwachsen";
        }

        return description + " und ist noch minderjährig";
    }
}
