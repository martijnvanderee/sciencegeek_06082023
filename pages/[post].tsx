import React, { FunctionComponent } from 'react'
import styled from "styled-components"
import { importPostSlugs, getSpecificPost, getRandomPostBySubject } from "../localFunctions/importPosts"
import ReactHtmlParser from 'react-html-parser';

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

const splitAt = (index: any) => (x: string) => [x.slice(0, index), x.slice(index)]

const test = (str: any, subString: string, index: number) => {
  console.log(1)
  const test = str.split(/(?=\<p>)/)
  const test1 = test.map(inclStrong)

  const test2 = test2func(test1, index)
  //klopt
  const test3 = test.join(subString)

  const testBonus = test.slice(0, test2)
  const testBonus1 = testBonus.map((test: string) => { return (test.length) })
  const testBonus2 = testBonus1.reduce((a: any, b: any) => a + b, 0)
  return testBonus2
}

const inclStrong = (str: string) =>
  str.includes("<strong>")


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

const Container = styled.div`
  & > p {
    & > img {
      width:100%;
      max-width: 42rem;
      margin:2em auto;
    }
  }
  `

const Post: FunctionComponent<PostProps> = ({ attributes, html, dataPhotos, randomPosts, middlePhoto }) => {
  const image = `${dataPhotos.image}/?nf_resize=fit&w=700`

  const tags = attributes.tags.length !== 0 ? modifyTags(attributes.tags) : []

  const res = test(html, "<strong>", 3)

  const firstHtml = splitAt(res)(html)[0]
  const secondHtml = splitAt(res)(html)[1]

  const transformImage = (node: any) => {
    if (node.name === 'img') {
      const image = node.attribs.src
      const alt = node.attribs.alt
      const titleBron = node.attribs.title

      return (
        <div className="relative w-full md:max-w-4xl md:mt-10 md:mx-auto mb-4">
          <div className="relative m-auto md:max-w-2xl">
            <img
              src={image}
              alt={alt}
              className=""
            />
          </div>
          <div className="relative -top-12 w-full m-auto">
            <div className="sm:w-9/12 mb-4 m-auto">
              <div className="z-10 text-grey text-small text-sm mt-0 pm">bron: {titleBron}</div>
              <div className="z-10 text-gray-800  text-lg font-medium italic m-0">{alt}</div>
            </div>
          </div>
        </div>
      )
    }
  }



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
            {attributes.Subtitle && <h3 className="italic text-xl text-black mb-4 md:text-2xl md:max-w-xl md:mx-auto">{attributes.Subtitle}</h3>
            }
          </div>

          <div className="mb-6 text-xl mx-auto">

            <Container className="prose-xl md:prose-2xl mx-auto" >
              {ReactHtmlParser(firstHtml, { transform: transformImage })}
            </Container>
          </div>

          {middlePhoto.image != "" && <div className="relative w-full md:max-w-4xl md:mt-10 md:mx-auto mb-4">
            <div className="relative m-auto md:max-w-2xl">
              <img
                src={middlePhoto.image}
                alt={attributes.title}
                className=""
              />
            </div>
            <div className="w-full m-auto">
              <div className="sm:w-9/12 mb-4 m-auto">
                <p className="z-10 text-grey text-small text-sm">bron: {middlePhoto.bron}</p>
                <p className="z-10 text-gray-800  text-lg font-medium italic">{middlePhoto.onderschrift}</p>
              </div>
            </div>
          </div>
          }

          <Container className="prose-xl md:prose-2xl mx-auto" >
            {ReactHtmlParser(secondHtml, { transform: transformImage })}
          </Container>
        </div>

        <div className="mx-2">
          {attributes.tags && <ul className="flex flex-wrap mb-6 gap-y-2 mb-20">
            {tags.map((tag: string) => {
              return (
                <li className="text-purple font-bold p-2 border-2 border-purple rounded-md mr-4 whitespace-nowrap">{tag}</li>)
            })}
          </ul>}
        </div>


        <section>
          <div className="mb-12 mx-2">
            <span className="p-4 text-white bg-yellow">lees ook</span>
          </div>

          <div className="flex flex-wrap overflow-hidden my-4 mx-2 max-w-3xl">
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

  const middlePhoto = post[0].photos.photosData[0] ? post[0].photos.photosData[0] : {
    onderschrift: "",
    bron: "",
    image: ""
  }

  return {
    props: {
      html: post[0].html,
      attributes: post[0].attributes,
      dataPhotos: post[0].photos.headerData,
      randomPosts,
      middlePhoto: middlePhoto
    },
  };
}


export default Post
