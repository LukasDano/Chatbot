package com.example.Chatbot.api;

import com.example.Chatbot.textadventure.ServiceCategories;
import com.example.Chatbot.textadventure.ServicePriorities;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ShowCollections {

    @GetMapping("/categories")
    public List<String> getServicesCategories() {
        List<String> list = new ArrayList<>();

        list.add(ServiceCategories.EMAIL.getValue());
        list.add(ServiceCategories.DRUCKER.getValue());
        list.add(ServiceCategories.NETZWERK.getValue());
        list.add(ServiceCategories.ZUGRIFF.getValue());
        list.add(ServiceCategories.DATENSICHERUNG.getValue());
        list.add(ServiceCategories.PERIPHERIE.getValue());
        list.add(ServiceCategories.SOFTWARE.getValue());
        list.add(ServiceCategories.ANDERE.getValue());

        return list;
    }

    @GetMapping("/priorities")
    public List<String> getServicesPriorities() {
        List<String> list = new ArrayList<>();

        list.add(ServicePriorities.NIEDRIG.getValue());
        list.add(ServicePriorities.NORMAL.getValue());
        list.add(ServicePriorities.HOCH.getValue());
        list.add(ServicePriorities.KRITISCH.getValue());

        return list;
    }

}
