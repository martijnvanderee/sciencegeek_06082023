
import * as R from "ramda";
//typescript
import { PostData, PostMeta, DataPhotos } from "../typescript"
//helper
import { convertNumberToArray, getShuffle } from "./helperFunc"
import { NUMBER_OF_POST_ON_PAGE } from "../public/variables"

//data
import data from "../functions/postData.json"
const postMeta: PostMeta = JSON.parse(JSON.stringify(data));

type Import = {
  attributes: DataPhotos
  html: any
  default: any
}

export const importPost = async (path: string): Promise<PostData> => await import(`../content/posts/${path}`);

export const importPhoto = async (path: string): Promise<Import> =>
  await import(`../content/${"photo's"}/${path}.md`)

const importPhoto1 = async (obj: any): Promise<DataPhotos> => {
  const photo = await importPhoto(obj)
  return photo.attributes
}

export const importPhotos = async (paths: string[]) =>
  await Promise.all(paths.map(async (path) => importPhoto1(path)))

const getSubsetPosts = (files: string[], numberOfPosts: number,) => files.slice(0, numberOfPosts);

export const getPosts = async (AMOUNT_OF_POST_FRONTPAGE: number, sortSubject: string = "all"): Promise<PostData[]> => {
  const postsSortedBySubject = sortSubject === "all" ? data.FileNames : postMeta.postPerSubject[sortSubject]

  const sortedSlugsByData = sortPostsByDate(postsSortedBySubject)

  const slugs = await getSubsetPosts(sortedSlugsByData, AMOUNT_OF_POST_FRONTPAGE)

  const posts = await importPosts(slugs)

  return JSON.parse(JSON.stringify(posts));
}

const removeMdExt = (slug: string) => slug.substring(0, slug.length - 3)

const importPosts = async (postNames: string[]): Promise<PostData[]> =>
  await Promise.all(postNames.map(getFullPost))

export const getFullPost = async (slug: string) => {
  const post = await importPost(slug)

  const headerPath = postMeta.postMeta[slug].headerPhoto
  const photosPath = postMeta.postMeta[slug].photos

  const photos = await getSpecificPhoto({ headerPath, photosPath })
  return { ...post, photos, slug: removeMdExt(slug) }
}


type GetSpecificPhotos = {
  headerPath: string;
  photosPath: string[]
}

export const getSpecificPhoto = async ({ headerPath, photosPath }: GetSpecificPhotos) =>
  ({ headerData: await importPhoto1(headerPath), photosData: await importPhotos(photosPath) })


const getNumberOfPages1 = (subjectName: string) => convertNumberToArray(getNumberOfPages(subjectName))

const getSubjectPath = (subjectName: string) => getNumberOfPages1(subjectName).map((arr: number) => ({
  params: {
    subject: subjectName,
    id: (arr + 1).toString(),
  }
}))

export const getSubjectPaths = ({ subjectNames }: any) =>
  [...subjectNames.map(getSubjectPath), getSubjectPath("all")].flat()

export const getPropsFromPaths = async (slugName: string, slugId: string,) => {
  const sortedSlugs = sortPostsByDate(sortPostsBySubject(slugName, postMeta))

  const specificPosts = getSpecificPosts(sortedSlugs, postNumbers(slugId))

  return importPosts(specificPosts)
}

const postNumbers = (slugId: string) => (
  {
    start: Number(slugId) * NUMBER_OF_POST_ON_PAGE - NUMBER_OF_POST_ON_PAGE,
    end: Number(slugId) * NUMBER_OF_POST_ON_PAGE
  })

const sortPostsBySubject = (slugName: string, postMeta: any) =>
  slugName === "all" ? postMeta.FileNames : postMeta.postPerSubject[slugName]


type Num = {
  start: number,
  end: number
}
const getSpecificPosts = (slugs: string[], num: Num) =>
  (num.start > slugs.length) ? slugs.slice(num.start) : slugs.slice(num.start, num.end)


const getRandomNumbers = (total: number, amountOfPicks: number) => {
  if (amountOfPicks > total) return []

  const shuffle = getShuffle(convertNumberToArray(total));

  return convertNumberToArray(amountOfPicks).map(() => shuffle.next().value)
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

const triple = (array: any) =>
  view1(array)

interface Point1 {
  [key: string]: {
    headerPhoto: string
    photos: string[]
    date: Date
  }
}

const funcMap = (slug: string) => {
  const Lprop = R.lensProp<Point1>(slug)

  return R.view(Lprop, postMeta.postMeta)

}

const sortByNameCaseInsensitive = R.sortBy((R.prop('date')))

const sortPostsByDate = (slugs: string[]) => {
  const tas = R.map(funcMap, slugs)

  const r = R.map(double, tas)

  const s = sortByNameCaseInsensitive(r)

  const ra = R.map(triple, s)

  return R.reverse(ra)
}

const getRandomPaths = (amountOfPosts: number, totalPosts: number, postsBySubject: string[]) =>
  getPaths(getRandomNumbers(totalPosts, amountOfPosts), postsBySubject)


const getPaths = (PostNumbers: number[], AllPostPaths: string[]) =>
  PostNumbers.map((postNumber) => AllPostPaths[postNumber])


export const getRandomPostBySubject = async (amountOfPosts: number, subject: string, postMeta: PostMeta) => {

  const paths = getRandomPaths(amountOfPosts, postMeta.postPerSubject[subject].length, postMeta.postPerSubject[subject])

  return await importPosts(paths)
}

export const getRandomPosts = async (numberOfPost: number = 1): Promise<PostData[]> => {
  const paths = getRandomPaths(numberOfPost, postMeta.amountOfPosts, postMeta.FileNames)

  return await importPosts(paths)
}

export const importPostSlugs = () =>
  postMeta.FileNames.map((FileName: string) => removeMdExt(FileName))

export const getNumberOfPages = (subject: string) => Math.ceil(getNumberOfPosts(subject, postMeta) / NUMBER_OF_POST_ON_PAGE)


const getNumberOfPosts = (subject: string, postMeta: PostMeta) => subject === "all" ? postMeta.amountOfPosts : postMeta.amountOfPostPerSubject[subject]