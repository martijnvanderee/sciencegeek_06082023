import React, { FunctionComponent } from 'react'
//components
import { Layout } from "../../../components/layout"
import Pagination from '../../../components/pagination/index';
//components
import { PostItem2 } from "../../../components/postItem"
//functions
import { getPropsFromPaths } from "../../../localFunctions/importPosts"
//typescript
import { PostData } from "../../../typescript"

import { getSubjectPaths } from "../../../localFunctions/importPosts"

type NetBinnenProps = {
  posts: PostData[]
}

const NetBinnen: FunctionComponent<NetBinnenProps> = ({ posts }) => {
  return (
    <Layout title="meer net binnen">
      <main>

        {/* net binnen */}
        <div className="mx-4 mt-10 mb-10 text-4xl font-bold underline text-grey">
          <h1>Net binnen</h1>
        </div>

        {/* posts */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 pb-10 mt-2">
          {posts.map((post: PostData) => {
            return (
              <PostItem2 post={post} />
            )
          })}
        </div>

        <Pagination />

      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getSubjectPaths()
  return { paths, fallback: false };
}

type Params = {
  params: { id: string, subject: string }
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }: Params) {
  const posts = await getPropsFromPaths(params.subject, params.id)


  return { props: { posts } }
}

export default NetBinnen

