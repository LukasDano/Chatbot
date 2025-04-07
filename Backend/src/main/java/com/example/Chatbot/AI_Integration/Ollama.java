package com.example.Chatbot.AI_Integration;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class Ollama {

    private final String GENERATE_API_URL = "http://localhost:11434/api/generate";
    private final String CHAT_API_URL = "http://localhost:11434/api/chat";

    private HttpURLConnection getConnection(String uri) throws URISyntaxException, IOException {
        URL url = new URI(uri).toURL();
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json; utf-8");
        conn.setRequestProperty("Accept", "application/json");
        conn.setDoOutput(true);

        return conn;
    }

    public String callGenerateAPI(String promptText, String modell) throws IOException, URISyntaxException {

        HttpURLConnection conn = getConnection(GENERATE_API_URL);

        String jsonInputString = String.format(
                "{\"model\": \"%s\", \"prompt\":\"%s\", \"stream\": false}", modell, promptText
        );

        try (OutputStream outputStream = conn.getOutputStream()) {
            byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);
            outputStream.write(input, 0, input.length);
        }

        int code = conn.getResponseCode();
        System.out.println("Response Code: " + code);

        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8));
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = in.readLine()) != null) {
            response.append(line);
        }

        in.close();

        JSONObject jsonResponse = new JSONObject(response.toString());
        String responseText = jsonResponse.getString("response");
        System.out.println("Response: " + responseText);

        conn.disconnect();
        return responseText;
    }

    public String callChatAPI(String newPrompt, JSONArray chatHistory, String modell) throws URISyntaxException, IOException {
        HttpURLConnection conn = getConnection(CHAT_API_URL);

        JSONObject userMessage = new JSONObject()
                .put("role", "user")
                .put("content", newPrompt);
        chatHistory.put(userMessage);

        JSONObject payload = new JSONObject();
        payload.put("model", modell);
        payload.put("messages", chatHistory);
        payload.put("stream", false);

        try (OutputStream outputStream = conn.getOutputStream()) {
            byte[] input = payload.toString().getBytes(StandardCharsets.UTF_8);
            outputStream.write(input, 0, input.length);
        }

        int code = conn.getResponseCode();
        System.out.println("Response Code: " + code);

        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8));
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = in.readLine()) != null) {
            response.append(line);
        }
        in.close();

        JSONObject jsonResponse = new JSONObject(response.toString());
        String responseText = jsonResponse.getJSONObject("message").getString("content");
        System.out.println("Response: " + responseText);

        conn.disconnect();
        return responseText;
    }
}
