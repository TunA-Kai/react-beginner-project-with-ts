interface LinkIn {
  label: string
  icon: JSX.Element
  url: string
}

export interface SubLink {
  page: string
  links: LinkIn[]
}
