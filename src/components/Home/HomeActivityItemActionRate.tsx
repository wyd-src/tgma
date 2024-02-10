import React, { SetStateAction, useCallback, useRef, useState } from 'react'
import { CheckIcon, StarIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import { IActivity } from '~/types/activity'
import { useStore } from '~/stores'
import { observer } from 'mobx-react-lite'
import { updateVote } from '~/services/api/profile'
import { CSSTransition } from 'react-transition-group'

const ActionRate = observer(function ActionRate({ activityId }: { activityId: string }) {
  const { user } = useStore()
  const [showRating, setShowRating] = useState<boolean>(false)
  const [rate, setRate] = useState<number>(-1)
  const rates = [false, false, false, false, false]
  const nodeRef = useRef(null)

  const handleRate = useCallback(
    async (rate: number) => {
      await updateVote({ tgData: user.queryId, activityId, rate }).then(
        (res: { data: SetStateAction<IActivity> }) => {
          if (res) {
            setRate(rate)
            setShowRating(false)
          }
        }
      )
    },
    [rate]
  )
  return (
    <div tw="flex gap-2.5 items-center">
      {!showRating && (
        <button
          tw="rounded-[10px] w-[40px] h-[40px] flex items-center justify-center"
          css={[rate > 1 ? tw`bg-button-color` : tw`bg-link-color-5`]}
          onClick={() => setShowRating(true)}
        >
          <CheckIcon css={[rate > 1 ? tw`stroke-button-text-color` : tw`stroke-link-color`]} />
        </button>
      )}

      <CSSTransition
        in={showRating}
        nodeRef={nodeRef}
        timeout={500}
        classNames="horizental"
        umountOnEnter={true}
        unmountOnExit={true}
      >
        <div ref={nodeRef} tw="flex items-center" css={[!showRating && tw`hidden`]}>
          {rates.map((x: boolean, index: number) => (
            <span
              key={index}
              onClick={() => {
                handleRate(index + 1)
              }}
            >
              <StarIcon
                tw="fill-secondary-bg-color h-[30px] w-[30px]"
                css={[rate >= index + 1 && tw`fill-rate`]}
              />
            </span>
          ))}
        </div>
      </CSSTransition>
    </div>
  )
})

export default ActionRate
