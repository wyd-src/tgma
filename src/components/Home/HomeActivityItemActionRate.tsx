import React, { useState } from 'react'
import { CheckIcon, StarIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'

const ActionRate: React.FC = () => {
  const [showRating, setShowRating] = useState<boolean>(false)
  const [rate, setRate] = useState<number>(-1)
  const rates = [false, false, false, false, false]
  return (
    <div tw="flex gap-2.5">
      {showRating ? (
        <div tw="flex items-center">
          {rates.map((x: boolean, index: number) => (
            <span
              key={index}
              onClick={() => {
                setRate(index + 1), setShowRating(false)
              }}
            >
              <StarIcon
                tw="fill-secondary-bg-color h-[30px] w-[30px]"
                css={[rate >= index + 1 && tw`fill-rate`]}
              />
            </span>
          ))}
        </div>
      ) : (
        <button
          tw="rounded-[10px] w-[40px] h-[40px] flex items-center justify-center"
          css={[rate > 1 ? tw`bg-button-color` : tw`bg-link-color-5`]}
          onClick={() => setShowRating(true)}
        >
          <CheckIcon css={[rate > 1 ? tw`stroke-text-color` : tw`stroke-link-color`]} />
        </button>
      )}
    </div>
  )
}

export default ActionRate
