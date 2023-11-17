import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../assets/logo.svg'
import { useI18n } from '../locales'
export const Home: FC = (props) => {
  const t = useI18n()
  return (
    <div className="flex items-center justify-center h-[calc(100vh-157px-64px)]">
      <div className="flex items-center flex-col">
        <div>
          <Image src={Logo.src} width={Logo.width} height={Logo.height} alt="logo"></Image>
        </div>
        {/* <div></div> */}
        <div className="font-extrabold text-[max(48px,min(5vw,76px))]">@icestack/ui</div>
        <div className="font-extrabold text-2xl mb-10">{t('home.motto')}</div>
        <div className="space-x-6">
          <Link className="btn btn-primary outline-none" href="docs/introduction">
            {t('home.startBtnText')}
          </Link>
          <Link className="btn btn-success outline-none" href="components/overview">
            {t('home.componentsBtnText')}
          </Link>
        </div>
      </div>
    </div>
  )
}
