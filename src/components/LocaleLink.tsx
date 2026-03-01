import { Link, type LinkProps } from 'react-router-dom'
import { useI18n } from '../i18n'

type LocaleLinkProps = Omit<LinkProps, 'to'> & { to: string }

const LocaleLink = ({ to, ...props }: LocaleLinkProps) => {
  const { localePath } = useI18n()
  return <Link to={localePath(to)} {...props} />
}

export default LocaleLink
