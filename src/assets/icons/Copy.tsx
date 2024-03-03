import React from 'react'

interface Props {
  className?: string
}

const Copy: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 17H17C18.1046 17 19 16.1046 19 15V6C19 4.89543 18.1046 4 17 4H10C8.89543 4 8 4.89543 8 6V7M7 20H14C15.1046 20 16 19.1046 16 18V9C16 7.89543 15.1046 7 14 7H7C5.89543 7 5 7.89543 5 9V18C5 19.1046 5.89543 20 7 20Z"
        stroke-width="1.2"
      />
    </svg>
  )
}

export default Copy
