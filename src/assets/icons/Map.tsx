import React from 'react'

interface Props {
  className?: string
}

const Map: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 0C3.8 0 0 3.22 0 8.2C0 11.52 2.67 15.45 8 20C13.33 15.45 16 11.52 16 8.2C16 3.22 12.2 0 8 0ZM8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10Z" />
    </svg>
  )
}

export default Map
