
interface Metadata {
    title: string;
    date: Date;
    category: string;
}

interface ArticleInfo {
    slug: string;
    metadata: Metadata;
}