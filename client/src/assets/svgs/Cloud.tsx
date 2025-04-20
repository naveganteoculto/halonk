interface CloudProps {
  width?: number;
  height?: number;
  opacity?: number;
}

export const Cloud: React.FC<CloudProps> = ({ width = 100, height = 60, opacity = 0.7 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 100 60" fill="white" opacity={opacity}>
      <path d="M10,40 Q20,20 40,30 Q50,10 70,20 Q90,10 90,40 Q100,50 80,50 Q70,70 50,50 Q30,70 20,50 Q0,50 10,40 Z"></path>
    </svg>
  );
};
