import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className="
          relative flex items-center p-1 rounded-full 
          bg-muted/50 dark:bg-muted/20 border-2 border-primary/30
          w-[110px] h-10 transition-all duration-300 hover:border-primary
        "
        aria-label="Toggle theme"
      >
        {/* Sliding Blue Accent */}
        <div 
          className={`
            absolute h-8 w-[50px] rounded-full bg-primary shadow-md
            transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${isDark ? 'translate-x-0' : 'translate-x-[50px]'}
          `}
        />

        {/* LEFT SIDE: 
          - Dark Mode Active: Shows MOON Icon (on blue).
          - Light Mode Active: Shows "LIGHT MODE" stacked.
        */}
        <div className={`
          relative z-10 flex-1 flex flex-col items-center justify-center leading-none
          text-[8px] font-black tracking-tighter transition-colors duration-500
          ${isDark ? 'text-primary-foreground' : 'text-muted-foreground'}
        `}>
          {isDark ? (
            <Moon size={14} className="fill-current" />
          ) : (
            <>
              <span>LIGHT</span>
              <span>MODE</span>
            </>
          )}
        </div>

        {/* RIGHT SIDE: 
          - Light Mode Active: Shows SUN Icon (on blue).
          - Dark Mode Active: Shows "DARK MODE" stacked.
        */}
        <div className={`
          relative z-10 flex-1 flex flex-col items-center justify-center leading-none
          text-[8px] font-black tracking-tighter transition-colors duration-500
          ${!isDark ? 'text-primary-foreground' : 'text-muted-foreground'}
        `}>
          {!isDark ? (
            <Sun size={14} className="fill-current" />
          ) : (
            <>
              <span>DARK</span>
              <span>MODE</span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};