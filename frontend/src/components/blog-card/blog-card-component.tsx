import Link from "next/link";
import Image from "next/image";
import {BlogCardType} from "@/types/types";


export const BlogCardComponent = ({uid = '', cover_image = '', title= '', description = '', category = '', date = '', author= {name: '', avatar: ''}, url = ''}: BlogCardType) => {

    const formattedDate = new Date(date).toLocaleDateString()
    return (
        <li key={uid} className={'p-4 border-[1px] rounded-md border-gray-200 bg-[#EDE9E2] hover:scale-105 hover:duration-700 hover: hover:shadow-[#5A5A5A]'}>
            <Link href={url} className={'h-full overflow-hidden hover:shadow-md transition-shadow'}>
                {cover_image && (
                    <div className="aspect-video relative overflow-hidden">
                        <Image
                            src={cover_image}
                            alt={title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                        />
                    </div>
                )}

                <div className="p-4 pb-2">
                    <div className="flex items-center align-middle justify-between mb-2">
                            <span className="text-sm text-[#8F9779]">
                                {category}
                            </span>
                        <span className="text-xs text-[#8F9779]">{formattedDate}</span>
                    </div>
                    <h3 className="font-bold text-xl text-[#3E2723]">{title}</h3>

                </div>

                <div className={'p-4 pt-2'}>
                    <p className="text-sm line-clamp-3 text-[#5A5A5A]">{description}</p>

                </div>

                {author?.avatar && author?.name && (
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
                )}

            </Link>

        </li>


    )
}