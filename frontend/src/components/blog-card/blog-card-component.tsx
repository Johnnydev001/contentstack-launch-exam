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
}
export const BlogCardComponent = ({id = '', coverImage = null, title= '', description = '', category = '', date = '', author= {name: '', avatar: ''}}: BlogCardType) => {

    const formattedDate = new Date(date).toLocaleDateString()
    return (
        <li key={id}>
            <Link href={`/blog/${id}`}>
                <div className="aspect-video relative overflow-hidden">

                        <Image
                            src={coverImage}
                            alt={title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                        />
                </div>
                <div>
                    <div className="flex items-center justify-between mb-2">
                            <span className="text-xs">
                                {category}
                            </span>
                        <span className="text-xs">{formattedDate}</span>
                    </div>

                </div>

                <h3 className="font-bold text-xl leading-tight">{title}</h3>

                <p className="text-sm line-clamp-3">{description}</p>

                <div>
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