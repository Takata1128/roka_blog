import { existsSync, readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { format } from "date-fns";

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

export function getArticleInfo(articleId: number): ArticleInfo | null {
    const filePath = path.resolve('articles', `${articleId}.md`);

    if (!existsSync(filePath)) {
        return null;
    }

    const fileContent: string = readFileSync(filePath, 'utf8');

    const parsedMatter = matter(fileContent)

    const metadata = parsedMatter.data;
    if (metadata.date instanceof Date) {
        metadata.date = format(metadata.date, 'yyyy-MM-dd');
    }

    return { slug: articleId.toString(), metadata: metadata as Metadata };
}