import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import AuthorData from '@/data/author'
import formatDate from '@/lib/utils/formatDate'
import { FaExternalLinkAlt } from 'react-icons/fa'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { CoreContent } from '@/lib/utils/contentlayer'
import { ReactNode } from 'react'
import type { Blog } from 'contentlayer/generated'
import { BlogNewsletterForm } from '@/components/NewsletterForm'

interface Props {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: Props) {
  const { slug, date, title, summary, authors, images, readingTime } = content

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${slug}`} {...content} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="mt-8  text-center text-lg font-bold">
              <Link
                href="/"
                title="Go back to blog homepage"
                className="text-primary-500 hover:text-primary-600 hover:underline dark:hover:text-primary-400"
              >
                Blog
              </Link>
              <span className="font-normal">{' > '}</span>
              <Link
                href="#top"
                title="Current Page"
                className="text-primary-500 hover:text-primary-600 hover:underline dark:hover:text-primary-400"
              >
                {title}
              </Link>
            </div>
            <div className="m-6 space-y-1 border-b border-gray-200 text-center">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              {/* description */}
              <div className="pt-4 text-lg text-secondary">
                <h2>{summary}</h2>
              </div>

              <dl>
                <div className="mt-4 text-secondary/80">
                  <span className="inline">
                    by{' '}
                    <Link
                      className="cursor-pointer text-primary-500 hover:text-primary-600 hover:underline"
                      target="_blank"
                      href="https://tinkeringpenguin.com/"
                    >
                      {AuthorData[0][authors[0]] ?? 'Tinkering Penguin'}{' '}
                      <FaExternalLinkAlt className="inline" color="#14b8a6" />
                    </Link>
                    <span> &#8226; </span>
                  </span>
                  <dt className="sr-only">Published on </dt>
                  <dd className="inline text-base leading-6 ">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                {/* blog image */}
                <img
                  className="mt-8 rounded-xl"
                  src={`/static/banner/${images[0]}`}
                  alt={`${title} banner`}
                  title={`${title} banner`}
                />
                <p className="pb-4 pt-2 text-sm text-secondary/80">{readingTime.text}</p>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
            <footer>
              {/* about the author */}
              <div className="pt-8 pb-8">
                <div className="flex items-center justify-center">
                  <img
                    className="mr-4 h-16 w-16 rounded-full border-2 border-primary-500/50 transition-all hover:border-primary-500"
                    src={`/static/author/${
                      authors[0] === 'default' ? 'andrew.png' : `${AuthorData[authors[0]]}.jpg`
                    }`}
                    alt="Author's profile"
                  />
                  <div className="ml-4">
                    {/* <small className="text-secondary/80">
                      <em>About the author</em>
                    </small> */}
                    <h3 className="text-lg font-medium leading-6 text-secondary dark:text-gray-100">
                      {AuthorData[authors[0]] ?? 'Tinkering Penguin'}
                    </h3>
                    <div className="text-sm font-medium leading-5 text-gray-500 dark:text-gray-400">
                      <Link
                        className="cursor-pointer text-primary-500 hover:text-primary-600 hover:underline"
                        target="_blank"
                        href="https://tinkeringpenguin.com/"
                      >
                        tinkeringpenguin.com{' '}
                        <FaExternalLinkAlt className="inline" color="#14b8a6" />
                      </Link>
                    </div>
                    <div className="mt-4 pr-[20vw] text-sm leading-5 text-secondary/80 dark:text-gray-300 -sm:pr-0">
                      <p>{AuthorData[1][authors[0]] ?? `${authors[0]} is a cool person`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/`}
                    className="text-center font-bold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    ← Back to homepage
                  </Link>
                </div>
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
              <div className="mt-4 divide-y divide-gray-200">
                <BlogNewsletterForm title="Subscribe to the newsletter:" />
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
