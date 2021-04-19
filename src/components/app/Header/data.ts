interface NavLinkData {
  name: string
  to: string
}

export interface HeaderLinkData {
  link: NavLinkData
  isFixed?: boolean
  // TODO
  comparator?: (current: string) => boolean
}

interface HeaderLinkFactoryArgs {
  name: string
  to?: string
  isFixed?: boolean
  comparator?: (current: string) => boolean
}

const HeaderLinkFactory = ({
  name,
  to,
  isFixed = true,
  comparator,
}: HeaderLinkFactoryArgs): HeaderLinkData => ({
  link: {
    to: to ?? `/${name}`,
    name,
  },
  isFixed,
  comparator,
})

export const navLinks: HeaderLinkData[] = [
  HeaderLinkFactory({ name: 'feed' }),
  HeaderLinkFactory({ name: 'carpools' }),
  HeaderLinkFactory({ name: 'arrage', to: 'carpools/arrange' }),
  HeaderLinkFactory({ name: 'about' }),
]
