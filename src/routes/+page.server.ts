import { getArticles } from "$lib/getArticles";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const articles = getArticles();
    return {
        articles
    };
};