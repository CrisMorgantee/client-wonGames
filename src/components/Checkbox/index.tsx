import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  const onChange = () => {
    const status = !checked
    setChecked(status)

    onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        name={labelFor}
        id={labelFor}
        onChange={onChange}
        checked={checked}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
