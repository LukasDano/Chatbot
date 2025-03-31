package com.example.Chatbot.api;

import com.example.Chatbot.basic.Person;
import com.example.Chatbot.basic.Reader;
import com.example.Chatbot.chatGPT.BasicAICaller;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/input")
@CrossOrigin(origins = "http://localhost:5173")
public class Input {

    @GetMapping("/string")
    public String getResponseForString(@RequestParam String text) {

        Reader reader = new Reader();
        reader.workWithInput(text);

        return reader.getAnswer();
    }

    @PostMapping("/json")
    public String postResponseForJSON(@RequestBody String data) {
        try {
            JSONObject personData = new JSONObject(data);

            String name = personData.getString("name");
            int age = personData.getInt("age");
            String city = personData.getString("city");

            Person person = new Person(name, age, city);

            return person.getDescription();
        } catch (Exception e) {
            return "Fehler im Backend";
        }
    }

    @PostMapping("/ai")
    public void postResponseFromAI(@RequestBody String data) throws IOException, InterruptedException {
        JSONObject personData = new JSONObject(data);

        String content = personData.getString("content");
        String apiKey = personData.getString("apiKey");

        BasicAICaller chatGPT = new BasicAICaller();
        chatGPT.callChatGPT(apiKey, content);
    }

}
