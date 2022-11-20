import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex min-h-[60vh] flex-col-reverse justify-center sm:items-center md:flex-row md:items-center md:justify-center">
        <div className="flex w-full flex-col justify-center sm:items-center">
          <div>
            <h1 className="poppins text-[4rem] font-extrabold text-main -sm:text-[2rem]">
              Did you lose <br />
              your footing?
            </h1>
            <Link href="/" title="Go home">
              <button className="focus:shadow-outline-blue poppins mt-4 inline rounded-full border border-transparent bg-button px-8 py-4 text-2xl leading-5 text-white transition-colors duration-150 hover:bg-buttonHover focus:outline-none">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
        <div>
          {/* video of https://www.antarcticsolutions.ca/rocket.webm looping autoplay */}
          <video
            className="flex h-[100%] w-[40vw] items-center justify-center -sm:w-full"
            src={'/rocket.webm'}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  )
}
