package com.example.Chatbot.basic;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/input")
public class BIOS {

    private String answer;

    public String getAnswer(){
        return answer;
    }

    public void setAnswer(String answer){
        this.answer = answer;
    }

    @GetMapping("/basic")
    @CrossOrigin(origins = "http://localhost:5173")
    public String answerFrontend(@RequestParam String data){

        BIOS datenVerarbeitung = new BIOS();
        datenVerarbeitung.workWithInput(data);

        return datenVerarbeitung.getAnswer();
    }


    private void workWithInput(String data){
 //test
        String willkommen = "hallo";
        String welcome = "hello";

        if (data.toLowerCase().equals(willkommen) || data.toLowerCase().equals(welcome)){
            setAnswer("Hallo auch!");
        } else {
            setAnswer("Nochmal bitte!");
        }
    }

}
