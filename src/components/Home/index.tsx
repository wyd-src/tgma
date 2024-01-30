import tw from 'twin.macro'
import HomeActivity from './HomeActivity'
import HomeNews from './HomeNews'
export default function Home() {
  return (
    <div tw="flex flex-col">
      <HomeActivity />
      <span tw="bg-secondary-bg-color h-[6px] w-full"></span>
      <HomeNews />
    </div>
  )
}
