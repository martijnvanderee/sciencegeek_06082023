import React, { FunctionComponent } from 'react'
import Link from "next/link";

//typescript
import { PostData, DataPhotos } from "../typescript"
import { formatDate } from "../localFunctions/formatdate"

type postProps = {
  post: PostData,
}

export const PostItem: FunctionComponent<postProps> = ({ post }) => {
  const date: string = formatDate(post.attributes.date)
  const url = post.slug
  return (
    <Link href={`/${url}`} as={`/${url}`}>
      <a className="w-full focus:outline-none flex-shrink-0">
        <article className="w-full mb-4 cursor-pointer">
          <div className="flex h-24 border-b border-almostWhite">
            <div className="relative flex-none h-full w-32">
              <img
                src={`${post.photos.headerData.image}/?nf_resize=fit&w=${4 * 32}`}
                alt="title van artikel"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative px-2">
              <span className="text-sm text-purple">
                {post.attributes.onderwerp}
              </span>

              <h2 className="text-lg font-medium leading-6">
                {post.attributes.title}
              </h2>
              <time className="absolute bottom-1 text-xs text-grey"> {date}</time>
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}


type postProps1 = {
  slug: string,
  image: string,
  title: string
  onderwerp: string
  date: any
}



export const PostItem1: FunctionComponent<postProps1> = ({ slug, image, title, onderwerp, date }) => {
  const newDate: string = formatDate(date)
  return (
    <Link href={`/${slug}`} as={`/${slug}`}>
      <a className="w-full focus:outline-none focus:ring focus:border-blue-300">
        <article className="w-full mb-4 cursor-pointer">
          <div className="flex h-24 border-b border-almostWhite">
            <div className="relative flex-none h-full w-32">
              <img
                src={`${image}/?nf_resize=fit&w=700`}
                alt="title van artikel"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative px-2">
              <span className="text-sm font-thin text-purple">
                {onderwerp}
              </span>

              <h2 className="text-lg font-medium leading-6">
                {title}
              </h2>
              <time className="absolute bottom-1 text-xs text-grey"> {newDate}</time>
            </div>
          </div>
        </article>
      </a>
    </Link>

  )
}

type postProps2 = {
  post: PostData
}

export const PostItem2: FunctionComponent<postProps2> = ({ post }) => {
  const url = post.slug
  return (
    <Link href={`/${url}`} as={`/${url}`}>
      <a className="focus:outline-none focus:ring focus:border-blue-300">
        <article className="m-4 cursor-pointer">
          <div className="relative h-64">
            <img
              src={`${post.photos.headerData.image}/?nf_resize=fit&w=700`}
              alt={post.attributes.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative h-36 p-2 ">
            <div>
              <span className="text-purple font-bold mb-2">{post.attributes.onderwerp}</span>
              <div className="text-black font-semibold text-2xl">{post.attributes.title}</div>
            </div>
            <div className="absolute w-12 bg-yellow h-0.5 bottom-0 right-0"></div>
            <div className="absolute w-0.5 bg-yellow h-12 bottom-0 right-0"></div>
          </div>
        </article>
      </a>
    </Link>
  )
}
