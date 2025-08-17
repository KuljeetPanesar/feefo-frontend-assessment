import React from 'react';

interface CustomStarProps {
  fill?: number; // 0 to 1
}

export default function CustomStar({ fill = 0 }: CustomStarProps) {
  const viewBox = "205 45 50 50";

  const starPath = "M245.05,48.68h-27.21c-4.61,0-8.38,3.77-8.38,8.38v28.22c0,4.61,3.77,8.38,8.38,8.38h27.21c4.61,0,8.38-3.77,8.38-8.38v-28.22c0-4.61-3.77-8.38-8.38-8.38ZM217.55,67.81c-.44-.37-.2-1.15.41-1.18l9.33-.68c.03,2.91-1.86,5.48-4.57,6.22l-5.18-4.36ZM245.28,67.88l-7.14,6.05,2.23,9.1c.14.61-.51,1.05-1.01.74l-7.95-4.94-7.95,4.94c-.51.3-1.15-.17-1.01-.74l2.23-9.1h-.03c3.59-1.35,5.82-4.97,5.55-8.79-.07-1.39-.44-2.64-1.05-3.75l1.66-4.06c.24-.58,1.01-.58,1.25,0l3.55,8.66,9.34.68c.61.03.88.81.34,1.22Z"

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      style={{ width: '4rem', height: '4rem' }}
    >
      {/* Unfilled star */}
      <rect x="200" y="40" width="60" height="60" fill="#fff" />
      <path
        d={starPath}
        fill="#e2e2e2"
      />

      {/* Filled portion clipped to percentage */}
      {fill > 0 && (
        <>
          <defs>
            <clipPath id={`clip-${fill}`}>
              <rect x="200" y="40" width={60 * fill} height="60" />
            </clipPath>
          </defs>
          <path
            d={starPath}
            fill="#FFD700"
            clipPath={`url(#clip-${fill})`}
          />
        </>
      )}
    </svg>
  );
}