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
import { amountOfPostFrontPage, amountOfRandomPostFrontPage } from "../public/variables"

type TechProps = {
  LatestPosts: PostData[],
  randomPosts: PostData[]
}

const Tech: FunctionComponent<TechProps> = ({ LatestPosts, randomPosts }) => {
  const headPost = LatestPosts[0]
  const [, ...postOftheRest] = LatestPosts;
  return (
    <Layout title="Sciencegeek">
      <main>
        <div>

          <div className="md:grid  md:grid-cols-2 md:mt-10">

            <HeadPost postData={headPost} />
            <div className=" md:hidden h-2 w-full bg-almostWhite"></div>
            <LaatsteNieuws posts={postOftheRest} title="Het laatste history nieuws!" LinkNaarMeerPostsView="Meer tech nieuws" LinkNaarMeerPosts="/net-binnen/tech/1" />

          </div>

          <div className="hidden md:block bg-almostWhite h-0.5 w-full mt-8"></div>

          <RandomBigPosts posts={randomPosts} />

        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const LatestPosts = await getPosts(amountOfPostFrontPage, "tech")
  const randomPosts = await getRandomPosts(amountOfRandomPostFrontPage)

  return { props: { LatestPosts, randomPosts } }

}

export default Tech;