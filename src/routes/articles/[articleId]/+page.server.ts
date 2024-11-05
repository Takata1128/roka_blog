import path from 'path';
import type { PageServerLoad } from "./$types";
import { readFileSync } from 'fs';
import markdown from 'markdown-it';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { getArticleInfo } from '$lib/getArticles';

export const load: PageServerLoad = async ({ params }) => {
    const { articleId: articleIdStr } = params;

    const filePath = path.resolve('articles', `${articleIdStr}.md`);

    const fileContent: string = readFileSync(filePath, 'utf8');

    const parsedMatter = matter(fileContent)
    const mdParser = new markdown();
    const htmlContent = mdParser.render(parsedMatter.content);

    const metadata = parsedMatter.data;
    if (metadata.date instanceof Date) {
        metadata.date = format(metadata.date, 'yyyy-MM-dd');
    }

    const articleId = parseInt(articleIdStr);

    const prevArticleId = articleId - 1;
    const prevArticleInfo = getArticleInfo(prevArticleId);

    const nextArticleId = articleId + 1;
    const nextArticleInfo = getArticleInfo(nextArticleId);

    return {
        params,
        htmlContent,
        metadata,
        prevArticleInfo,
        nextArticleInfo,
    };
};