import tw from 'twin.macro'
import SuggestionDetails from './SuggestionDetails'
export default function Suggest() {
  return (
    <div tw="flex flex-col p-4 gap-2.5">
      <SuggestionDetails />
    </div>
  )
}
