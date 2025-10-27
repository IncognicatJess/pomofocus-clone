import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
import TaskList from "./components/TaskList";
import SettingsModal from "./components/SettingsModal";
import ReportModal from "./components/ReportModal";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [theme, setTheme] = useState("red");

  // ✅ Pindahkan useEffect ke dalam fungsi
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className={`app theme-${theme}`}>
      <Header
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenReport={() => setIsReportOpen(true)}
      />
      <main>
        <Timer />
        <TaskList />
      </main>
      {isSettingsOpen && (
        <SettingsModal
          theme={theme}
          setTheme={setTheme}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
      {isReportOpen && <ReportModal onClose={() => setIsReportOpen(false)} />}
    </div>
  );
}

export default App;
