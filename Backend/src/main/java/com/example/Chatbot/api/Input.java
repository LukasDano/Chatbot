package com.example.Chatbot.api;

import com.example.Chatbot.aiIntegration.Ollama;
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
    private final Reader READER = new Reader();
    private final Ollama OLLAMA = new Ollama();

    @GetMapping("/string")
    public String getResponseForString(@RequestParam String text) {
        READER.workWithInput(text);
        return READER.getAnswer();
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

        return OLLAMA.callChatAPI(content, chatHistory, LLAMA_3_2).getString("response");
    }

    @PostMapping("/ai")
    public String postResponseFromBackend(@RequestBody String data) throws URISyntaxException, IOException {
        JSONObject bodyJson = new JSONObject(data);

        String content = bodyJson.getString("content");
        String modell = bodyJson.getString("modell");
        String category = bodyJson.optString("category", null);
        JSONArray chatHistory = bodyJson.getJSONArray("chatHistory");

        return workWithCorrectModell(modell, category, content, chatHistory).toString();
    }

    private JSONObject workWithCorrectModell(String frontendModell, String category, String content, JSONArray chatHistory) throws URISyntaxException, IOException {

        switch (frontendModell) {
            case "llama3.2":
                return OLLAMA.callChatAPI(content, chatHistory, LLAMA_3_2);
            default:
                BOT.takeInput(content, category);
                return BOT.getResult();
        }
    }
}
