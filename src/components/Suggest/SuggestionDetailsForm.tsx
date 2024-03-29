import { useState } from 'react'
import tw, { css } from 'twin.macro'

import './Suggestion.css'
import { ArrowFillIcon } from '~/assets/icons'
import { CATEGORIES } from '~/utils/constants'
import Arrow from '~/assets/icons/Arrow'
import { observer } from 'mobx-react-lite'
import { useStore } from '~/stores'
import lang from '~/lang/lang.json'

interface ISuggestion {
  title: string
  category: string
  description: string
  link: string
  share_tg_profile: boolean
}

const SuggestionCategory = observer(function SuggestionCategory({
  category,
  suggestionItem,
  setSuggestionItem,
}) {
  const [open, setOpen] = useState<boolean>(false)
  const { general } = useStore()
  const language = general.language
  return (
    <div tw="relative bg-bg-color z-10">
      <div
        tw="flex justify-between items-center border-secondary-bg-color border-[1.5px] w-full rounded-[6px] px-4 py-2.5 text-sm"
        css={[open && tw`rounded-b-none`]}
        onClick={() => setOpen(!open)}
      >
        <span css={[category ? tw`text-text-color` : tw`text-subtitle-text-color opacity-[0.5]`]}>
          {category ? lang[category][language] : lang.select_category[language]}
        </span>
        <ArrowFillIcon tw="fill-text-color" />
      </div>

      {open && (
        <div tw="absolute transition-all duration-200 max-h-[150px] overflow-auto flex flex-col px-4 py-2.5 bg-bg-color gap-5 border-secondary-bg-color rounded-b-[6px] border-t-0 border-[1.5px] w-full">
          {CATEGORIES.map((x) => (
            <span
              key={x}
              tw="text-sm text-text-color"
              css={[suggestionItem.category === x && tw`text-accent-text-color font-semibold`]}
              onClick={() => {
                setOpen(!open), setSuggestionItem({ ...suggestionItem, category: x })
              }}
            >
              {x.slice(0, 1).toUpperCase() + x.slice(1)}
            </span>
          ))}
        </div>
      )}
    </div>
  )
})

const SuggestionDetailsForm = observer(function SuggestionDetailsForm({
  suggestionItem,
  setSuggestionItem,
  setNextPage,
}: {
  suggestionItem: ISuggestion
  setSuggestionItem: (suggestionItem: ISuggestion) => void
  setNextPage: (nextPage: string) => void
}) {
  const { general } = useStore()
  const language = general.language
  return (
    <div tw="flex flex-col gap-3">
      <div tw="flex flex-col gap-2.5">
        <span tw="text-section-header-text-color font-semibold">{lang.new_activity[language]}</span>
        <span tw="text-text-color text-sm">{lang.new_activity_hint[language]}</span>
      </div>
      <div tw="inline-block relative w-full">
        <input
          tw="bg-bg-color border-secondary-bg-color border-[1.5px] w-full rounded-[6px] px-4 py-2.5 text-text-color transition-all duration-75 focus:(border-accent-text-color outline-none)"
          placeholder=" "
          value={suggestionItem?.title ? suggestionItem.title : ''}
          onChange={(e) => setSuggestionItem({ ...suggestionItem, title: e.target.value })}
        />
        <label tw="text-sm text-subtitle-text-color pointer-events-none absolute left-[16px] top-[12px] transition-all duration-200 ease-in [transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1)] opacity-[0.5] bg-bg-color">
          {lang.actitvity_title[language]}
        </label>
      </div>
      <SuggestionCategory
        category={suggestionItem.category}
        suggestionItem={suggestionItem}
        setSuggestionItem={setSuggestionItem}
      />
      <div tw="inline-block relative w-full">
        <input
          tw="bg-bg-color border-secondary-bg-color border-[1.5px] w-full rounded-[6px] px-4 py-2.5 text-text-color transition-all duration-75 focus:(border-accent-text-color outline-none)"
          placeholder=" "
          value={suggestionItem?.link ? suggestionItem.link : 'https://'}
          onChange={(e) =>
            setSuggestionItem({ ...suggestionItem, link: e.target.value.toLocaleLowerCase() })
          }
        />
        <label tw="text-sm text-subtitle-text-color pointer-events-none absolute left-[16px] top-[12px] transition-all duration-200 ease-in [transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1)] opacity-[0.5] bg-bg-color">
          {lang.activity_url[language]}
        </label>
      </div>
      <div tw="inline-block relative w-full ">
        <textarea
          tw="bg-bg-color border-secondary-bg-color min-h-[160px] border-[1.5px] w-full rounded-[6px] px-4 py-2.5 text-text-color transition-all duration-75 resize-none focus:(border-accent-text-color outline-none)"
          placeholder=" "
          value={suggestionItem?.description ? suggestionItem.description.slice(0, 160) : ''}
          onChange={(e) => setSuggestionItem({ ...suggestionItem, description: e.target.value })}
        />
        <label tw="text-sm text-subtitle-text-color pointer-events-none absolute left-[16px] top-[12px] transition-all duration-200 ease-in [transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1)] opacity-[0.5] bg-bg-color">
          {lang.description[language]}
        </label>
        <span tw="absolute right-[14px] bottom-[14px] text-text-color text-xs">
          {suggestionItem?.description?.slice(0, 160)?.length ?? 0} / 160
        </span>
      </div>
      <div tw="w-full flex justify-between items-center">
        <span tw="text-text-color">{lang.share_profile[language]}</span>
        <div
          tw="flex items-center w-[50px] h-[31px] rounded-full transition-all duration-100 ease-in-out"
          css={suggestionItem.share_tg_profile ? tw`bg-button-color` : tw`bg-secondary-bg-color`}
          onClick={() =>
            setSuggestionItem({
              ...suggestionItem,
              share_tg_profile: !suggestionItem.share_tg_profile,
            })
          }
        >
          <span
            tw="flex rounded-full h-[27px] w-[27px] bg-button-text-color [box-shadow: 0px 3px 1px 0px #0000000F,0px 3px 8px 0px #00000026, 0px 0px 0px 1px #0000000A;]"
            css={
              suggestionItem.share_tg_profile
                ? css`
                    transform: translateX(21px);
                    transition: transform 0.1s ease-in-out;
                  `
                : css`
                    transform: translateX(3px);
                    transition: transform 0.1s ease-in-out;
                  `
            }
          ></span>
        </div>
      </div>
      <button
        tw="relative self-end font-medium flex items-center justify-center mt-[8px] text-sm text-link-color"
        onClick={() =>
          suggestionItem?.title &&
          suggestionItem.description &&
          suggestionItem.category &&
          setNextPage('location')
        }
      >
        <span tw="bg-link-color opacity-5 w-[124px] h-[40px] rounded-[10px] "></span>
        <span tw="flex absolute w-max items-center">
          {lang.next[language]}&nbsp; <Arrow tw="stroke-link-color -rotate-90" />
        </span>
      </button>
    </div>
  )
})

export default SuggestionDetailsForm
