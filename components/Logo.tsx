// Amapola en trazo fino, inspirada en el logo de Instagram del cliente
export function PoppyMark({ size = 34, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M32 30c-6-9-17-10-21-3-4 8 4 15 12 14" />
      <path d="M32 30c3-10 14-15 20-9 6 7 0 16-9 16" />
      <path d="M23 41c-2 8 5 14 12 12 6-2 9-9 8-16" />
      <path d="M26 24c0-8 5-13 10-12 5 1 6 8 3 13" />
      <circle cx="32" cy="32" r="4.2" />
      <path d="M30 32h4M32 30v4" />
      <path d="M36 52c2 4 3 7 8 9" />
    </svg>
  )
}

export default function Logo() {
  return (
    <span className="logo">
      <PoppyMark className="logo__mark" />
      <span className="logo__text">
        <span className="logo__name">
          giant<span>.</span>flowers
        </span>
        <small>mallorca</small>
      </span>
    </span>
  )
}
