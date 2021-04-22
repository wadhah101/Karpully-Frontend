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

export const HEADER_NAV_LINKS_SIGNED_OUT: HeaderLinkData[] = [
  // HeaderLinkFactory({ name: 'feed' }),
  HeaderLinkFactory({ name: 'carpools' }),
  HeaderLinkFactory({ name: 'arrange', to: '/carpools/arrange' }),
  HeaderLinkFactory({ name: 'about' }),
  HeaderLinkFactory({ name: 'contact' }),
]

export const HEADER_NAV_LINKS_SIGNED_IN: HeaderLinkData[] = [
  HeaderLinkFactory({ name: 'feed' }),
  HeaderLinkFactory({ name: 'carpools' }),
  HeaderLinkFactory({ name: 'arrange', to: '/carpools/arrange' }),
]
