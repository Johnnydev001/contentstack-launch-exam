export type NavigationLinkType = {
    href: string;
    text: string;
}

type AuthorType = {
    name: string;
    avatar: string;
}
export type BlogCardType = {
    uid: string;
    cover_image: string;
    title: string;
    description: string;
    category: string;
    date: string;
    author: AuthorType;
    content?: string | TrustedHTML;
    tags?: Array<string>;
    url: string;
}