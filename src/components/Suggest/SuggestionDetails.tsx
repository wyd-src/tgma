import { useState } from 'react'
import tw, { css } from 'twin.macro'

import SuggestionDetailsForm from './SuggestionDetailsForm'
import SuggestionDetailsLocation from './SuggestionDetailsLocation'

interface ISuggestion {
  title: string
  category: string
  description: string
}

export default function SuggestionDetails({
  suggestion = {},
  onEditFinish,
}: {
  suggestion?: ISuggestion
  onEditFinish?: () => void
}) {
  const [suggestionItem, setSuggestionItem] = useState<ISuggestion>(suggestion)
  const [nextPage, setNextPage] = useState<string>('form')
  const isEdit = Object.keys(suggestion).length > 0
  return (
    <div tw="flex flex-col ">
      {nextPage === 'form' && (
        <SuggestionDetailsForm
          suggestionItem={suggestionItem}
          setSuggestionItem={setSuggestionItem}
          setNextPage={setNextPage}
        />
      )}
      {nextPage === 'location' && (
        <SuggestionDetailsLocation
          suggestionItem={suggestionItem}
          setNextPage={setNextPage}
          isEdit={isEdit}
          onEditFinish={onEditFinish}
        />
      )}
    </div>
  )
}
