
import * as R from "ramda";

//typescript
import { PostData, PostMeta } from "../typescript"
//helper
import { convertNumberToArray, getShuffle } from "./helperFunc"

import data from "../functions/postData.json"
import { numberOfPostsOnPage } from "../public/variables"


const postMeta: PostMeta = JSON.parse(JSON.stringify(data));

export const importPostSlugs = () => {
  const fileNames = postMeta.FileNames.map((FileName: string) => { return FileName.substring(0, FileName.length - 3) })
  return fileNames
};


type GetSpecificPhotos = {
  headerPath: string;
  photosPath: string[]
}
const getSubsetPosts = (files: string[], numberOfPosts: number,) => files.slice(0, numberOfPosts);

export const importPhoto = async (path: string) => {
  const markdown = await import(`../content/${"photo's"}/${path}.md`);

  return markdown
};

export const getNumberOfPages = (subject: string) => {
  const amountOfPostPerSubject = subject === "all" ? postMeta.amountOfPosts : postMeta.amountOfPostPerSubject[subject]

  const NumberOfPages = Math.ceil(amountOfPostPerSubject / numberOfPostsOnPage)

  return NumberOfPages
};


export const getSubjectPaths = () => {
  const subjectNames = postMeta.subjectNames

  const NumberOfPagesOfSubject = subjectNames.map((subjectName: string) => {
    const amountOfSubjectPosts = postMeta.postPerSubject[subjectName].length
    const NumberOfPages = Math.ceil(amountOfSubjectPosts / numberOfPostsOnPage)

    const NumberOfPagesArray = convertNumberToArray(NumberOfPages)

    const staticProps = NumberOfPagesArray.map((arr: number) => {
      return {
        params: {
          subject: subjectName,
          id: (arr + 1).toString(),
        }
      }

    })
    return staticProps
  })

  const amountOftotalPosts = postMeta.amountOfPosts
  const NumberOfPages = Math.ceil(amountOftotalPosts / numberOfPostsOnPage)
  const NumberOfPagesArray = convertNumberToArray(NumberOfPages)

  const test1 = NumberOfPagesArray.map((page: number) => {
    return {
      params: {
        subject: "all",
        id: (page + 1).toString(),
      }
    }
  })

  NumberOfPagesOfSubject.push(test1)

  return NumberOfPagesOfSubject.flat()
}


export const getPropsFromPaths = async (slugName: string, slugId: string,) => {
  const postsSortedBySubject = slugName === "all" ? data.FileNames : postMeta.postPerSubject[slugName]

  const sortedSlugsByData = sortPostsByDate(postsSortedBySubject)

  const numberOfPostsStart = Number(slugId) * numberOfPostsOnPage - numberOfPostsOnPage
  const numberOfPostsStartEnd = Number(slugId) * numberOfPostsOnPage

  const specificPosts = getSpecificPosts(sortedSlugsByData, numberOfPostsStart, numberOfPostsStartEnd)



  const posts = sortPostsByDate(specificPosts)



  const newPosts = getPostsTest1(posts)


  return newPosts
}

const getSpecificPosts = (slugs: string[], numberOfPostsStart: number, numberOfPostsStartEnd: number) => {

  if (numberOfPostsStartEnd > slugs.length) return slugs.slice(numberOfPostsStart)

  return slugs.slice(numberOfPostsStart, numberOfPostsStartEnd)

}

const test = (numberOfPostsStart: number, numberOfPostsStartEnd: number) => {

  const postAmount = postMeta.amountOfPosts

  if (numberOfPostsStartEnd > postAmount) return postMeta.FileNames.slice(numberOfPostsStart)

  return postMeta.FileNames.slice(numberOfPostsStart, numberOfPostsStartEnd)

}



const getPost = (postPath: any[]) => {
  return Promise.all(
    postPath.map(async (path: any) => {
      const markdown = await import(`../content/posts/${path.path}`);
      return { ...markdown, slug: path.path.substring(0, path.path.length - 3) };
    })
  );
}

const getRandomPaths = (PostNumbers: number[], AllPostPaths: string[]) => {
  const SelectedPostPaths = PostNumbers.map((postNumber) => {
    return AllPostPaths[postNumber]
  })
  return SelectedPostPaths
}

