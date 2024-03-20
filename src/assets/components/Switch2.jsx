const Switch2 = ({ switch2, setSwitch2 }) => {
  return (
    <div className="switch">
      {switch2 === false ? (
        <button
          className="off"
          style={{ backgroundColor: "#5C48D3", color: "white" }}
          onClick={() => {
            setSwitch2(false);
          }}
        >
          Of
        </button>
      ) : (
        <button
          className="off"
          style={{ backgroundColor: "white", color: "#5C48D3" }}
          onClick={() => {
            setSwitch2(false);
          }}
        >
          Of
        </button>
      )}

      {switch2 === true ? (
        <button
          style={{ backgroundColor: "#5C48D3", color: "white" }}
          className="on"
          onClick={() => {
            setSwitch2(true);
          }}
        >
          On
        </button>
      ) : (
        <button
          className="on"
          style={{ backgroundColor: "white", color: "#5C48D3" }}
          onClick={() => {
            setSwitch2(true);
          }}
        >
          On
        </button>
      )}
    </div>
  );
};

export default Switch2;
