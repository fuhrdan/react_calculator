import React, { useState } from "react";
import "./Calculator.css"; // Optional for styling

function Calculator() {
    const [input, setInput] = useState("");
    
    const handleClick = (value) => {
        if (value === "=") {
            try {
                // Evaluate the mathematical expression
                setInput(eval(input).toString());
            } catch {
                setInput("Error");
            }
        } else if (value === "C") {
            // Clear the input
            setInput("");
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display">{input || "0"}</div>
            <div className="buttons">
                {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"].map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                ))}
                <button className="clear" onClick={() => handleClick("C")}>C</button>
            </div>
        </div>
    );
}

export default Calculator;
