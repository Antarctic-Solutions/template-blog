import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { ComponentProps, useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { CoreContent } from '@/lib/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

interface Props {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: ComponentProps<typeof Pagination>
}

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      {/* background image of background.svg */}
      <img src={'/top.svg'} alt="background" className="h-full w-full" />
      <div className="min-h-[70vh] bg-blog">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex justify-center space-y-2 pt-6 pb-8 md:space-y-5 ">
            <div className="relative max-w-lg ">
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 transition-all focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <ul className="grid grid-cols-3 gap-4 -xl:grid-cols-2 -sm:grid-cols-1">
            {!filteredBlogPosts.length && <p className="text-white">No posts found...</p>}
            {displayPosts.map((post) => {
              const { slug, date, title, summary, tags, images } = post
              return (
                <li key={slug} className="flex w-full py-4">
                  <article className="blogCard w-full space-y-2 rounded-lg border-2 border-solid border-black bg-white transition-all xl:grid xl:items-baseline">
                    <div className="w-full space-y-2 xl:col-span-3">
                      {/* banner image */}
                      {images?.length ? (
                        <Link href={`/blog/${slug}`}>
                          <div className="aspect-w-16 aspect-h-9">
                            <img
                              className="rounded-t-lg border-b-2  border-main object-cover transition-all hover:opacity-80"
                              src={`static/banner/${images[0]}`}
                              alt="blog post banner"
                            />
                          </div>
                        </Link>
                      ) : null}
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="mx-4 mt-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="mx-4 mt-0">
                        <h3 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h3>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose mx-4 max-w-none pb-4 text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
      <img src={'/bottom.svg'} alt="background" className="h-full w-full" />
    </>
  )
}
