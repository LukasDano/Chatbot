package com.example.Chatbot.AI_Integration;

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

    private final String MODEL_NAME = "llama3.2";
    private final String API_URL = "http://localhost:11434/api/generate";

    public String callOnLocalhost(String promptText) throws IOException, URISyntaxException {

        HttpURLConnection conn = getConnection(promptText);

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

    private HttpURLConnection getConnection(String promptText) throws URISyntaxException, IOException {
        URL url = new URI(API_URL).toURL();
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json; utf-8");
        conn.setRequestProperty("Accept", "application/json");
        conn.setDoOutput(true);

        String jsonInputString = String.format(
                "{\"model\": \"%s\", \"prompt\":\"%s\", \"stream\": false}", MODEL_NAME, promptText
        );

        try (OutputStream outputStream = conn.getOutputStream()) {
            byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);
            outputStream.write(input, 0, input.length);
        }
        return conn;
    }
}
