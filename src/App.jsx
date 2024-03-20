import { useState } from "react";
import "./App.css";
import Switch1 from "./assets/components/Switch1";
import Switch2 from "./assets/components/Switch2";
import Switch3 from "./assets/components/Switch3";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  //optimiser encore

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="switches">
            <Switch1 switch1={switch1} setSwitch1={setSwitch1} />
            <Switch2 switch2={switch2} setSwitch2={setSwitch2} />
            <Switch3 switch3={switch3} setSwitch3={setSwitch3} />
            <button
              className="reset"
              onClick={() => {
                setSwitch1(false);
                setSwitch2(false);
                setSwitch3(false);
              }}
            >
              Reset
            </button>
          </div>

          {switch1 && switch2 && switch3 === true ? (
            <div className="lancement" style={{ backgroundColor: "#46AC4A" }}>
              <p>Go !</p>
            </div>
          ) : (
            <div className="lancement" style={{ backgroundColor: "#D34848" }}>
              <p>No way !</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
