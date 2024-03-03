import React from 'react'

interface Props {
  className?: string
}

const Attach: React.FC<Props> = ({ className }) => {
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
        d="M10.125 7.38983V14.5763C10.125 15.6996 10.9645 16.6102 12 16.6102C13.0355 16.6102 13.875 15.6996 13.875 14.5763V7.72881C13.875 5.66946 12.336 4 10.4375 4C8.53903 4 7 5.66946 7 7.72881V14.5763C7 17.5717 9.23856 20 12 20C14.7614 20 17 17.5717 17 14.5763V7.38983"
        stroke="#2481CC"
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Attach
