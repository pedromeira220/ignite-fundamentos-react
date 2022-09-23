import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

interface CheckboxProps {
  handleCheckBoxChange: () => void
}

export function Checkbox({ handleCheckBoxChange }: CheckboxProps) {
  return (
    <div>
      <CheckboxRadix.Root
        className="bg-transparent w-5 h-5 flex items-center justify-center rounded-full border-blue border-2 text-purple-dark hover:bg-blue-dark"
        onClick={() => {
          handleCheckBoxChange()
        }}
      >
        <CheckboxRadix.Indicator>
          <Check size={16} color="#ffffff" />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
    </div>
  )
}
