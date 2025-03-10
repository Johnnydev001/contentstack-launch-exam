"use client";
import { useEffect, useState} from "react";
import {BlogGridViewComponent} from "@/components/blog-grid/blog-grid-view-component";
import {getBlogPostsRes} from "@/services/post/post-service";
import {BlogCardType} from "@/types/types";

export const BlogGridComponent = () => {

    const [blogPosts, setBlogPosts] = useState<Array<BlogCardType>>([]);

    const mapBlogPostsResponse = (response: any) => {

        const mappedBlogs: Array<BlogCardType> = []

        response?.forEach((elem: { uid: any; cover_image: { url: any; }; title: any; description: any; category: any; date: any; content: any; modular_blocks: { tags_block: { tag: any; }; }[]; }) => {
            mappedBlogs.push({
                id: elem?.uid,
                cover_image: elem?.cover_image?.url,
                title: elem?.title,
                description: elem?.description,
                category: elem?.category,
                date: elem?.date,
                author: {
                    name: '',
                    avatar: ''
                },
                content: elem?.content,
                tags: elem?.modular_blocks?.map((block: { tags_block: { tag: any; }; }) => block?.tags_block?.tag),
                url: `/posts/${elem?.uid}`,
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