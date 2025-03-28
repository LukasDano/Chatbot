package com.example.Chatbot.basic;

public class Reader {

    private String answer;

    public String getAnswer(){
        return answer;
    }

    public void setAnswer(String answer){
        this.answer = answer;
    }

    public void workWithInput(String data){

        String willkommen = "hallo";
        String welcome = "hello";

        if (data.toLowerCase().equals(willkommen) || data.toLowerCase().equals(welcome)){
            setAnswer("Hallo auch!");
        } else {
            setAnswer("Nochmal bitte!");
        }
    }
}
