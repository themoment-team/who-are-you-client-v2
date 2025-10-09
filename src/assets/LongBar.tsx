const LongBar = () => (
  // increased each segment by 1, and the middle segment by +1 extra (total +2)
  <svg xmlns="http://www.w3.org/2000/svg" width={2} height={133} viewBox="0 0 2 133" fill="none">
    <rect width={2} height={44} fill="#DADE00" fillOpacity={1} />
    <rect y={44} width={2} height={45} fill="#7BD8F7" fillOpacity={1} />
    <rect y={89} width={2} height={44} fill="#5385D6" fillOpacity={1} />
  </svg>
);

export default LongBar;
