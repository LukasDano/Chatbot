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

    public static boolean isValid(String input) {
        for (ServicePrio prio : values()) {
            if (prio.getValue().equalsIgnoreCase(input.trim())) {
                return true;
            }
        }
        return false;
    }
}

