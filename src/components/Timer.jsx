import { useState, useEffect } from "react";
import "../styles/App.css";

export default function Timer() {
  const MODES = {
    pomodoro: { label: "Pomodoro", time: 25 * 60, color: "#d95550" },
    short: { label: "Short Break", time: 5 * 60, color: "#4c9195" },
    long: { label: "Long Break", time: 15 * 60, color: "#457ca3" },
  };

  const [mode, setMode] = useState("pomodoro");
  const [timeLeft, setTimeLeft] = useState(MODES.pomodoro.time);
  const [isRunning, setIsRunning] = useState(false);

  // update warna background sesuai mode
  useEffect(() => {
    document.body.style.backgroundColor = MODES[mode].color;
  }, [mode]);

  // hitung mundur
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(interval);
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartPause = () => setIsRunning(!isRunning);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(MODES[mode].time);
  };
  const handleModeChange = (newMode) => {
    setMode(newMode);
    setTimeLeft(MODES[newMode].time);
    setIsRunning(false);
  };

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div className="timer-container">
      <div className="mode-buttons">
        {Object.entries(MODES).map(([key, m]) => (
          <button
            key={key}
            className={`mode-btn ${mode === key ? "active" : ""}`}
            onClick={() => handleModeChange(key)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="time-display">
        {minutes}:{seconds}
      </div>

      <div className="timer-buttons">
        <button className="start-btn" onClick={handleStartPause}>
          {isRunning ? "PAUSE" : "START"}
        </button>
        <button className="reset-btn" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
}
