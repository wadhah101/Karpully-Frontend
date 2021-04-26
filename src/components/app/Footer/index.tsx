import Link from 'next/link'
import React from 'react'
import Logo from '../../../../public/logo/logo.svg'
import { FOOTER_LINK } from '../Header/Header.data'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface Props {}

interface LinkIcon {
  href: string
  Icon: IconType
}

const FOOTER_ICONS: LinkIcon[] = [
  { href: 'https://www.google.com/q=1', Icon: FaFacebook },
  { href: 'https://www.google.com/q=2', Icon: FaInstagram },
  { href: 'https://www.google.com/q=3', Icon: FaLinkedin },
]

export const Footer: React.FC<Props> = () => {
  return (
    <div className="text-white bg-kgreen-900">
      <div className=" c-container">
        <div className="grid grid-cols-3 pt-20 ">
          <div>
            <div className="">
              <Logo height="auto" width="14rem" className="fill-current" />
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold"> Usefull Links </h3>
            <ul className="grid gap-1 text-white capitalize text-opacity-80">
              {FOOTER_LINK.map((e) => (
                <li
                  className="text-white transition-colors text-opacity-80 hover:text-opacity-100"
                  key={e.link.name}
                >
                  <Link href={e.link.to} passHref>
                    <a> {e.link.name} </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold"> Connect With Us </h3>
            <ul className="inline-grid grid-flow-col-dense gap-3 text-xl text-white capitalize text-opacity-80">
              {FOOTER_ICONS.map((e) => (
                <li
                  className="text-white transition-colors text-opacity-80 hover:text-opacity-100"
                  key={e.href}
                >
                  <a href={e.href} target="_blank" rel="noreferrer">
                    <e.Icon />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 font-semibold text-white text-opacity-80">
              <p> karpully.tech@gmail.com </p>
              <p> (+216) 91919191 </p>
            </div>
          </div>
        </div>
        <hr className="my-10 border-white border-opacity-30" />
        <div className="pb-20 text-center">
          <p className="text-white text-opacity-75 ">
            © 2021 Karpully, Inc., All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
