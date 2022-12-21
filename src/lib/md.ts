import { readdir, readFile } from "fs/promises"
import { join } from "path"

const getDir = (path: string) => join(process.cwd(), path)

const DIR = {
  BLOGS: getDir("/src/content/blogs"),
  PORTFOLIOS: getDir("/src/content/portfolios"),
}

const getFileNames = async (dir: string) => {
  const fileNames = await readdir(dir, {
    encoding: "utf-8",
  })

  return fileNames.filter((name) => name.includes(".md"))
}

const getSlugsFromFileNames = (fileNames: string[]) =>
  fileNames.map((name) => name.replace(".md", ""))

const getItemInPath = async (pathToFile: string) => {
  const fileContent = await readFile(pathToFile, "utf-8")
  return fileContent
}

export const getBlogFileNames = async () => await getFileNames(DIR.BLOGS)

export const getBlogFileContent = async (fileName: string) =>
  await getItemInPath(join(DIR.BLOGS, fileName))
