"use client";

import { Input } from "antd";
import { useState } from "react";


export default function Home() {


  const prompt = "give me a task breakdown of my game tech class"

  const [output, setOutput] = useState('This is a nextjs project.');

  const generateText = async () => {
    try {
        // use the fetch method to send an http request to /api/generate endpoint
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify({body: prompt})
      });

    // Waits for the response to be converted to JSON format and stores it in the data variable
      const data = await response.json();
      
      //  If successful, updates the output state with the output field from the response data
      if(response.ok) {
        setOutput(data.output)
      } else {
        setOutput(data.error)
      }

    // Catches any errors that occur during the fetch request
    } catch(error) {
      console.error('Error:', error)
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        What is due at Midnight?
      </div>
      <Input className="w-1/2" />
      <p onClick={generateText}>{output}</p>
    </div>
  );
}
