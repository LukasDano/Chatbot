package com.example.Chatbot.api;

import com.example.Chatbot.basic.Reader;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/input")
public class Input {

    @GetMapping("/string")
    @CrossOrigin(origins = "http://localhost:5173")
    public String answerFrontend(@RequestParam String text){

        Reader reader = new Reader();
        reader.workWithInput(text);

        return reader.getAnswer();
    }



}
