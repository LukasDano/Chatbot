package com.example.Chatbot.api;

import com.example.Chatbot.AI_Integration.Ollama;
import com.example.Chatbot.basic.Person;
import com.example.Chatbot.basic.Reader;
import com.example.Chatbot.textadventure.Bot;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/input")
@CrossOrigin(origins = "http://localhost:5173")
public class Input {

    private final String LLAMA_3_2 = "llama3.2";

    private final Bot BOT = new Bot();
    private final Ollama OLLAMA = new Ollama();

    @GetMapping("/string")
    public String getResponseForString(@RequestParam String text) {
        BOT.workWithInput(text);
        return BOT.getAnswer();
    }

    @PostMapping("/ai/generate")
    public String postOllamaGenerate(@RequestBody String data) throws IOException, URISyntaxException {
        JSONObject bodyJson = new JSONObject(data);
        String content = bodyJson.getString("content");

        return OLLAMA.callGenerateAPI(content, LLAMA_3_2);
    }

    @PostMapping("/ai/chat")
    public String postOllamaChat(@RequestBody String data) throws IOException, URISyntaxException {
        JSONObject bodyJson = new JSONObject(data);

        String content = bodyJson.getString("content");
        JSONArray chatHistory = bodyJson.getJSONArray("chatHistory");

        return OLLAMA.callChatAPI(content, chatHistory, LLAMA_3_2);
    }

    @PostMapping("/ai")
    public String postResponseFromBackend(@RequestBody String data) throws URISyntaxException, IOException {
        JSONObject bodyJson = new JSONObject(data);

        String content = bodyJson.getString("content");
        String modell = bodyJson.getString("modell");
        JSONArray chatHistory = bodyJson.getJSONArray("chatHistory");

        return workWithCorrectModell(modell, content, chatHistory);
    }

    private String workWithCorrectModell(String frontendModell, String content, JSONArray chatHistory) throws URISyntaxException, IOException {

        switch (frontendModell) {
            case "llama3.2":
                return OLLAMA.callChatAPI(content, chatHistory, LLAMA_3_2);
            default:
                BOT.workWithInput(content);
                return BOT.getAnswer();
        }
    }
}
