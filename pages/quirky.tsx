import React, { FunctionComponent } from 'react'
//components
import { Layout } from "../components/layout"
import { HeadPost } from "../components/headPost"
import { LaatsteNieuws } from "../components/laatsteNieuws"
import { RandomBigPosts } from "../components/randomBigPosts"
//functions
import { getPosts, getRandomPosts } from "../localFunctions/importPosts";
//typescript
import { PostData } from "../typescript"
//variables
import { AMOUNT_OF_POST_FRONTPAGE, AMOUNT_OF_RANDOM_POST_FRONTPAGE } from "../public/variables"

type QuirkyProps = {
  LatestPosts: PostData[],
  randomPosts: PostData[]
}

const Quirky: FunctionComponent<QuirkyProps> = ({ LatestPosts, randomPosts }) => {
  const headPost = LatestPosts[0]
  const [, ...postOftheRest] = LatestPosts;
  return (
    <Layout title="Quirky | ScienceGeek.nl">
      <main>
        <div>

          <div className="md:grid  md:grid-cols-2 md:mt-10">

            <HeadPost postData={headPost} />
            <div className=" md:hidden h-2 w-full bg-almostWhite"></div>
            <LaatsteNieuws posts={postOftheRest} title="Het laatste quirky nieuws!" LinkNaarMeerPostsView="Meer quirky nieuws" LinkNaarMeerPosts="/net-binnen/quirky/1" />

          </div>

          <div className="hidden md:block bg-almostWhite h-0.5 w-full mt-8"></div>

          <RandomBigPosts posts={randomPosts} />

        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const LatestPosts = await getPosts(AMOUNT_OF_POST_FRONTPAGE, "quirky")
  const randomPosts = await getRandomPosts(AMOUNT_OF_RANDOM_POST_FRONTPAGE)

  return { props: { LatestPosts, randomPosts } }

}

export default Quirky;