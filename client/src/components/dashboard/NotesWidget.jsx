import {
  useState,
} from "react";

import "./NotesWidget.css";

function NotesWidget() {

  const [
    notes,
    setNotes,
  ] = useState(
    localStorage.getItem(
      "notes"
    ) || ""
  );

  const handleChange = (
    e
  ) => {

    setNotes(
      e.target.value
    );

    localStorage.setItem(
      "notes",
      e.target.value
    );
  };

  return (
    <div className="notes-widget">

      <h3>
        Notes
      </h3>

      <textarea
        value={notes}
        onChange={
          handleChange
        }
      />

    </div>
  );
}

export default NotesWidget;