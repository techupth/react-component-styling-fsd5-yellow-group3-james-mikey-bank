import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import errorIcon from "./assets/icons/frown.svg";
import warningIcon from "./assets/icons/alert-triangle.svg";
import infoIcon from "./assets/icons/alert-circle.svg";
import successIcon from "./assets/icons/check-circle.svg";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert img={errorIcon} severity="error">
          This is error alert box
        </Alert>
        <Alert img={warningIcon} severity="warning">
          This is a warning alert box
        </Alert>
        <Alert img={infoIcon} severity="info">
          This is an info alert box
        </Alert>
        <Alert img={successIcon} severity="success">
          This is a success alert box
        </Alert>
      </div>
    </div>
  );
}

export default App;
