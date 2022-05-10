import React, { useState } from "react";
import Prompt from "./components/Prompt";
import Response from "./components/Response";

function App() {
  const [inputResponse, setInputResponse] = useState([]);

  function handleResponse(input, data) {
    setInputResponse([
      ...inputResponse,
      { input: input, response: data.choices[0].text },
    ]);
  }

  return (
    <div>
      <Prompt handleResponse={handleResponse} />
      <div>
        <h3>Responses</h3>
        {inputResponse.map((response, index) => (
          <Response key={index} response={response} />
        ))}
      </div>
    </div>
  );
}

export default App;
