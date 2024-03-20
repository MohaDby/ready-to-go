const Switch1 = ({ switch1, setSwitch1 }) => {
  return (
    <div className="switch">
      {switch1 === false ? (
        <button
          className="off"
          style={{ backgroundColor: "#5C48D3", color: "white" }}
          onClick={() => {
            setSwitch1(false);
          }}
        >
          Off
        </button>
      ) : (
        <button
          className="off"
          style={{ backgroundColor: "white", color: "#5C48D3" }}
          onClick={() => {
            setSwitch1(false);
          }}
        >
          Off
        </button>
      )}

      {switch1 === true ? (
        <button
          style={{ backgroundColor: "#5C48D3", color: "white" }}
          className="on"
          onClick={() => {
            setSwitch1(true);
          }}
        >
          On
        </button>
      ) : (
        <button
          className="on"
          style={{ backgroundColor: "white", color: "#5C48D3" }}
          onClick={() => {
            setSwitch1(true);
          }}
        >
          On
        </button>
      )}
    </div>
  );
};

export default Switch1;
