package com.example.Chatbot.textadventure;

import org.json.JSONObject;

public class Bot {
    private String response;
    private String category;

    private final String EMAIL = ServiceCategories.EMAIL.getValue().toLowerCase();
    private final String DRUCKER = ServiceCategories.DRUCKER.getValue().toLowerCase();
    private final String NETZWERK = ServiceCategories.NETZWERK.getValue().toLowerCase();
    private final String ZUGRIFF = ServiceCategories.ZUGRIFF.getValue().toLowerCase();
    private final String DATENSICHERUNG = ServiceCategories.DATENSICHERUNG.getValue().toLowerCase();
    private final String PERIPHERIE = ServiceCategories.PERIPHERIE.getValue().toLowerCase();
    private final String SOFTWARE = ServiceCategories.SOFTWARE.getValue().toLowerCase();
    private final String ANDERE = ServiceCategories.ANDERE.getValue().toLowerCase();
    private final String TICKET = ServiceCategories.TICKET.getValue().toLowerCase();

    public String getResponse() {
        return response;
    }

    public String getCategory() {
        return category;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public JSONObject getResult(){
        JSONObject result = new JSONObject();

        result.put("category", getCategory());
        result.put("response", getResponse());

        return result;
    }

    private String capitalizeFirstLetter(String input) {
        if (input == null || input.isEmpty()) {
            return input;
        }
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }

    private String buildIntroStringForCategory(String category) {
        return "Alles klar. \n Gerne helfe ich dir mit deinem " + capitalizeFirstLetter(category) + "-Problem!";
    }

    public void takeInput(String data, String category) {

        String inputData = data.toLowerCase();
        String inputCategory;

        if (category == null || category.isEmpty()) {
            chooseCategory(inputData);
            return;
        } else {
            inputCategory = category.toLowerCase();
        }

        if (inputCategory.equals(EMAIL)) {
            if (inputData.contains(TICKET)) {
                setResponse("Seit wann besteht ihr Problem");
            } else {
                setResponse("Ihre Eingabe ist mir unbekannt!");
            }
        }
    }

    private void chooseCategory(String inputData) {

        String result;

        if (inputData.contains(EMAIL)) {
            result = buildIntroStringForCategory(EMAIL) +
                    " Hier findest du unsere Wissendatenbank zu deiner Problemkategorie. " +
                    "Sollte für dich keine Lösung vorhanden können wir ein Ticket erstellen. Tippe Ticket um ein Ticket zu erstellen und Exit um den Chat zu verlassen.";
            setResponse(result);
            setCategory(EMAIL);

        } else if (inputData.contains(DRUCKER)) {
            result = buildIntroStringForCategory(DRUCKER);
            setResponse(result);
            setCategory(DRUCKER);

        } else if (inputData.contains(NETZWERK)) {
            result = buildIntroStringForCategory(NETZWERK);
            setResponse(result);
            setCategory(NETZWERK);

        } else if (inputData.contains(ZUGRIFF)) {
            result = buildIntroStringForCategory(ZUGRIFF);
            setResponse(result);
            setCategory(ZUGRIFF);

        } else if (inputData.contains(DATENSICHERUNG)) {
            result = buildIntroStringForCategory(DATENSICHERUNG);
            setResponse(result);
            setCategory(DATENSICHERUNG);

        } else if (inputData.contains(PERIPHERIE)) {
            result = buildIntroStringForCategory(PERIPHERIE);
            setResponse(result);
            setCategory(PERIPHERIE);

        } else if (inputData.contains(SOFTWARE)) {
            result = buildIntroStringForCategory(SOFTWARE);
            setResponse(result);
            setCategory(SOFTWARE);

        } else if (inputData.contains(ANDERE)) {
            setResponse("Ich helfe dir mit deinen anderen Problemen!");
            setCategory(ANDERE);

        } else {
            setResponse("Nochmal bitte!");
        }
    }

}
