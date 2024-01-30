import React from 'react'

interface Props {
  className?: string
}

const Profile: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 12C14.2091 12 16 10.2092 16 8.00001C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8.00001C8 10.2092 9.79086 12 12 12Z"
        fill="var(--button-text-color)"
      />
      <path
        className="path"
        d="M13.9231 13H10.0769C7.84615 13 6 15.1001 6 17.6376C6 18.2501 6.23077 18.7751 6.69231 19.0376C7.38461 19.4751 8.92308 20 12 20C15.077 20 16.6154 19.4751 17.3077 19.0376C17.6923 18.7751 18 18.2501 18 17.6376C18 15.0126 16.1539 13 13.9231 13Z"
        fill="var(--button-text-color)"
      />
    </svg>
  )
}

export default Profile
