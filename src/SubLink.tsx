import { LinkIn } from './Interface'

function SubLink({ link }: { link: LinkIn }) {
  const { label, icon, url } = link
  return (
    <a href={url} key={Math.random() * Math.pow(10, 6)}>
      {icon}
      {label}
    </a>
  )
}

export default SubLink
