import React from 'react'

interface Props {
  className?: string
}

const Check: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 12.5455L9 18L20 6" />
    </svg>
  )
}

export default Check
