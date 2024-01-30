import { useState } from 'react'
import tw, { css } from 'twin.macro'

import SuggestionDetailsForm from './SuggestionDetailsForm'
import SuggestionDetailsLocation from './SuggestionDetailsLocation'

interface ISuggestion {
  title: string
  category: string
  description: string
}

export default function SuggestionDetails({ suggestion = {} }: { suggestion?: ISuggestion }) {
  const [suggestionItem, setSuggestionItem] = useState<ISuggestion>(suggestion)
  const [nextPage, setNextPage] = useState<string>('form')
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
        <SuggestionDetailsLocation suggestionItem={suggestionItem} setNextPage={setNextPage} />
      )}
    </div>
  )
}
