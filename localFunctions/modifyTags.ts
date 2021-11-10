export const modifyTags = (tags: string[]) => {
  //console.log("tags",tags)
  return tags.length === 0 ? []: t(tags)
}

const t = (tags: string[]): string[] => {
  //console.log("tagstags",tags)
  return  (tags[0].search(",") !== -1 && tags.length === 1) ? tags[0].split(",") : tags
}

