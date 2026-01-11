import { defineDocumentType, makeSource } from "contentlayer2/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.replace(/^posts\//, ""),
    },
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace(/^posts\//, "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
