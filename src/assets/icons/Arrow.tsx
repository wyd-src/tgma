import React from 'react'

interface Props {
  className?: string
}

const Arrow: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 1L6 7L1 1" />
    </svg>
  )
}

export default Arrow
