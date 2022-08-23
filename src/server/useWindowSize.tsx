import { useEffect, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      // if (
      //   (windowSize.width !== undefined &&
      //     Math.abs(windowSize.width - window.innerWidth) > 10) ||
      //   windowSize.width === undefined ||
      //   windowSize.height === undefined
      // ) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.height, windowSize.width]);
  return windowSize;
};
