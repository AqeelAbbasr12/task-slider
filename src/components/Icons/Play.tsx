type PlayIconProps = {
  size?: number;
  className?: string;
};

export default function PlayIcon({ size = 24, className }: PlayIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 5.6527C4.5 4.22656 6.029 3.32251 7.2786 4.00979L18.8192 10.3571C20.1144 11.0695 20.1144 12.9306 18.8192 13.6429L7.2786 19.9902C6.029 20.6775 4.5 19.7735 4.5 18.3473V5.6527Z"
        fill="currentColor"
      />
    </svg>
  );
}