import { importPostSlugs, getSpecificPost, getRandomPostBySubject } from "../localFunctions/importPosts"


import React, { FunctionComponent } from 'react'

//components
import { Layout } from "../components/layout"
import { PostItem } from "../components/postItem"
//functions
import { modifyTags } from "../localFunctions/modifyTags";
//typescript
import { PostData, DataPhotos } from "../typescript"

type PostProps = {
  attributes: any,
  html: string,
  dataPhotos: DataPhotos
  randomPosts: PostData[]
  middlePhoto: DataPhotos
}

function getPosition(string: any, subString: any, index: any) {
  return string.split(subString, index).join(subString).length;
}

const splitAt = (index: any) => (x: any) => [x.slice(0, index), x.slice(index)]

const test = (str: any, subString: string, index: number) => {
  const test = str.split(/(?=\<p>)/)
  const test1 = test.map(test1func)

  const test2 = test2func(test1, index)
  //klopt
  const test3 = test.join(subString)

  const test4 = test3.split(subString, test2).join(subString).length;

  const testBonus = test.slice(0, test2)
  const testBonus1 = testBonus.map((test: string) => { return (test.length) })
  const testBonus2 = testBonus1.reduce((a: any, b: any) => a + b, 0)
  return testBonus2
}

const test1func = (str: any) => {
  return str.includes("<strong>")
}

const test2func = (arr: any, ind: number) => {
  let num = -1
  if (arr.length === 0) return -1

  for (const [i, v] of arr.entries()) {
    if (ind > i) {
      continue
    }
    if (v) {
      num = -1
      continue
    }
    if (v === false && num !== -1) {
      num = i
      break
    }
    if (v === false) {
      num = i
      continue
    }
  }
  return num
}

const Post: FunctionComponent<PostProps> = ({ attributes, html, dataPhotos, randomPosts, middlePhoto }) => {
  const image = `${dataPhotos.image}/?nf_resize=fit&w=700`

  const tags = modifyTags(attributes.tags)

  const res = test(html, "<strong>", 3)

  const firstHtml = splitAt(res)(html)[0]
  const secondHtml = splitAt(res)(html)[1]


  return (
    <Layout title={`${attributes.title} | ScienceGeek.nl`}>
      <main className="md:max-w-6xl  md:mx-auto">
        <div className="relative w-full h-72 md:max-w-4xl md:h-96 md:mt-10 md:mx-auto">
          <div className="relative w-full h-full md:w-8/12 m-auto">
            <img
              src={image}
              alt={attributes.title}
              className="absolute inset-0 w-full h-full  object-cover"
            />
          </div>

          <div className="md:w-8/12 m-auto mb-4">
            <p className="z-10 text-grey text-small text-sm">bron: {dataPhotos.bron}</p>
          </div>
        </div>


        <div className="p-4 md:mb-4">

          <div className=" mb-6 mt-4 md:mt-8 md:max-w-xl md:mx-auto">

            <h2 className="text-3xl mb-2 font-bold text-black md:text-4xl md:max-w-xl md:mx-auto">{attributes.title}</h2>

            {attributes.Subtitle && <h3 className=" italic text-xl text-black mb-4 md:text-2xl md:max-w-xl md:mx-auto">{attributes.Subtitle}</h3>}
          </div>


          <div className="mb-6 text-xl mx-auto">

            <div className="prose-xl md:prose-2xl mx-auto" dangerouslySetInnerHTML={{ __html: firstHtml }}></div>
          </div>


          <div className="relative w-full h-72 md:max-w-4xl md:h-96 md:mt-10 md:mx-auto mb-20">

            <div className="relative w-full h-full md:w-8/12 m-auto">
              <img
                src={middlePhoto.image}
                alt={attributes.title}
                className="absolute inset-0 w-full h-full  object-cover"
              />
            </div>

            <div className="md:w-8/12 m-auto mb-4">
              <p className="z-10 text-grey text-small text-sm">bron: {middlePhoto.bron}</p>
              <p className="z-10 text-gray-800  text-lg font-medium italic">{middlePhoto.onderschrift}</p>
            </div>
          </div>


          <div className="prose-xl md:prose-2xl mx-auto" dangerouslySetInnerHTML={{ __html: secondHtml }}></div>
        </div>


        {attributes.tags && <ul className="flex flex-wrap mb-6 gap-y-2 mb-20">
          {tags.map((tag: string) => {
            return (
              <li className="text-purple font-bold p-2 border-2 border-purple rounded-md mr-4 whitespace-nowrap">{tag}</li>)
          })}
        </ul>}

        <section>
          <div className="mb-12">
            <span className="p-4 text-white bg-yellow">lees ook</span>
          </div>

          <div className="flex flex-wrap overflow-hidden my-4">
            {randomPosts.map((post: PostData) => <PostItem post={post} />)}
          </div>
        </section>


      </main>

    </Layout >
  );
};

export async function getStaticPaths() {
  const slugs = importPostSlugs()



  const paths = slugs.map((slug: string) => ({
    params: { post: slug.toString() },
  }));


  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }: any) {

  const slug = `${params.post}.md`
  const post: PostData[] = await getSpecificPost(slug);

  const randomPosts = await getRandomPostBySubject(4, post[0].attributes.onderwerp)

  return {
    props: {
      html: post[0].html,
      attributes: post[0].attributes,
      dataPhotos: post[0].photos.headerData,
      randomPosts,
      middlePhoto: post[0].photos.photosData[0]
    },
  };
}


export default Post
