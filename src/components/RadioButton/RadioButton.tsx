import { useCallback } from 'react'

import * as Styled from './RadioButton.style'

export type Props = {
  activeIndex?: number
  options: string[]
  onChange?: (selectedIndex: number) => void
}

export const RadioButton: React.FC<Props> = (props: Props) => {
  const { activeIndex = 0, options, onChange } = props

  const handleChange = useCallback(
    (selectedIndex: number) => {
      if (onChange) onChange(selectedIndex)
    },
    [onChange],
  )

  return (
    <Styled.RadioContainer>
      {options.map((option, index) => (
        <Styled.RadioOption
          key={`${option}-${index}`}
          isActive={activeIndex === index}
          onClick={() => handleChange(index)}
        >
          {option}
        </Styled.RadioOption>
      ))}
    </Styled.RadioContainer>
  )
}
