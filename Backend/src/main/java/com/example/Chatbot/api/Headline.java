package com.example.Chatbot.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Headline {

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/headline")
    public String getHeadline() {
        return "Willkommen zum Chatbot!";
    }
}
