interface DotProps {
  active?: boolean;
}

const Dot = ({ active = false }: DotProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" fill="none">
    <rect width={8} height={8} rx={4} fill={active ? '#222222' : '#F1F1F1'} fillOpacity={1} />
  </svg>
);

export default Dot;
