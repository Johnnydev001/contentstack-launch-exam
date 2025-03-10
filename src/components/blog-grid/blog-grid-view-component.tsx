import {JSX} from "react";
import {BlogCardComponent} from "@/components/blog-card/blog-card-component";
import {BlogCardType} from "@/types/types";

export const BlogGridViewComponent = ({blogPosts = []}: {blogPosts: BlogCardType[]}) => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts && blogPosts?.map((post: JSX.IntrinsicAttributes & BlogCardType) => (
                <BlogCardComponent key={post?.uid} {...post} />
            ))}
        </ul>
    )
}