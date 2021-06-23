import lunr from "lunr"


import React, { useEffect } from "react"


type titles = {
  title: string
  tags: string[]
}

export const getAllPosts = async (): Promise<titles[]> => {
  const fileNames = getPostFileNames()
  const posts = await getPostTitles(fileNames)

  return posts
}

const getPostTitles = async (fileNames: string[]) => {
  return Promise.all(
    fileNames.map(async path => {
      const markdown: any = await import(`../content/posts/${path}`);
      const title = markdown.attributes.title
      const tags = markdown.attributes.tags.join(" ");
      const content = markdown.html
      return { title, tags, content };
    })
  )
}


const getPostFileNames = (): string[] => {
  const Files = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));

  return Files
}


const createIndex = (posts: titles[]) => {

  var idx = lunr(function () {
    const lunrProp: any = lunr
    this.field('tags', {
      boost: 10
    })
    this.field("title", {
      boost: 10
    });
    this.field("content");
    this.ref('title')

    const datas = posts


    // documents.forEach(
    //   function (data) {
    //     this.add(data)
    //   }, this)


    datas.map((data: any) => {
      this.add(data)
    })
  })

  return idx
}

export const getSearchData = async () => {
  const posts = await getAllPosts()
  const index = createIndex(posts)



  return index
}




export const useFetch = () => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await getSearchData()
        setResponse(res)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};