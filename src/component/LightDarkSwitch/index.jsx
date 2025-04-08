import useLightDarkLocalStorage from "./useLightDarkLocalStorage.jsx";
import "./style.css";
import { useEffect } from "react";
function LightDarkSwitch() {
  const [theme, setTheme] = useLightDarkLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    console.log("theme", theme);
  }, [theme]);
  return (
    <div className="light-dark-switch" data-theme={theme}>
      <p>Change Theme</p>
      <button onClick={handleToggleTheme}>Switch Theme</button>
    </div>
  );
}

export default LightDarkSwitch;
