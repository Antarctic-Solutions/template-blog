import Link from './Link'
import MobileNav from './MobileNav'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'

export default function Header() {
  return (
    <header className="poppins flex items-center justify-between py-[15px] px-16">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <img
                alt="logo"
                className="pointer m-[10px] h-[3rem]"
                src={'/logo.svg'}
                title="Antarctic Solutions"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="m-[10px] ml-0 pr-5 text-2xl text-main"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </header>
  )
}
