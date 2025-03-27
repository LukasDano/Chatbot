import {Button} from "react-bootstrap";

const reload = () => {
  window.location.reload();
};

export default function ReloadButton() {
    return (
        <>
        <Button variant="info" onClick={() => reload()}>Refresh</Button>
        </>
    );
}