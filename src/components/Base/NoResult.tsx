import tw from 'twin.macro'

const NoResult = function NoResult({ text }: { text: string }) {
  return (
    <span tw="flex bg-secondary-bg-color text-subtitle-text-color text-sm rounded-full py-1.5 px-3 w-max self-center">
      {text}
    </span>
  )
}
export default NoResult