const getRandomNumbers = (amountOfPosts: number, amountOfPicks: number) => {
  if (amountOfPicks > amountOfPosts) return []

  const arrayOfPosts = convertNumberToArray(amountOfPosts)
  const arrayOfPicks = convertNumberToArray(amountOfPicks)
  const shuffle = getShuffle(arrayOfPosts);

  const randomNumbers = arrayOfPicks.map(() => {
    const number = shuffle.next().value
    return number
  })

  return randomNumbers
}


export const getPosts = async (amountOfPostFrontPage: number, sortSubject: string = "all") => {

  const postsSortedBySubject = sortSubject === "all" ? data.FileNames : postMeta.postPerSubject[sortSubject]


  const sortedSlugsByData = sortPostsByDate(postsSortedBySubject)


  const slugs = await getSubsetPosts(sortedSlugsByData, amountOfPostFrontPage)


  const test: PostData[] = await getPostsTest1(slugs)
  const test1 = JSON.parse(JSON.stringify(test));
  return test1
}




interface Point {
  name: string
  date: string
}

const nameLens = R.lensProp<Point>('name')
const dateLens = R.lensProp<Point>('date');



const view1 = R.view(nameLens)
const view2 = R.view(dateLens)


const double = (obj: any) => {

  const name = view1(obj)
  const date = view2(obj)


  return { name, date }
}

const triple = (array: any) => {

  return view1(array)



}





interface Point1 {
  [key: string]: {
    headerPhoto: string
    photos: string[]
    date: Date
  }
}


const funcMap = (slug: string) => {
  const Lprop = R.lensProp<Point1>(slug)
  const v = R.view(Lprop, postMeta.postMeta)
  return v

}

const sortByNameCaseInsensitive = R.sortBy((R.prop('date')))




const sortPostsByDate = (slugs: string[]) => {
  const tas = R.map(funcMap, slugs)





  const r = R.map(double, tas)

  const s = sortByNameCaseInsensitive(r)






  const ra = R.map(triple, s)

  return R.reverse(ra)



  // const data = slugs.map((slug: string) => {
  //   return { [slug]: postMeta.postMeta[slug].date }
  // })

  //map view sort





  //sort datas


}






export const getSpecificPost = async (slug: string) => {

  const test: PostData[] = await getPostsTest1([slug])
  const test1 = JSON.parse(JSON.stringify(test));
  return test1
}

export const getSpecificPhoto = async (ImagePaths: GetSpecificPhotos) => {


  const headerData = await import(`../content/photo's/${ImagePaths.headerPath}.md`);


  const photosData = await Promise.all(ImagePaths.photosPath.map(async (photoPath) => {
    const photoDataFull = await import(`../content/photo's/${photoPath}.md`);
    return photoDataFull.attributes
  }))

  return { headerData: headerData.attributes, photosData }
};

export const getRandomPostBySubject = async (amountOfPosts: number, subject: string) => {

  const postsBySubject = postMeta.postPerSubject[subject]

  const numberOfTotalPosts = postMeta.amountOfPostPerSubject[subject]

  const randomNumbers = getRandomNumbers(numberOfTotalPosts, amountOfPosts)
  //get randompaths

  const postPath = getRandomPaths(randomNumbers, postsBySubject)
  //get posts

  const postsWithPhotos = getPostsTest1(postPath)

  return postsWithPhotos
}

export const getRandomPosts = async (numberOfPost: number = 1): Promise<PostData[]> => {

  const numberOfTotalPosts = postMeta.amountOfPosts

  const RandomPostNumbers = getRandomNumbers(numberOfTotalPosts, numberOfPost)

  const randomPostPaths = RandomPostNumbers.map((num: number) => postMeta.FileNames[num])

  const Posts = await getPostsTest1(randomPostPaths)

  return Posts
}

export const importPost = async (path: string) => {
  const markdown = await import(`../content/posts/${path}`);

  return markdown
};

const getPostsTest1 = async (postNames: string[]) => {
  const posts: any = await Promise.all(postNames.map(async (slug) => {
    const post = await importPost(slug)

    const headerPath = postMeta.postMeta[slug].headerPhoto
    const photosPath = postMeta.postMeta[slug].photos
    const imagePath = { headerPath, photosPath }


    const photos = await getSpecificPhoto(imagePath)
    return { ...post, photos, slug: slug.substring(0, slug.length - 3) }

  }))

  return posts
}