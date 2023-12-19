import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

import frownUrl from "./assets/frown.svg";
import checkCircleUrl from "./assets/check-circle.svg";
import alertTriangleUrl from "./assets/alert-triangle.svg";
import alertCircleUrl from "./assets/alert-circle.svg";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* ถ้าสร้าง Component ของ Button เสร็จแล้วให้ Uncomment โค้ดด้านล่าง เพื่อดูผลลัพธ์ */}
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* ถ้าสร้าง Component Alert เสร็จแล้วให้ Uncomment โค้ดด้านล่าง เพื่อดูผลลัพธ์ */}
        <Alert severity="error" icon={frownUrl}>
          This is error alert box
        </Alert>
        <Alert severity="warning" icon={alertTriangleUrl}>
          This is a warning alert box
        </Alert>
        <Alert severity="info" icon={alertCircleUrl}>
          This is an info alert box
        </Alert>
        <Alert severity="success" icon={checkCircleUrl}>
          This is a success alert box
        </Alert>
      </div>
    </div>
  );
}

export default App;
