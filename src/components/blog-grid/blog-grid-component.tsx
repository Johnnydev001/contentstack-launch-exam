"use client";
import { useEffect, useState} from "react";
import {BlogGridViewComponent} from "@/components/blog-grid/blog-grid-view-component";
import {getBlogPostsRes} from "@/services/post/post-service";
import {BlogCardType} from "@/types/types";

export const BlogGridComponent = () => {

    const [blogPosts, setBlogPosts] = useState<Array<BlogCardType>>([]);

    const mapBlogPostsResponse = (response: any) => {

        const mappedBlogs: Array<BlogCardType> = []

        response?.forEach((elem: { url: string; uid: any; cover_image: { url: any; }; title: any; description: any; category: any; date: any; author: { name: string, avatar: { permanent_url: any; }; }[]; content: any; modular_blocks: { tags_block: { tag: any; }; }[]; } ) => {
            mappedBlogs.push({
                uid: elem?.uid,
                cover_image: elem?.cover_image?.url,
                title: elem?.title,
                description: elem?.description,
                category: elem?.category,
                date: elem?.date,
                author: {
                    name: elem?.author[0]?.name,
                    avatar: elem?.author[0]?.avatar?.permanent_url
                },
                content: elem?.content,
                tags: elem?.modular_blocks?.map((block: { tags_block: { tag: any; }; }) => block?.tags_block?.tag),
                url: elem?.url,
            })
        })
        setBlogPosts(mappedBlogs)

    }

    async function fetchData() {
        try {
            const entryRes = await getBlogPostsRes();
            if (!entryRes) throw new Error('Status code 404');

            mapBlogPostsResponse(entryRes)

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);



    return <BlogGridViewComponent blogPosts={blogPosts} />
}