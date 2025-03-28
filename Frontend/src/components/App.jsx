import {InputField} from "./input.jsx";
import {ReloadButton, SendButton} from "./buttons.jsx";
import {OutputField} from "./output.jsx";
import {Headline} from "./headline.jsx";
import {sendExampleData} from "../api/sendData.js";

function App() {

    return (
        <>
        <Headline/>
        <InputField/>
        <OutputField/>
        <p/>
        <ReloadButton onClick={() => window.location.reload()}/>
        <SendButton onClick={() => sendExampleData()}/>
        </>
    );
}

export default App;
