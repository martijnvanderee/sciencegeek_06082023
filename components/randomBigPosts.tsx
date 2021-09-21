import React, { FunctionComponent } from 'react'
//components
import {  PostItem2 } from "../components/postItem"
//typescript
import { PostData } from "../typescript"

type RandomProps = {
  posts: PostData[],
}

export const RandomBigPosts: FunctionComponent<RandomProps> = ({ posts }) => {
  return (
    <div>
      <div className="text-2xl mt-10 ml-4 font-bold text-grey hidden md:block">
        <h2 className="inline border-b border-almostWhite ">Lees ook één van onze andere verhalen</h2>
      </div>

      <div className="hidden md:block md:grid  md:grid-cols-3 pb-10 mt-2">
        {posts.map((post: PostData) => {
          return (
            <PostItem2 post={post} />
          )
        })}
      </div>
    </div>
  )
}