


import { importPostSlugs, importPost, getDataPhotos, getRandomPostBySubject, importPhoto } from "../localFunctions/importPosts"

import { formatDate } from "../localFunctions/formatdate"

import React, { FunctionComponent } from 'react'

//components
import { Layout } from "../components/layout"
import { PostItem } from "../components/postItem"
//functions
import { importPosts } from "../localFunctions/importPosts";
import { modifyTags } from "../localFunctions/modifyTags";
//typescript
import { PostData, DataPhotos, DataPhotosTotal } from "../typescript"

import { BsPencil } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { IconContext } from "react-icons";


type PostProps = {
  attributes: any,
  html: string,
  dataPhotos: DataPhotos
  randomPosts: { posts: PostData[], photos: DataPhotosTotal[] }
  middlePhoto: DataPhotos
}

function getPosition(string: any, subString: any, index: any) {
  return string.split(subString, index).join(subString).length;
}


function getPosition1(string: any, subString: any, index: any) {
  return string.split(subString, index)
}

const splitAt = (index: any) => (x: any) => [x.slice(0, index), x.slice(index)]


const test = (str: any, subString: string, index: number) => {
  const test = str.split(subString)
  let number

  const test1 = test.map(test1func)

  const test2 = test2func(test1, index)

  const test3 = test.join(subString)
  const test4 = test3.split(subString, test2).join(subString).length;






}

const test1func = (arr: any) => {
  return arr.substring(0, 8) !== "<strong>";
}


const test2func = (arr: any, ind: number) => {
  if (arr.length === 0) return -1
  let num = -1

  for (const [i, v] of arr.entries()) {
    if (i < ind) {
      num = -1
      continue;
    }
    if (v && arr[i - 1]) {
      num = i
      break;
    }
    if (v) {
      num = i
      continue;
    }
    else
      num = -1
  }
  return num
}






const Post: FunctionComponent<PostProps> = ({ attributes, html, dataPhotos, randomPosts, middlePhoto }) => {
  const image = `${dataPhotos.image}/?nf_resize=fit&w=700`

  const date: string = formatDate(attributes.date)

  const tags = modifyTags(attributes.tags)



  const index = getPosition(html, "</p>", 3) + 4



  const res = test(html, "<p>", 3)

  const restest1 = splitAt(res)(html)[0]
  const resttest2 = splitAt(res)(html)[1]




  const firstHtml = splitAt(index)(html)[0]
  const secondHtml = splitAt(index)(html)[1]



  return (
    <Layout title={attributes.title}>
      <div className="md:max-w-6xl  md:mx-auto">
        <div className="relative w-full h-72 md:max-w-4xl md:h-96 md:mt-10 md:mx-auto">
          <div className="relative w-full h-full md:w-8/12 m-auto">
            <img
              src={image}
              alt={attributes.title}
              className="absolute inset-0 w-full h-full  object-cover"
            />
          </div>
          <p className="z-10  text-grey text-small text-sm md:w-8/12 m-auto ">bron: {dataPhotos.bron}</p>
        </div>


        <div className="p-4 md:mb-4">

          <div className=" mb-6 mt-4 md:mt-8 md:max-w-xl md:mx-auto">

            <h2 className="text-3xl mb-2 font-bold text-black md:text-4xl md:max-w-xl md:mx-auto">{attributes.title}</h2>

            {attributes.Subtitle && <h3 className=" italic text-xl text-black mb-4 md:text-2xl md:max-w-xl md:mx-auto">{attributes.Subtitle}</h3>}
          </div>






          <div className="mb-6 text-xl mx-auto">

            <div className="prose-xl md:prose-2xl mx-auto" dangerouslySetInnerHTML={{ __html: firstHtml }}></div>
          </div>


          <div className="relative w-full h-72 md:max-w-4xl md:h-96 md:mt-10 md:mx-auto mb-24">

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

        <div>
          <div className="mb-12">
            <span className="p-4 text-white bg-yellow">lees ook</span>
          </div>

          <div className="flex flex-wrap overflow-hidden my-4">
            {randomPosts.posts.map((post: PostData, index) => <PostItem post={post} photo={randomPosts.photos[index].headerData} />)}
          </div>
        </div>


      </div>

    </Layout >
  );
};

export async function getStaticPaths() {
  const slugs = await importPostSlugs()

  const paths = slugs.map((slug: string) => ({
    params: { post: slug.toString() },
  }));


  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }: any) {

  const slug = `${params.post}.md`

  const post: PostData = await importPost(slug);




  const filePath = post.attributes.headerPhoto


  const dataPhotos = await getDataPhotos(filePath)
  const randomPosts = await getRandomPostBySubject(4, post.attributes.onderwerp)


  const filepathPhoto = post.attributes["photo's"][0]
  const photo = await importPhoto(filepathPhoto)

  return {
    props: {
      html: post.html,
      attributes: post.attributes,
      dataPhotos,
      randomPosts,
      middlePhoto: photo.attributes
    },
  };
}



export default Post;
