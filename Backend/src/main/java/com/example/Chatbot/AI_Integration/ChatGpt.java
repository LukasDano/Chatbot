package com.example.Chatbot.AI_Integration;

import java.io.IOException;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;


public class ChatGpt {

    public void callWithAPI(String apiKey, String content) throws IOException, InterruptedException {
        var body = String.format("""
                {
                    "model": "gpt-3.5-turbo",
                    "messages": [
                    {
                        "role": "user",
                        "content": "%s"
                    }
                ]
            }""", content);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.openai.com/v1/chat/completions"))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + apiKey)
                .POST(HttpRequest.BodyPublishers.ofString(body))
                .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}
