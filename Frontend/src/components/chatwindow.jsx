import {Button} from "react-bootstrap";

const reload = () => {
  window.location.reload();
};

export default function Chatwindow() {
    return (
        <>
        <Button variant="primary" onClick={() => reload()}>Primary</Button>
        </>
    );
}