import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: null,
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "news",
        label: "News Articles",
        path: "app/src/data/news",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "excerpt", label: "Excerpt", ui: { component: "textarea" } },
          { type: "rich-text", name: "content", label: "Content" },
          { type: "select", name: "category", label: "Category", options: [{ label: "Geopolitics", value: "geopolitics" }, { label: "Economic", value: "economic" }, { label: "Market Trends", value: "trend" }, { label: "Organizations", value: "organization" }, { label: "Currencies", value: "currency" }, { label: "Digital", value: "digital" }, { label: "Human Interest", value: "human-interest" }] },
          { type: "datetime", name: "date", label: "Published Date" },
          { type: "string", name: "author", label: "Author" },
          { type: "image", name: "image", label: "Featured Image" },
          { type: "select", name: "impact", label: "Impact Level", options: [{ label: "High", value: "high" }, { label: "Medium", value: "medium" }, { label: "Low", value: "low" }] },
          { type: "select", name: "articleType", label: "Article Type", options: [{ label: "News", value: "news" }, { label: "Analysis", value: "analysis" }] },
          { type: "string", name: "tags", label: "Tags", list: true },
          { type: "boolean", name: "isArchived", label: "Archived" },
          { type: "string", name: "source", label: "Source" },
          { type: "string", name: "sourceUrl", label: "Source URL" },
          { type: "string", name: "readTime", label: "Read Time" },
        ],
      },
    ],
  },
});
