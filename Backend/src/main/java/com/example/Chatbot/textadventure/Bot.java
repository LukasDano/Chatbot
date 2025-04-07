package com.example.Chatbot.textadventure;

public class Bot {
    private String answer;

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public void workWithInput(String data) {

        String willkommen = "hallo";
        String email = "email";
        String drucker = "drucker";
        String netzwerk = "netzwerk";
        String zugriff = "zugriff";
        String datensicherung = "datensicherung";
        String peripherie = "peripherie";
        String software = "software";
        String andere = "andere";

        if (data.toLowerCase().equals(willkommen)) {
            setAnswer("Hallo auch!");
        } else {
            setAnswer("Nochmal bitte!");
        }

        if (data.toLowerCase().equals(email)) {
            setAnswer("Ich helfe dir mit deinem Email Problem!");
        } else if (data.toLowerCase().equals(drucker)) {
            setAnswer("Ich helfe dir mit deinem Drucker Problem!");
        }
        else if (data.toLowerCase().equals(netzwerk)) {
            setAnswer("Ich helfe dir mit deinem Netzwerk Problem!");
        }
        else if (data.toLowerCase().equals(zugriff)) {
            setAnswer("Ich helfe dir mit deinem Zugriffs Problem!");
        }
        else if (data.toLowerCase().equals(datensicherung)) {
            setAnswer("Ich helfe dir mit deinem Datensicherungs Problem!");
        }
        else if (data.toLowerCase().equals(peripherie)) {
            setAnswer("Ich helfe dir mit deinem Peripherie Problem!");
        }
        else if (data.toLowerCase().equals(software)) {
            setAnswer("Ich helfe dir mit deinem Software Problem!");
        }
        else if (data.toLowerCase().equals(andere)) {
            setAnswer("Ich helfe dir mit deinen anderen Problemen!");
        }
        else {
            setAnswer("Nochmal bitte!");
        }

    }
}





