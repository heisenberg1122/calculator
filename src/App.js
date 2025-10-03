import React, { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("0");
    } else if (value === "=") {
      try {
        // Evaluate safely
        setDisplay(eval(display.replace("÷", "/")) + "");
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  // Handle surname button
  const showFullName = () => {
    setDisplay("Quiambao, Calvin Jared M.");
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "40px" }}>
      <h2>Calculator of Quiambao, Calvin Jared M. - IT3B</h2>

      <div
        style={{
          width: "260px",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "15px",
          background: "#264653",
        }}
      >
        {/* Display */}
        <div
          style={{
            background: "#2a9d8f",
            color: "white",
            textAlign: "right",
            padding: "15px",
            borderRadius: "10px",
            fontSize: "22px",
            marginBottom: "20px",
          }}
        >
          {display}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {["7", "8", "9", "÷",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "C", "0", "=", "+"].map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              style={{
                padding: "15px",
                fontSize: "18px",
                borderRadius: "8px",
                border: "none",
                background:
                  btn === "C" ? "#e76f51" :
                  btn === "=" ? "#2196f3" :
                  "#adb5bd",
                color: btn === "C" || btn === "=" ? "white" : "black",
                cursor: "pointer",
              }}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Surname button */}
        <button
          onClick={showFullName}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "15px",
            borderRadius: "8px",
            background: "#6c998e",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Quiambao
        </button>
      </div>
    </div>
  );
}
