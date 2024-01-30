import React from 'react'

interface Props {
  className?: string
}

const ArrowFill: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L5 5L10 0H0Z" fill="black" />
    </svg>
  )
}

export default ArrowFill
