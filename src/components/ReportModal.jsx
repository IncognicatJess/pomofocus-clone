import React from "react";

export default function ReportModal({ onClose }) {
  return (
    <div className="modal">
      <h2>Report (Coming Soon)</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
