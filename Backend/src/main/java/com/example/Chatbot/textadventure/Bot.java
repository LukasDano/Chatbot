package com.example.Chatbot.textadventure;

public class Bot {
    private String answer;
    private final String willkommen = "hallo";
    private final String email = "email";
    private final String drucker = "drucker";
    private final String netzwerk = "netzwerk";
    private final String zugriff = "zugriff";
    private final String datensicherung = "datensicherung";
    private final String peripherie = "peripherie";
    private final String software = "software";
    private final String andere = "andere";
    private final String ticket = "ticket";
    private final String exit  = "exit";

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public void workWithInput(String data) {



        if (data.toLowerCase().equals(willkommen)) {
            setAnswer("Hallo auch!");
        } else {
            setAnswer("Nochmal bitte!");
        }

        if (data.toLowerCase().equals(email)) {
            setAnswer("Ich helfe dir mit deinem Email Problem! Hier findest du unsere Wissendatenbank zu deiner Problemkategorie. Sollte für dich keine Lösung vorhanden können wir ein Ticket erstellen. Tippe Ticket um ein Ticket zu erstellen und Exit um den Chat zu verlassen.");
            if (data.toLowerCase().equals(ticket)){setAnswer("Seit wann besteht ihr Problem");}
            else if(data.toLowerCase().equals(exit)) {setAnswer( "Schön das Sie ihr Problem lösen konnten, ich wünsche einen schönen Tag!");}
            else {setAnswer( "Ihre Eingabe ist mir unbekannt!");}
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





