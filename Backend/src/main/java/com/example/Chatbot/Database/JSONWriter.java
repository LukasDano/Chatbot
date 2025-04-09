package com.example.Chatbot.Database;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class JSONWriter {

    private static final String FILE_PATH = "database/tickets.json";
    private static final Path PATHS_FILE_PATH = Paths.get(FILE_PATH);

    public void saveTicket(JSONObject data) {
        try {
            JSONArray existingTickets = readTicketsArray();

            int nextId = getNextId(existingTickets);

            JSONObject newTicket = new JSONObject();
            newTicket.put("id", nextId);
            newTicket.put("category", data.optString("category", ""));
            newTicket.put("firstOccurrence", data.optString("firstOccurrence", ""));
            newTicket.put("priority", data.optString("priority", ""));
            newTicket.put("othersWithTheSameProblem", data.optString("othersWithTheSameProblem", ""));

            existingTickets.put(newTicket);

            try (FileWriter file = new FileWriter(FILE_PATH)) {
                file.write(existingTickets.toString(4));
            }

            System.out.println("Ticket gespeichert mit ID: " + nextId);

        } catch (IOException e) {
            System.err.println("Fehler beim Speichern des Tickets: " + e.getMessage());
        }
    }

    private JSONArray readTicketsArray() {
        try {
            if (!Files.exists(PATHS_FILE_PATH)) {
                return new JSONArray();
            }

            String content = new String(Files.readAllBytes(PATHS_FILE_PATH));
            return new JSONArray(content);

        } catch (IOException e) {
            System.err.println("Fehler beim Lesen der Datei: " + e.getMessage());
            return new JSONArray();
        }
    }

    private int getNextId(JSONArray array) {
        int maxId = 0;
        for (int i = 0; i < array.length(); i++) {
            JSONObject ticket = array.getJSONObject(i);
            maxId = Math.max(maxId, ticket.optInt("id", 0));
        }
        return maxId + 1;
    }

}
