export interface LinkIn {
  label: string
  icon: JSX.Element
  url: string
}

export interface SubLinkIn {
  page: string
  links: LinkIn[]
}
