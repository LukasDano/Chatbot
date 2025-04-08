package com.example.Chatbot.textadventure;

public enum ServicePrio {
    NIEDRIG("niedrig"),
    MITTEL("mittel"),
    HOCH("hoch"),
    KRITISCH("kritisch");


    private final String value;

    ServicePrio(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

