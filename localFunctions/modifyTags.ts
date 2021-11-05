export const modifyTags = (tags: string[]) => tags.length === 0 ? tags : t(tags)

const t = (tags: string[]): string[] =>
  (tags[0].search(",") !== -1 && tags.length === 1) ? tags[0].split(",") : tags
