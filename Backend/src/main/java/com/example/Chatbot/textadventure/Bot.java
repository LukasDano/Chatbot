package com.example.Chatbot.textadventure;

import org.json.JSONObject;

import java.util.Objects;
import java.util.ServiceLoader;

public class Bot {
    private String answer;
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
    private final String EXIT = ServiceCategories.EXIT.getValue().toLowerCase();

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    //TODO gibt ein Objekt mit der Kategorie und der Antwort ins Frontend
    public void getResult(){
        JSONObject result = new JSONObject();
    }

    public void workWithInput(String data) {

        String inputData = data.toLowerCase();
        chooseCategory(inputData);

        switch (category){
            case "email":
                if (inputData.equals(TICKET)) {
                    setAnswer("Seit wann besteht ihr Problem");
                } else if (inputData.equals(EXIT)) {
                    setAnswer("Schön das Sie ihr Problem lösen konnten, ich wünsche einen schönen Tag!");
                } else {
                    setAnswer("Ihre Eingabe ist mir unbekannt!");
                }
                break;
        }
    }

    private void chooseCategory(String inputData) {

        if (inputData.equals(EMAIL)) {
            setAnswer("Ich helfe dir mit deinem Email Problem! Hier findest du unsere Wissendatenbank zu deiner Problemkategorie. " +
                    "Sollte für dich keine Lösung vorhanden können wir ein Ticket erstellen. Tippe Ticket um ein Ticket zu erstellen und Exit um den Chat zu verlassen.");
            setCategory(EMAIL);

        } else if (inputData.equals(DRUCKER)) {
            setAnswer("Ich helfe dir mit deinem Drucker Problem!");
            setCategory(DRUCKER);

        } else if (inputData.equals(NETZWERK)) {
            setAnswer("Ich helfe dir mit deinem Netzwerk Problem!");
            setCategory(NETZWERK);

        } else if (inputData.equals(ZUGRIFF)) {
            setAnswer("Ich helfe dir mit deinem Zugriffs Problem!");
            setCategory(ZUGRIFF);

        } else if (inputData.equals(DATENSICHERUNG)) {
            setAnswer("Ich helfe dir mit deinem Datensicherungs Problem!");
            setCategory(DATENSICHERUNG);

        } else if (inputData.equals(PERIPHERIE)) {
            setAnswer("Ich helfe dir mit deinem Peripherie Problem!");
            setCategory(PERIPHERIE);

        } else if (inputData.equals(SOFTWARE)) {
            setAnswer("Ich helfe dir mit deinem Software Problem!");
            setCategory(SOFTWARE);

        } else if (inputData.equals(ANDERE)) {
            setAnswer("Ich helfe dir mit deinen anderen Problemen!");
            setCategory(ANDERE);

        } else {
            setAnswer("Nochmal bitte!");
        }
    }

}





