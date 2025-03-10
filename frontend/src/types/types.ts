export type NavigationLinkType = {
    href: string;
    text: string;
}

type AuthorType = {
    name: string;
    avatar: string;
}
export type BlogCardType = {
    id: string;
    cover_image: any;
    title: string;
    description: string;
    category: string;
    date: string;
    author: AuthorType;
    content?: string | TrustedHTML;
    tags?: Array<string>;
    url: string;
}