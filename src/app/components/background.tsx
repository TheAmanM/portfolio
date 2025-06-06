"use client";

import { useEffect, useState, useMemo } from "react";
import { createNoise2D } from "simplex-noise";

type GridProps = {
  cellSize: number;
};

export default function GridBackground({ cellSize }: GridProps) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      setDimensions({ width, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    window.addEventListener("scroll", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("scroll", updateSize);
    };
  }, []);

  const noise2D = useMemo(() => createNoise2D(), []);
  const { width, height } = dimensions;
  const rows = Math.ceil(height / cellSize);
  const cols = Math.ceil(width / cellSize);

  const baseHue = 240;
  const baseSaturation = 33;
  const baseLightness = 11;

  const cells = [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const scale = 0.1;
      const noiseVal = noise2D(3 * x * scale, 3 * y * scale);
      const normalized = (noiseVal + 1) / 2;

      const hue = baseHue + normalized * 4 - 2;
      const saturation = baseSaturation + normalized * 10 - 5;
      const lightness = baseLightness + normalized * 6 - 2;

      const fill = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

      cells.push(
        <rect
          key={`${x}-${y}`}
          x={x * cellSize}
          y={y * cellSize}
          width={cellSize}
          height={cellSize}
          fill={fill}
          stroke="#070810"
          strokeOpacity={0.1}
          strokeWidth={1}
        />
      );
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 -z-10 w-full"
      style={{
        height: `${height}px`,
        pointerEvents: "none", // ensures it doesn’t interfere with content
      }}
    >
      {cells}
    </svg>
  );
}
