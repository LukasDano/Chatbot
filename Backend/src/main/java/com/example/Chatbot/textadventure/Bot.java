package com.example.Chatbot.textadventure;

import org.json.JSONObject;

public class Bot {
    private String response;
    private String serviceCategory;
    private String firstOccurrence ;
    private String servicePriority;
    private String othersWithTheSameProblem;
    private boolean done;

    private final String EMAIL = ServiceCategories.EMAIL.getValue().toLowerCase();
    private final String DRUCKER = ServiceCategories.DRUCKER.getValue().toLowerCase();
    private final String NETZWERK = ServiceCategories.NETZWERK.getValue().toLowerCase();
    private final String ZUGRIFF = ServiceCategories.ZUGRIFF.getValue().toLowerCase();
    private final String DATENSICHERUNG = ServiceCategories.DATENSICHERUNG.getValue().toLowerCase();
    private final String PERIPHERIE = ServiceCategories.PERIPHERIE.getValue().toLowerCase();
    private final String SOFTWARE = ServiceCategories.SOFTWARE.getValue().toLowerCase();
    private final String ANDERE = ServiceCategories.ANDERE.getValue().toLowerCase();

    public void setResponse(String response) {
        this.response = response;
    }

    public void setServiceCategory(String serviceCategory) {
        this.serviceCategory = serviceCategory;
    }

    public void setFirstOccurrence(String firstOccurrence) {
        this.firstOccurrence = firstOccurrence;
    }

    public void setServicePriority(String servicePriority) {
        this.servicePriority = servicePriority;
    }

    public void setOthersWithTheSameProblem(String othersWithTheSameProblem) {
        this.othersWithTheSameProblem = othersWithTheSameProblem;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public JSONObject getResult(){
        JSONObject result = new JSONObject();

        result.put("category", serviceCategory);
        result.put("firstOccurrence", firstOccurrence);
        result.put("priority", servicePriority);
        result.put("othersWithTheSameProblem", othersWithTheSameProblem);
        result.put("response", response);
        result.put("done", done);

        return result;
    }

    private String capitalizeFirstLetter(String input) {
        if (input == null || input.isEmpty()) {
            return input;
        }
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }

    private String buildIntroStringForCategory(String category) {
        return "Alles klar. \n Gerne helfe ich dir mit deinem " + capitalizeFirstLetter(category) + "-Problem!";
    }

    private boolean isValidPriorityValue(String priority) {

        if (priority.isEmpty()){
            return true;
        }

        return ServicePriorities.isValid(priority);
    }

    public void takeInput(String data, String category, String firstOccurrence, String priority, String othersWithTheSameProblem) {

        String inputData = data.toLowerCase();

        if (category == null || category.isEmpty()) {
            askForServiceCategory(inputData);

        } else if (firstOccurrence == null || firstOccurrence.isEmpty()) {
            askForFirstOccurrence(inputData);

        } else if (priority == null || priority.isEmpty()) {
            askForPrio(inputData);

            if (!isValidPriorityValue(servicePriority)){
                setServicePriority(ServicePriorities.NORMAL.getValue());
                setResponse("Die Priorität wurde aufgrund deiner ungültigen Eingabe auf mittel gesetzt. " + response);
            }

        } else if (othersWithTheSameProblem == null || othersWithTheSameProblem.isEmpty()) {
            askForMultiUserProblem(inputData);

        } else {
            setDone(true);
            setResponse("Ein Mitarbeiter wird sich bei Gelegenheit bei dir melden");
        }

    }

    private void askForServiceCategory(String inputData) {
        String result;
        String nextQuestion = "\n\n Seit wann besteht ihr Problem?";

        if (inputData.contains(EMAIL)) {
            result = buildIntroStringForCategory(EMAIL);
            setServiceCategory(EMAIL);

        } else if (inputData.contains(DRUCKER)) {
            result = buildIntroStringForCategory(DRUCKER);
            setServiceCategory(DRUCKER);

        } else if (inputData.contains(NETZWERK)) {
            result = buildIntroStringForCategory(NETZWERK);
            setServiceCategory(NETZWERK);

        } else if (inputData.contains(ZUGRIFF)) {
            result = buildIntroStringForCategory(ZUGRIFF);
            setServiceCategory(ZUGRIFF);

        } else if (inputData.contains(DATENSICHERUNG)) {
            result = buildIntroStringForCategory(DATENSICHERUNG);
            setServiceCategory(DATENSICHERUNG);

        } else if (inputData.contains(PERIPHERIE)) {
            result = buildIntroStringForCategory(PERIPHERIE);
            setServiceCategory(PERIPHERIE);

        } else if (inputData.contains(SOFTWARE)) {
            result = buildIntroStringForCategory(SOFTWARE);
            setServiceCategory(SOFTWARE);

        } else if (inputData.contains(ANDERE)) {
            result = "Ich helfe dir mit deinen anderen Problemen!";
            setServiceCategory(ANDERE);

        } else {
            setResponse("Nochmal bitte!");
            return;
        }

        setResponse(result + nextQuestion);
    }

    private void askForFirstOccurrence(String inputData) {
        String result = "";
        String nextQuestion = "Welche Priorität würden sie Ihrem Ticket geben?";

        setResponse(result + nextQuestion);
        setFirstOccurrence(inputData);
    }

    private void askForPrio(String inputData){
        String result = "";
        String nextQuestion = "Tritt das Problem auch bei anderen Kollegen auf?";

        setResponse(result + nextQuestion);
        setServicePriority(inputData);
    }

    private void askForMultiUserProblem(String inputData){
        String result = "";
        String nextQuestion = "Alle nötigen Daten wurden erfasst, soll ein Ticket erstellt werden?";

        setResponse(result + nextQuestion);
        setOthersWithTheSameProblem(inputData);
    }
}
