import React from 'react'

interface Props {
  className?: string
}

const Wellness: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0208 10.6667H12.1802C12.3887 10.8663 12.5538 11.1038 12.6659 11.3654C12.778 11.627 12.835 11.9075 12.8333 12.1905C12.8328 12.5945 12.6658 12.9818 12.369 13.2674C12.0722 13.5531 11.6698 13.7138 11.25 13.7143H7.6875C7.58252 13.7143 7.48184 13.6741 7.4076 13.6027C7.33337 13.5313 7.29167 13.4344 7.29167 13.3333C7.29167 13.2323 7.33337 13.1354 7.4076 13.064C7.48184 12.9925 7.58252 12.9524 7.6875 12.9524H11.25C11.4599 12.9522 11.6612 12.8719 11.8096 12.7291C11.9581 12.5862 12.0415 12.3925 12.0417 12.1905C12.0417 11.2076 11.1982 10.6667 9.66667 10.6667H5.3125C4.78774 10.6671 4.28462 10.868 3.91356 11.2251C3.5425 11.5822 3.33382 12.0664 3.33333 12.5714V14.0952C3.33382 14.6003 3.5425 15.0845 3.91356 15.4416C4.28462 15.7987 4.78774 15.9995 5.3125 16H14.0208C14.5456 15.9995 15.0487 15.7987 15.4198 15.4416C15.7908 15.0845 15.9995 14.6003 16 14.0952V12.5714C15.9995 12.0664 15.7908 11.5822 15.4198 11.2251C15.0487 10.868 14.5456 10.6671 14.0208 10.6667Z"
        fill="white"
      />
      <path
        d="M2.5 12.4C2.50094 11.6577 2.80853 10.946 3.35531 10.4211C3.90209 9.89619 4.64341 9.6009 5.41667 9.6H6.66667V5.2C6.6667 5.14746 6.65594 5.09543 6.63502 5.04689C6.61409 4.99834 6.5834 4.95424 6.5447 4.91709C6.506 4.87994 6.46006 4.85047 6.40949 4.83038C6.35892 4.81029 6.30473 4.79997 6.25 4.8H3.75V3.94316C4.10682 3.85492 4.42309 3.65558 4.64929 3.37634C4.87548 3.0971 4.99882 2.75373 5 2.4C5 1.68438 4.12842 0 3.33333 0C2.53825 0 1.66667 1.68438 1.66667 2.4C1.66785 2.75373 1.79119 3.0971 2.01738 3.37634C2.24357 3.65558 2.55984 3.85492 2.91667 3.94316V4.8H0.416667C0.36194 4.79997 0.307744 4.81029 0.257176 4.83038C0.206609 4.85047 0.160663 4.87994 0.121966 4.91709C0.0832681 4.95424 0.0525778 4.99834 0.0316499 5.04689C0.0107221 5.09543 -3.27905e-05 5.14746 7.50976e-08 5.2V15.6C-3.27905e-05 15.6525 0.0107221 15.7046 0.0316499 15.7531C0.0525778 15.8017 0.0832681 15.8458 0.121966 15.8829C0.160663 15.9201 0.206609 15.9495 0.257176 15.9696C0.307744 15.9897 0.36194 16 0.416667 16H3.38192C3.10303 15.7402 2.88128 15.4294 2.72979 15.0858C2.57831 14.7423 2.50017 14.373 2.5 14V12.4Z"
        fill="white"
      />
      <path
        d="M10.0833 9.33333H10.9167C11.0272 9.33333 11.1332 9.28651 11.2113 9.20316C11.2894 9.11981 11.3333 9.00676 11.3333 8.88889C11.3333 8.29952 11.1138 7.73429 10.7231 7.31754C10.3324 6.90079 9.80254 6.66667 9.25 6.66667H8.41667C8.30616 6.66667 8.20018 6.71349 8.12204 6.79684C8.0439 6.88019 8 6.99324 8 7.11111C8 7.40294 8.05389 7.69191 8.15858 7.96152C8.26328 8.23113 8.41674 8.47611 8.61019 8.68246C8.80365 8.88881 9.03331 9.0525 9.28608 9.16418C9.53884 9.27585 9.80975 9.33333 10.0833 9.33333Z"
        fill="white"
      />
      <path
        d="M11.6666 7.33333C12.0441 6.69054 12.6347 6.20399 13.3333 5.96018C13.1851 5.5088 12.9362 5.09797 12.6059 4.75951L11.9797 4.12601C11.895 4.04509 11.783 4 11.6666 4C11.5501 4 11.4381 4.04509 11.3535 4.12601L10.7278 4.75951C10.3973 5.09799 10.1483 5.50886 10 5.96032C10.6986 6.20412 11.2891 6.69062 11.6666 7.33333Z"
        fill="white"
      />
      <path
        d="M12 8.88889C12 9.00676 12.0439 9.11981 12.122 9.20316C12.2002 9.28651 12.3062 9.33333 12.4167 9.33333H13.25C13.5236 9.33333 13.7945 9.27585 14.0473 9.16418C14.3 9.0525 14.5297 8.88881 14.7231 8.68246C14.9166 8.47611 15.0701 8.23113 15.1747 7.96152C15.2794 7.69191 15.3333 7.40294 15.3333 7.11111C15.3333 6.99324 15.2894 6.88019 15.2113 6.79684C15.1332 6.71349 15.0272 6.66667 14.9167 6.66667H14.0833C13.5308 6.66667 13.0009 6.90079 12.6102 7.31754C12.2195 7.73429 12 8.29952 12 8.88889Z"
        fill="white"
      />
    </svg>
  )
}

export default Wellness