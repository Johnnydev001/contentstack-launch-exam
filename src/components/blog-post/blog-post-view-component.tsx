import {BlogCardType} from "@/types/types";
import Image from "next/image";

export const BlogPostViewComponent = ({post = {
    uid: "",
    cover_image: "",
    title: "",
    description: "",
    category: "",
    date: "",
    author: {
        name: "",
        avatar: ""
    },
    url: ""
}}: {post: BlogCardType}) => {

    return (
        <div className="min-h-screen">
            <main className="mx-auto px-4 py-12">
                <article className="max-w-3xl mx-auto">

                    <div className="mb-12">
                <span className="mb-24 p-2 rounded-full bg-amber-800 text-white text-xs">
                  {post?.category}
                </span>
                        <h1 className="text-4xl font-bold my-4">{post?.title}</h1>
                        <div className="flex items-center gap-4 text-sm">
                            {post?.author?.avatar && post?.author?.name && (
                                <div className="flex items-center">
                                    <Image
                                        src={post?.author?.avatar }
                                        alt={post?.author?.name}
                                        width={24}
                                        height={24}
                                        className="rounded-full mr-2"
                                    />
                                    <span>{post?.author?.name}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-1">
                                <span>•</span>
                                <span>{post?.date}</span>
                            </div>

                        </div>
                    </div>
                    { post?.cover_image &&

                        <div className="aspect-[16/9] relative mb-8 rounded-lg overflow-hidden">
                            <Image
                                src={post?.cover_image}
                                alt={post?.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                    }
                    <div className="font-large max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post?.content! }} />

                    <ul className="flex flex-wrap gap-2 mb-8">
                        {post?.tags?.map((tag: string) => (
                            <li key={tag} className={'text-xs p-2 border-[1px] rounded-full bg-amber-800 text-white'}>
                                {tag}
                            </li>
                        ))}
                    </ul>

                    { post?.author?.avatar && post?.author?.name && (
                        <div className="border-t py-8 my-8">
                            <div className="flex items-center gap-4">
                                <Image
                                    src={post?.author?.avatar}
                                    alt={post?.author?.name}
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                />
                                <h3 className="font-bold">{post?.author?.name}</h3>

                            </div>
                        </div>
                    )}

                </article>
            </main>

        </div>

    )

}