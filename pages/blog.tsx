import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import NewsletterForm from '@/components/NewsletterForm'

export const POSTS_PER_PAGE = 6

export const getStaticProps = async () => {
  const posts = sortedBlogPost(allBlogs)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
      pagination,
    },
  }
}

export default function Blog({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="mt-10">
        <div className="mx-auto max-w-3xl space-y-2 px-4 pt-6 sm:px-6 md:space-y-5 xl:max-w-5xl xl:px-0">
          <h1 className="text-center text-2xl font-extrabold leading-9 tracking-tight text-secondary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Antarctic Solutions Blog
          </h1>
          <p className="px-[5vw] text-center text-2xl leading-7 text-secondary/80 -sm:px-2 -sm:text-base">
            Guides on starting and scaling
            <br />
            your technical business
          </p>
        </div>
        <p className="text-white">No posts found.</p>
        <ListLayout
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title="All Posts"
        />
      </div>
      {siteMetadata.newsletter.provider !== '' && (
        <div className="mx-auto flex max-w-3xl items-center justify-center py-8 px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
