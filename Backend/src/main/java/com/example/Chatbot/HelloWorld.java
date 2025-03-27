package com.example.Chatbot;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/hello")
    public String helloWorld() {
        return getText();
    }

    private String getText(){
        return "Willkommen zum Chatbot!";
    }

}
