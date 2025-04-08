package com.example.Chatbot.textadventure;

import org.json.JSONObject;

import java.util.Date;

public class Bot {
    private String response;
    private String serviceCategory;
    private String firstOccurrence ;
    private String priority;
    private boolean othersWithTheSameProblem;

    private final String EMAIL = ServiceCategories.EMAIL.getValue().toLowerCase();
    private final String DRUCKER = ServiceCategories.DRUCKER.getValue().toLowerCase();
    private final String NETZWERK = ServiceCategories.NETZWERK.getValue().toLowerCase();
    private final String ZUGRIFF = ServiceCategories.ZUGRIFF.getValue().toLowerCase();
    private final String DATENSICHERUNG = ServiceCategories.DATENSICHERUNG.getValue().toLowerCase();
    private final String PERIPHERIE = ServiceCategories.PERIPHERIE.getValue().toLowerCase();
    private final String SOFTWARE = ServiceCategories.SOFTWARE.getValue().toLowerCase();
    private final String ANDERE = ServiceCategories.ANDERE.getValue().toLowerCase();

    public void setResponse(String response) {
        this.response = response;
    }

    public void setServiceCategory(String serviceCategory) {
        this.serviceCategory = serviceCategory;
    }

    public void setFirstOccurrence(String firstOccurrence) {
        this.firstOccurrence = firstOccurrence;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public void setOthersWithTheSameProblem(boolean othersWithTheSameProblem) {
        this.othersWithTheSameProblem = othersWithTheSameProblem;
    }

    public JSONObject getResult(){
        JSONObject result = new JSONObject();

        result.put("category", serviceCategory);
        result.put("firstOccurrence", firstOccurrence);
        result.put("priority", priority);
        result.put("othersWithTheSameProblem", othersWithTheSameProblem);
        result.put("response", response);

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

    public void takeInput(String data, String category, String firstOccurrence, String priority, String othersWithTheSameProblem) {

        String inputData = data.toLowerCase();

        if (category == null || category.isEmpty()) {
            askForServiceCategory(inputData);
            return;
        } else if (firstOccurrence == null) {

        } else if (priority == null) {

        } else if (othersWithTheSameProblem == null) {

        } else {

        }

    }

    private void askForServiceCategory(String inputData) {
        String result;
        String nextQuestion = "\n\n Seit wann besteht ihr Problem?";

        if (inputData.contains(EMAIL)) {
            result = buildIntroStringForCategory(EMAIL) +
                    " Hier findest du unsere Wissendatenbank zu deiner Problemkategorie. " +
                    "Sollte für dich keine Lösung vorhanden können wir ein Ticket erstellen. Tippe Ticket um ein Ticket zu erstellen und Exit um den Chat zu verlassen.";
            setServiceCategory(EMAIL);

        } else if (inputData.contains(DRUCKER)) {
            result = buildIntroStringForCategory(DRUCKER);
            setServiceCategory(DRUCKER);

        } else if (inputData.contains(NETZWERK)) {
            result = buildIntroStringForCategory(NETZWERK);
            setServiceCategory(NETZWERK);

        } else if (inputData.contains(ZUGRIFF)) {
            result = buildIntroStringForCategory(ZUGRIFF);
            setServiceCategory(ZUGRIFF);

        } else if (inputData.contains(DATENSICHERUNG)) {
            result = buildIntroStringForCategory(DATENSICHERUNG);
            setServiceCategory(DATENSICHERUNG);

        } else if (inputData.contains(PERIPHERIE)) {
            result = buildIntroStringForCategory(PERIPHERIE);
            setServiceCategory(PERIPHERIE);

        } else if (inputData.contains(SOFTWARE)) {
            result = buildIntroStringForCategory(SOFTWARE);
            setServiceCategory(SOFTWARE);

        } else if (inputData.contains(ANDERE)) {
            result = "Ich helfe dir mit deinen anderen Problemen!";
            setServiceCategory(ANDERE);

        } else {
            setResponse("Nochmal bitte!");
            return;
        }

        setResponse(result + nextQuestion);
    }

    private void askForFirstOccurrence(String inputData) {
        String result;
        String nextQuestion = "\n\n Welche Priorität würden sie Ihrem Ticket geben?";

    }

}
