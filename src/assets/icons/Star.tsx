import React from 'react'

interface Props {
  className?: string
}

const Star: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path d="M5.78709 10.6735L5.15359 14.5629C5.10309 14.8719 5.43259 15.1038 5.70509 14.952L9.00012 13.1283L12.2951 14.9525C12.5651 15.1028 12.8976 14.8754 12.8466 14.5634L12.2131 10.674L14.8932 7.92279C15.1057 7.70495 14.9837 7.33539 14.6817 7.28932L10.9926 6.72495L9.33912 3.19755C9.21562 2.93415 8.78412 2.93415 8.66061 3.19755L7.0076 6.72445L3.31858 7.28881C3.01557 7.33539 2.89457 7.70445 3.10708 7.92228L5.78709 10.6735Z" />
    </svg>
  )
}

export default Star
