import Link from "next/link";
import Image from "next/image";

type AuthorType = {
    name: string;
    avatar: string;
}
export type BlogCardType = {
    id: string;
    coverImage: any;
    title: string;
    description: string;
    category: string;
    date: string;
    author: AuthorType;
    content?: string | TrustedHTML;
    tags?: Array<string>;
    url: string;
}
export const BlogCardComponent = ({id = '', coverImage = null, title= '', description = '', category = '', date = '', author= {name: '', avatar: ''}, url = ''}: BlogCardType) => {

    const formattedDate = new Date(date).toLocaleDateString()
    return (
        <li key={id} className={'p-4 border-[1px] rounded-md border-gray-200'}>
            <Link href={url} className={'h-full overflow-hidden hover:shadow-md transition-shadow'}>
                <div className="aspect-video relative overflow-hidden">
                        <Image
                            src={coverImage}
                            alt={title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                        />
                </div>
                <div className="p-4 pb-2">
                    <div className="flex items-center justify-between mb-2">
                            <span className="text-xs">
                                {category}
                            </span>
                        <span className="text-xs">{formattedDate}</span>
                    </div>
                    <h3 className="font-bold text-xl">{title}</h3>

                </div>

                <div className={'p-4 pt-2'}>
                    <p className="text-sm line-clamp-3">{description}</p>

                </div>

                <div className={'p-4 pt-0 flex items-center'}>
                    <Image
                        src={author?.avatar}
                        alt={author?.name}
                        width={24}
                        height={24}
                        className="rounded-full mr-2"
                    />
                    <span className="text-xs">{author.name}</span>
                </div>
            </Link>

        </li>


    )
}