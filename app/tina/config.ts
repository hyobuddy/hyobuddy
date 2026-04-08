import { defineConfig } from "tinacms";

// List of authors - update this when adding new authors
const AUTHORS = [
  { label: "Azim", value: "Azim" },
  { label: "Zaid", value: "zaid" },
  { label: "HyoBuddy Editorial", value: "HyoBuddy Editorial" },
];

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  
  authProvider: {
    type: "tina_cloud",
  },
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      {
        name: "article",
        label: "Articles",
        path: "content/articles",
        format: "mdx",
        ui: {
          router: ({ document }) => `/news/${document._sys.filename}`,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug (URL)",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Published Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
            options: AUTHORS,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              { label: "Geopolitics", value: "geopolitics" },
              { label: "Economic", value: "economic" },
              { label: "Market Trends", value: "trend" },
              { label: "Organizations", value: "organization" },
              { label: "Currencies", value: "currency" },
              { label: "Digital", value: "digital" },
              { label: "Human Interest", value: "human-interest" },
            ],
          },
          {
            type: "string",
            name: "articleType",
            label: "Article Type",
            required: true,
            options: [
              { label: "News", value: "news" },
              { label: "Analysis", value: "analysis" },
            ],
          },
          {
            type: "string",
            name: "impact",
            label: "Impact Level",
            required: true,
            options: [
              { label: "?? High", value: "high" },
              { label: "?? Medium", value: "medium" },
              { label: "?? Low", value: "low" },
            ],
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt (Summary)",
            ui: { component: "textarea" },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
          {
            type: "string",
            name: "source",
            label: "Source",
            default: "HyoBuddy News",
          },
          {
            type: "string",
            name: "sourceUrl",
            label: "Source URL",
            default: "#",
          },
          {
            type: "string",
            name: "readTime",
            label: "Read Time",
            default: "5 min",
          },
          {
            type: "boolean",
            name: "isArchived",
            label: "Archived",
            default: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "string",
            name: "videoUrl",
            label: "Video URL",
          },
          {
            type: "file",
            name: "videoFile",
            label: "Video File",
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
