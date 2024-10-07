import type { CSSProperties } from "react";

type PropsType = {
  style?: CSSProperties;
};

export default function ChevronRightIcon({ style }: PropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16px"
      viewBox="0 -960 960 960"
      width="16px"
      fill="#000"
      style={style}
    >
      <title>ChevronRightIcon</title>
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
  );
}
