import React, { useState } from 'react'
import { BookmarkIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'

const ActionBookmark: React.FC = () => {
  const [bookmark, setBookmark] = useState<boolean>(false)
  return (
    <button
      tw="rounded-[10px] w-[40px] h-[40px] flex items-center justify-center"
      css={[bookmark ? tw`bg-button-color` : tw`bg-link-color-5`]}
      onClick={() => setBookmark(!bookmark)}
    >
      <BookmarkIcon css={[bookmark ? tw`stroke-text-color` : tw`stroke-link-color`]} />
    </button>
  )
}

export default ActionBookmark
