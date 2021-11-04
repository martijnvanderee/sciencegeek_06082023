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

type HomeProps = {
  LatestPosts: PostData[],
  randomPosts: PostData[]
}

const firstElement = (arr: any[]) => arr[0]
const removeFirstEement = (arr: any[]) => arr.slice(1)

const Home: FunctionComponent<HomeProps> = ({ LatestPosts, randomPosts }) => {
  return (
    <Layout title="ScienceGeek.nl is een onafhankelijk medium met wetenschapsnieuws. Vol onderzoek over tech, robots, seks, space, natuur en psychologie nieuws | ScienceGeek.nl">
      <main>
        <div>
          <div className="md:grid  md:grid-cols-2 md:mt-10">

            {/* HeadPost */}
            <HeadPost postData={firstElement(LatestPosts)} />
            <div className=" md:hidden h-2 w-full bg-almostWhite"></div>

            {/* laatste nieuws */}
            <LaatsteNieuws posts={removeFirstEement(LatestPosts)} title="Het laatste nieuws op ScienceGeek!" LinkNaarMeerPostsView="Meer net binnen" LinkNaarMeerPosts="/net-binnen/all/1" />
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
  const LatestPosts = await getPosts(AMOUNT_OF_POST_FRONTPAGE)
  const randomPosts = await getRandomPosts(AMOUNT_OF_RANDOM_POST_FRONTPAGE)

  return { props: { LatestPosts, randomPosts } }

}

export default Home;