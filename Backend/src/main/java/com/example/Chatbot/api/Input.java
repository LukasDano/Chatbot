package com.example.Chatbot.api;

import com.example.Chatbot.AI_Integration.Ollama;
import com.example.Chatbot.basic.Person;
import com.example.Chatbot.basic.Reader;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/input")
@CrossOrigin(origins = "http://localhost:5173")
public class Input {

    private final Reader READER = new Reader();
    private final Ollama OLLAMA = new Ollama();

    @GetMapping("/string")
    public String getResponseForString(@RequestParam String text) {
        READER.workWithInput(text);
        return READER.getAnswer();
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

    @PostMapping("/ai/generate")
    public String postOllamaGenerate(@RequestBody String data) throws IOException, URISyntaxException {
        JSONObject personData = new JSONObject(data);
        String content = personData.getString("content");

        return OLLAMA.callGenerateAPI(content);
    }

    @PostMapping("/ai/chat")
    public String postOllamaChat(@RequestBody String data) throws IOException, URISyntaxException {
        JSONObject personData = new JSONObject(data);
        String content = personData.getString("content");
        JSONArray chatHistory = personData.getJSONArray("chatHistory");

        return OLLAMA.callChatAPI(content, chatHistory);
    }

}
