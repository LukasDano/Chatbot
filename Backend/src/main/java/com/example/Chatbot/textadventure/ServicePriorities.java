package com.example.Chatbot.textadventure;

public enum ServicePriorities {
    NIEDRIG("niedrig"),
    MITTEL("mittel"),
    HOCH("hoch"),
    KRITISCH("kritisch");


    private final String value;

    ServicePriorities(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static boolean isValid(String input) {
        for (ServicePriorities prio : values()) {
            if (prio.getValue().equalsIgnoreCase(input.trim())) {
                return true;
            }
        }
        return false;
    }
}

