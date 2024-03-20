const Switch3 = ({ switch3, setSwitch3 }) => {
  return (
    <div className="switch">
      {switch3 === false ? (
        <button
          className="off"
          style={{ backgroundColor: "#5C48D3", color: "white" }}
          onClick={() => {
            setSwitch3(false);
          }}
        >
          Of
        </button>
      ) : (
        <button
          className="off"
          style={{ backgroundColor: "white", color: "#5C48D3" }}
          onClick={() => {
            setSwitch3(false);
          }}
        >
          Of
        </button>
      )}

      {switch3 === true ? (
        <button
          style={{ backgroundColor: "#5C48D3", color: "white" }}
          className="on"
          onClick={() => {
            setSwitch3(true);
          }}
        >
          On
        </button>
      ) : (
        <button
          className="on"
          style={{ backgroundColor: "white", color: "#5C48D3" }}
          onClick={() => {
            setSwitch3(true);
          }}
        >
          On
        </button>
      )}
    </div>
  );
};

export default Switch3;
