import { Sun, Moon } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
