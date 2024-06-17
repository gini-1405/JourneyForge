/*
import React, { useState } from "react";
import run from "../config/gemini"; // Adjust the import path as needed
import "./Form.css";

function Form() {
  const [preferences, setPreferences] = useState("");
  const [budget, setBudget] = useState("");
  const [month, setMonth] = useState("");
  const [travelers, setTravelers] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [recentPrompt, setRecentPrompt] = useState("");

  const delayPara = (i, text) => {
    setTimeout(() => {
      setResponse((prev) => prev + text);
    }, i * 50); // Adjust the delay time as needed
  };

  const generateDestination = async () => {
    setResponse("");
    setLoading(true);
    setShowResult(true);
    const prompt = `Prepare itenary for following parameters: Preferences: ${preferences}, Budget: ${budget} USD, Month of Travel: ${month}, Number of Travelers: ${travelers}.`;

    try {
      let apiResponse = await run(prompt);
      setRecentPrompt(prompt);

      let responseArray = apiResponse.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }
      let newResponse2 = newResponse.split("*").join("</br>");
      let newResponseArray = newResponse2.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord + " ");
      }
    } catch (err) {
      setResponse("Failed to generate destination. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="preferences">Preferences:</label>
          <input
            type="text"
            id="preferences"
            name="preferences"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="Food, Beach, Sunset"
            className="form-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="budget">Budget:</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="USD"
            className="form-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="month">Month of Travel:</label>
          <select
            id="month"
            name="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="form-input hehe"
          >
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="travelers">Number of Travelers:</label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            placeholder="Number of Travelers"
            className="form-input"
          />
        </div>
        <button
          type="button"
          onClick={generateDestination}
          disabled={loading}
          className="form-button"
        >
          {loading ? "Generating..." : "Generate Destination"}
        </button>
      </div>
      <div className="res">
        {showResult && (
          <div className="response-container">
            <h2>Suggested Itinerary:</h2>
            <div className="response-content">
              <p dangerouslySetInnerHTML={{ __html: response }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
*/

import React, { useState } from "react";
import run from "../config/gemini"; // Adjust the import path as needed
import "./Form.css";

function Form() {
  const [preferences, setPreferences] = useState("");
  const [budget, setBudget] = useState("");
  const [month, setMonth] = useState("");
  const [travelers, setTravelers] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(""); // New state for number of days
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [recentPrompt, setRecentPrompt] = useState("");

  const delayPara = (i, text) => {
    setTimeout(() => {
      setResponse((prev) => prev + text);
    }, i * 50); // Adjust the delay time as needed
  };

  const generateDestination = async () => {
    setResponse("");
    setLoading(true);
    setShowResult(true);

    // Construct prompt including number of days
    const prompt = `Prepare itinerary for following parameters: Preferences: ${preferences}, Budget: ${budget} USD, Month of Travel: ${month}, Number of Travelers: ${travelers}, Number of ${numberOfDays} days. Provide a nice itenary for these given parameters.`;

    try {
      let apiResponse = await run(prompt);
      setRecentPrompt(prompt);

      let responseArray = apiResponse.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }
      let newResponse2 = newResponse.split("*").join("</br>");
      let newResponseArray = newResponse2.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord + " ");
      }
    } catch (err) {
      setResponse("Failed to generate destination. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="preferences">Preferences:</label>
          <input
            type="text"
            id="preferences"
            name="preferences"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="Country , City , or any other travel related preferences"
            className="form-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="budget">Budget:</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="USD"
            className="form-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="month">Month of Travel:</label>
          <select
            id="month"
            name="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="form-input hehe"
          >
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="travelers">Number of Travelers:</label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            placeholder="Number of Travelers"
            className="form-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="days">Number of Days</label>
          <input
            type="number"
            id="days"
            name="days"
            value={numberOfDays}
            onChange={(e) => setNumberOfDays(e.target.value)}
            placeholder="Number of Days"
            className="form-input"
          />
        </div>
        <button
          type="button"
          onClick={generateDestination}
          disabled={loading}
          className="form-button"
        >
          {loading ? "Generating..." : "Generate Destination"}
        </button>
      </div>
      <div className="res">
        {showResult && (
          <div className="response-container">
            <h2>Suggested Itinerary:</h2>
            <div className="response-content">
              <p dangerouslySetInnerHTML={{ __html: response }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
