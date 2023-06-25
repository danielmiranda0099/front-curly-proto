export function CarIcon({ color = "white", size = 32 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="100%"
      viewBox="0 0 24 24"
      style={{ fill: color }}
    >
      <circle cx="10.5" cy="19.5" r="1.5"></circle>
      <circle cx="17.5" cy="19.5" r="1.5"></circle>
      <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
    </svg>
  );
}

export function SettingIcon({ color = "white", size = 32 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="100%"
      viewBox="0 0 24 24"
      style={{ fill: color }}
    >
      <path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path>
    </svg>
  );
}

export function ChartIcon({ color = "white", size = 32 }) {
  return (
    <svg width={size} height="100%" viewBox="0 0 24 24" style={{ fill: color }}>
      <path d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3z"></path>
      <path d="M15.293 14.707a.999.999 0 0 0 1.414 0l5-5-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5 1.414 1.414L13 12.414l2.293 2.293z"></path>
    </svg>
  );
}

export function ArrowIcon({ color = "white", size = 32, rotate = 0 }) {
  return (
    <svg
      width={size}
      height="100%"
      viewBox="0 0 24 24"
      style={{ fill: color, transform: `rotate(${rotate}deg)` }}
    >
      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
    </svg>
  );
}

export function DashboardIcon({ color = "white", size = 32, rotate = 0 }) {
  return (
    <svg
      width={size}
      height="100%"
      viewBox="0 0 24 24"
      style={{ fill: color, transform: `rotate(${rotate}deg)` }}
    >
      <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
    </svg>
  );
}

export function PlusIcon({ color = "white", size = 32, rotate = 0 }) {
  return (
    <svg
      width={size}
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: color, transform: `rotate(${rotate}deg)` }}
    >
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
    </svg>
  );
}

export function CloseIcon({ color = "white", size = 32, rotate = 0 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{  width: size, fill: color, transform: `rotate(${rotate}deg)` }}
    >
      <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
    </svg>
  );
}

export function TrashIcon({ color = "white", size = 32, rotate = 0 }) {
  return (
    <svg
      width={size}
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: color, transform: `rotate(${rotate}deg)` }}
    >
      <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
    </svg>
  );
}

export function EditIcon({ color = "white", size = 32, rotate = 0 }) {
  return (
    <svg
      width={size}
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: color, transform: `rotate(${rotate}deg)` }}
    >
      <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
    </svg>
  );
}
