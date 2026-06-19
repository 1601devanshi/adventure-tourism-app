export default function RouteLine({ selected }) {
  const startX = 250;
  const startY = 300;

  const endX = selected.x * 5;
  const endY = selected.y * 6.2;

  const midX = (startX + endX) / 2;
  const midY = endY - 70;

  const path = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;

  return (
    <>
      <path
        d={path}
        fill="none"
        stroke="rgba(239,68,68,0.2)"
        strokeWidth="6"
      />

      <path
        d={path}
        fill="none"
        stroke="#ef4444"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="9 9"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-36"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </>
  );
}