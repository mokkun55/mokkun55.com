import { Button } from '@mantine/core'

type Props = {
  label: string
  onClick: () => void
  disabled?: boolean
}

export const BasicButton = ({ label, onClick, disabled }: Props) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      variant="outline"
      style={{
        margin: '16px',
      }}
    >
      {label}
    </Button>
  )
}
