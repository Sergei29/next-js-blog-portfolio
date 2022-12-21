import { MarkdownItem } from "./markdown"

export interface Blog extends MarkdownItem {
  coverImage: string
  authorImage: string
  author: string
}
