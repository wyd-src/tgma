import React from 'react'

interface Props {
  className?: string
}

const Refresh: React.FC<Props> = ({ className }) => {
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
        d="M19 12C19 12.943 18.8171 13.8432 18.485 14.6667C18.1503 15.4968 17.6638 16.2491 17.0602 16.8889C16.4774 17.5066 15.7853 18.0195 15.0151 18.3962C14.0789 18.8542 13.0272 19.1111 11.9157 19.1111C10.8042 19.1111 9.75248 18.8542 8.8163 18.3962C8.04603 18.0195 7.35397 17.5066 6.77114 16.8889M6.77114 16.8889L9.25906 16M6.77114 16.8889L7.04522 20M17.2289 7.11111C16.646 6.49337 15.954 5.98054 15.1837 5.60376C14.2475 5.14583 13.1958 4.88889 12.0843 4.88889C10.9728 4.88889 9.92112 5.14583 8.98493 5.60376C8.21466 5.98054 7.5226 6.49337 6.93977 7.11111C6.33617 7.75087 5.84974 8.50315 5.51496 9.33333C5.18287 10.1568 5 11.057 5 12M17.2289 7.11111L14.7409 8M17.2289 7.11111L16.9548 4"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Refresh
