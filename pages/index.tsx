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

type HomeProps = {
  LatestPosts: PostData[],
  randomPosts: PostData[]
}

const Home: FunctionComponent<HomeProps> = ({ LatestPosts, randomPosts }) => {
  const headPost = LatestPosts[0]
  const [, ...postOftheRest] = LatestPosts;
  return (
    <Layout title="ScienceGeek.nl is een onafhankelijk medium met wetenschapsnieuws. Vol onderzoek over tech, robots, seks, space, natuur en psychologie nieuws | ScienceGeek.nl">
      <main>
        <div>

          <div className="md:grid  md:grid-cols-2 md:mt-10">
            {/* HeadPost */}
            <HeadPost postData={headPost} />
            <div className=" md:hidden h-2 w-full bg-almostWhite"></div>

            {/* laatste nieuws */}
            <LaatsteNieuws posts={postOftheRest} title="Hett laatste nieuws op ScienceGeek!" LinkNaarMeerPostsView="Meer net binnen" LinkNaarMeerPosts="/net-binnen/all/1" />
          </div>

          <div className="hidden md:block bg-almostWhite h-0.5 w-full mt-8"></div>
          {/* random posts */}
          <RandomBigPosts posts={randomPosts} />
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const LatestPosts = await getPosts(amountOfPostFrontPage)
  const randomPosts = await getRandomPosts(amountOfRandomPostFrontPage)

  return { props: { LatestPosts, randomPosts } }

}

export default Home;