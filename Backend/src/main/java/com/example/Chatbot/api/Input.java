package com.example.Chatbot.api;

import com.example.Chatbot.Database.JSONWriter;
import com.example.Chatbot.aiIntegration.Ollama;
import com.example.Chatbot.basic.Reader;
import com.example.Chatbot.textadventure.Bot;
import com.example.Chatbot.textadventure.ServicePriorities;
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
    private final JSONWriter DATABASE_WRITER = new JSONWriter();
    private final Reader READER = new Reader();
    private final Ollama OLLAMA = new Ollama();

    @GetMapping("/string")
    public String getResponseForString(@RequestParam String data) {
        READER.workWithInput(data);
        return READER.getAnswer();
    }

    @GetMapping("/servicePrioValidation")
    public boolean getIsValidServicePrio(@RequestParam String data) {
        return ServicePriorities.isValid(data);
    }

    @PostMapping("/database")
    public void postTicketInDatabase(@RequestBody String data) {
        JSONObject bodyJson = new JSONObject(data);
        DATABASE_WRITER.saveTicket(bodyJson);
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
        return workWithCorrectModell(new JSONObject(data)).toString();
    }

    private JSONObject workWithCorrectModell(JSONObject bodyJson) throws URISyntaxException, IOException {

        String modell = bodyJson.getString("modell");
        JSONArray chatHistory = bodyJson.getJSONArray("chatHistory");

        String content = bodyJson.getString("content");

        String category = bodyJson.optString("category", null);
        String firstOccurrence = bodyJson.optString("firstOccurrence", null);
        String priority = bodyJson.optString("priority", null);
        String othersWithTheSameProblem = bodyJson.optString("othersWithTheSameProblem", null);


        if (modell.equals("llama3.2")) {
            return OLLAMA.callChatAPI(content, chatHistory, LLAMA_3_2);
        }

        BOT.takeInput(content, category, firstOccurrence, priority, othersWithTheSameProblem);
        return BOT.getResult();
    }
}
