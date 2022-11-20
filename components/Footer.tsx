import Link from './Link'

export default function Footer() {
  return (
    <footer id="footer" className="center poppins mt-6 bg-main text-white">
      <div className="center py-[8vh] -lg:flex-col">
        <div>
          <p className="my-[10px] text-2xl -sm:text-lg">
            © {new Date().getFullYear()} Antarctic Solutions Inc.
          </p>
          <hr className=" my-[8px]" />
          <ul>
            <li title="Home" className="float-left m-[10px] ml-0 text-2xl">
              <Link
                className="transition-all hover:opacity-70"
                href="https://www.antarcticsolutions.ca/"
              >
                Home
              </Link>
            </li>
            <li title="Contact" className="float-left m-[10px] text-2xl sm:ml-6 -sm:text-lg ">
              <Link
                className="transition-all hover:opacity-70"
                href="https://www.antarcticsolutions.ca/contact"
              >
                Contact
              </Link>
            </li>
            <li title="Team" className="float-left m-[10px] text-2xl sm:ml-6 -sm:text-lg ">
              <Link
                className="transition-all hover:opacity-70"
                href="https://www.antarcticsolutions.ca/showcase"
              >
                Showcase
              </Link>
            </li>
            <li title="Blog" className="float-left m-[10px] text-2xl sm:ml-6 -sm:text-lg ">
              <Link className="transition-all hover:opacity-70" href="/">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Link href="https://antarcticsolutions.ca/">
            <img
              className="pointer ml-[25vw] h-20 -lg:ml-0 -lg:text-center"
              src={'/inverse.svg'}
              alt="logo (dark version)"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
