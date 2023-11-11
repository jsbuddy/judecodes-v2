import React from 'react';
import { Button } from "@nextui-org/react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-6">
      {
        theme === 'dark' ? (
          <Button
            variant="flat"
            isIconOnly
            radius="lg"
            onClick={ () => setTheme('light') }
            aria-label="Enable light mode"
          >
            <FiSun size="20"/>
          </Button>
        ) : (
          <Button
            variant="flat"
            isIconOnly
            radius="lg"
            onClick={ () => setTheme('dark') }
            aria-label="Enable dark mode"
          >
            <FiMoon size="20"/>
          </Button>
        )
      }
    </div>
  );
};

export default ThemeSwitcher;
