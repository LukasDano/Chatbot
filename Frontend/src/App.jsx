import {InputField} from "./components/input.jsx";
import {ReloadButton} from "./components/buttons.jsx";
import {OutputField} from "./components/output.jsx";
import {Headline} from "./components/headline.jsx";

function App() {

    return (
        <>
        <Headline/>
        <InputField/>
        <OutputField/>
        <p/>
        <ReloadButton onClick={() => window.location.reload()}/>
        </>
    );
}

export default App;
