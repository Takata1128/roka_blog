import path from 'path';
import type { PageServerLoad } from "./$types";
import { readFileSync } from 'fs';
import markdown from 'markdown-it';
import matter from 'gray-matter';
import { format } from 'date-fns';

export const load: PageServerLoad = async ({ params }) => {
    const { articleId } = params;

    const filePath = path.resolve('articles', `${articleId}.md`);

    const fileContent: string = readFileSync(filePath, 'utf8');

    const parsedMatter = matter(fileContent)
    const mdParser = new markdown();
    const htmlContent = mdParser.render(parsedMatter.content);

    const metadata = parsedMatter.data;
    if (metadata.date instanceof Date) {
        metadata.date = format(metadata.date, 'yyyy-MM-dd');
    }

    return {
        params,
        htmlContent,
        metadata
    };
};