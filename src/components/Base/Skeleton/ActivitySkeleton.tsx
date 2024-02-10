import tw from 'twin.macro'
const ActivitySkeleton = ({ count }: { count: number }) =>
  Array(count)
    .fill(true)
    .map((x: boolean, index: number) => (
      <div key={index} role="status" tw="max-w-sm animate-pulse flex flex-col gap-2 ">
        <div tw="flex gap-3 items-center">
          <div tw="w-[44px] h-[44px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div tw="flex flex-col gap-2">
            <div tw="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[75px]"></div>
            <div tw="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
          </div>
        </div>
        <div tw="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div tw="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <span tw="bg-secondary-bg-color h-[1px] my-3 w-full"></span>
      </div>
    ))

export default ActivitySkeleton
