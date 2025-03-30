import { Link } from 'react-router'
import { BasicButton } from '../BasicButton'

type Props = {
  label: string
  disabled?: boolean
  url: string
}

export const LinkButton = ({ label, disabled, url }: Props) => {
  return (
    <Link to={url}>
      <BasicButton label={label} disabled={disabled} onClick={() => {}} />
    </Link>
  )
}
