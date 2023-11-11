import * as React from "react";
import { useTheme } from "next-themes";

const Logo = React.forwardRef(({ width = 34, ...props }, ref) => {
    const { resolvedTheme: theme } = useTheme();
    const color = theme === 'dark' ? '#fff' : '#292525'

    return (
      <svg ref={ ref } { ...props } width={ width } viewBox="0 0 141 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M68.45 33.85V0H140.18C140.26 1.83 140.41 3.59 140.41 5.36C140.43 26.68 140.49 48 140.42 69.32C140.31 106.01 112.12 136.88 76.36 139.54C39.24 142.3 6.88 117.01 0.92 80.51C0.37 77.12 0.31 73.65 0 69.9H33.73C34.32 72.86 34.77 75.95 35.57 78.94C39.98 95.61 55.11 106.47 72.56 105.59C89.21 104.75 103.96 91.8 105.64 74.93C106.89 62.39 106.22 49.66 106.49 37.01C106.56 33.66 104.41 33.84 102.16 33.84C92.83 33.86 83.51 33.85 74.18 33.86C72.37 33.86 70.56 33.86 68.46 33.86L68.45 33.85Z"
          fill={ color }
        />
        <path d="M67.8899 68.4704H34.4199V34.9004H67.8899V68.4804V68.4704Z" fill={ color }/>
      </svg>
    );
  }
)
export default Logo;
