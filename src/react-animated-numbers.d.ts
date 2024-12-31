declare module "react-animated-numbers" {
  import React from "react";

  interface AnimatedNumbersProps {
    animateToNumber: number;
    locale?: string;
    configs?: (
      value: number,
      index: number
    ) => {
      mass: number;
      tension: number;
      friction: number;
    };
    includeComma?: boolean;
    className?: string;
  }

  const AnimatedNumbers: React.FC<AnimatedNumbersProps>;

  export default AnimatedNumbers;
}
