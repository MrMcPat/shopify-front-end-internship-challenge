import React, { useState } from "react";

function Prompt({ handleResponse }) {
  const [input, setInput] = useState("");
  const [slider, setSlider] = useState("5");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length < 3) {
      alert("Please enter a prompt with at least 3 characters.");
    } else {
      fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          prompt: input,
          temperature: parseInt(slider) / 10,
          max_tokens: 64,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => handleResponse(input, data));
    }
  }

  return (
    <div className="container">
      <h1>Fun with AI</h1>
      <h3>Enter prompt</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          cols="50"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <br />
        <label for="creativity">
          Creative response slider! <br />
          {(parseInt(slider) / 10) * 100} % creativity
        </label>
        <br />
        <input
          type="range"
          id="creativity"
          min="0"
          max="10"
          value={slider}
          onChange={(e) => setSlider(e.target.value)}
        />
        <br />
        <button type="submit" className="submit-button">
          submit
        </button>
      </form>
    </div>
  );
}

export default Prompt;
