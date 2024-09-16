import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";

interface Metadata {
    title: string;
    date: Date;
    category: string;
}

interface ArticleInfo {
    slug: string;
    metadata: Metadata;
}

export function getArticles(): ArticleInfo[] {
    const articlesDirectory = path.resolve(process.cwd(), 'articles');
    const filenames = readdirSync(articlesDirectory);

    const articles: ArticleInfo[] = filenames.map(filename => {
        const slug = filename.replace(/\.[^.]+$/, '');
        const fullPath = path.join(articlesDirectory, filename);
        const fileContents = readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return { slug, metadata: data as Metadata };
    })

    articles.sort((a: ArticleInfo, b: ArticleInfo) => {
        const aDate = new Date(a.metadata.date);
        const bDate = new Date(b.metadata.date);
        return bDate.valueOf() - aDate.valueOf();
    });

    return articles;
}