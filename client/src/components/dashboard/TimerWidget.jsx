import { useState, useEffect } from "react";

import "./TimerWidget.css";

function TimerWidget() {
  const [seconds, setSeconds] =
    useState(300);

  const [running, setRunning] =
    useState(false);

  useEffect(() => {
    let timer;

    if (
      running &&
      seconds > 0
    ) {
      timer = setInterval(() => {
        setSeconds(
          (prev) => prev - 1
        );
      }, 1000);
    }

    return () =>
      clearInterval(timer);

  }, [running, seconds]);

  const formatTime = () => {
    const mins = Math.floor(
      seconds / 60
    );

    const secs =
      seconds % 60;

    return `${String(
      mins
    ).padStart(2, "0")}:${String(
      secs
    ).padStart(2, "0")}`;
  };

  return (
    <div className="timer-widget">

      <h3 className="timer-title">
        Focus Timer
      </h3>

      <div className="timer-display">
        {formatTime()}
      </div>

      <div className="timer-controls">

        <button
          className="timer-btn start"
          onClick={() =>
            setRunning(true)
          }
        >
          Start
        </button>

        <button
          className="timer-btn pause"
          onClick={() =>
            setRunning(false)
          }
        >
          Pause
        </button>

        <button
          className="timer-btn reset"
          onClick={() => {
            setRunning(false);
            setSeconds(300);
          }}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default TimerWidget;