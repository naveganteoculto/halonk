interface HaloProps {
  size?: number;
}

export const Halo: React.FC<HaloProps> = ({ size = 100 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="fill-divine">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#FFD700" strokeWidth="8"></circle>
    </svg>
  );
};
