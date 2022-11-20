import Link from '@/components/Link'

interface Props {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: Props) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="bg-blog text-white">
      <div className="mx-auto max-w-3xl space-y-2  px-4 pt-6 pb-8  sm:px-6 md:space-y-5 xl:max-w-5xl xl:px-0">
        <nav className="flex justify-between">
          {!prevPage && (
            <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
              Previous
            </button>
          )}
          {prevPage && (
            <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
              <button>Previous</button>
            </Link>
          )}
          <span>
            {currentPage} of {totalPages}
          </span>
          {!nextPage && (
            <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
              Next
            </button>
          )}
          {nextPage && (
            <Link href={`/blog/page/${currentPage + 1}`}>
              <button>Next</button>
            </Link>
          )}
        </nav>
      </div>
    </div>
  )
}
