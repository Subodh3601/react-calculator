import React, { useState,useEffect } from 'react';
import './Body.css';
import Button from '../components/Button';

const Body = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setEnteredValue("");
    } else if (value === "=") {
      try {
        const result = eval(enteredValue); // Using eval to evaluate the expression
        setEnteredValue(`Ans : ${result.toFixed(2)}`);
      } catch (error) {
        setEnteredValue("Error");
      }
    } else if (value === "+/-") { 
      setEnteredValue((prevValue) => (-prevValue));
    } else if (value=== "←") { 
      setEnteredValue(prevValue=> prevValue.slice(0,-1))
    } else {
      setEnteredValue(prevValue => prevValue + value);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      // if (event.key === "Backspace") {
      //   setEnteredValue(prevValue => prevValue.slice(0, -1));
      // }
      switch (event.key) {
        case "Backspace":
          setEnteredValue(prevValue => prevValue.slice(0, -1));
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
        case "+":
        case "-":
        case "*":
        case "/":  
          setEnteredValue(prevValue => prevValue + event.key);
          break;
        case "Enter":
          if (enteredValue) {
            const result = eval(enteredValue); 
        setEnteredValue(`Ans : ${result.toFixed(2)}`);
          } else {
            break
          }
          
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [enteredValue]);

  return (
    <div className='calculator-body'>
      <div className='calculator-screen'>
        {enteredValue}
      </div>
      <Button value="AC" color='hsl(163, 56%, 56%)' handleClick={handleClick} />
      <Button value="←" color='hsl(163, 56%, 56%)' handleClick={handleClick} />
      <Button value="+/-" color='hsl(163, 56%, 56%)' handleClick={handleClick} />
      
      <Button value="/" color='hsl(163, 56%, 56%)' handleClick={handleClick} />
      <Button value="7" handleClick={handleClick} />
      <Button value="8" handleClick={handleClick} />
      <Button value="9" handleClick={handleClick} />
      <Button value="*" color='hsl(163, 56%, 56%)' handleClick={handleClick} />
      <Button value="4" handleClick={handleClick} />
      <Button value="5" handleClick={handleClick} />
      <Button value="6" handleClick={handleClick} />
      <Button value="+" color='hsl(163, 56%, 56%)' handleClick={handleClick} />
      <Button value="1" handleClick={handleClick} />
      <Button value="2" handleClick={handleClick} />
      <Button value="3" handleClick={handleClick} />
      <Button value="-" color='hsl(163, 56%, 56%)' handleClick={handleClick} />
      <Button value="0" handleClick={handleClick} />
      <Button value="." color='hsl(163, 56%, 56%)' handleClick={handleClick} />
      <Button value="%" color='hsl(163, 56%, 56%)' handleClick={handleClick} />
      <Button value="=" color='hsl(163, 56%, 56%)' handleClick={handleClick} />
    </div>
  );
}

export default Body;
