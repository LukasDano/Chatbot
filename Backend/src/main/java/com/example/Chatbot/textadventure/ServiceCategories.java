package com.example.Chatbot.textadventure;

public enum ServiceCategories {
    EMAIL("email"),
    DRUCKER("drucker"),
    NETZWERK("netzwerk"),
    ZUGRIFF("zugriff"),
    DATENSICHERUNG("datensicherung"),
    PERIPHERIE("peripherie"),
    SOFTWARE("software"),
    ANDERE("andere");

    private final String value;

    ServiceCategories(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

