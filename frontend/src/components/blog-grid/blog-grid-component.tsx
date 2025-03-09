"use client";
import { useEffect, useState} from "react";
import {BlogGridViewComponent} from "@/components/blog-grid/blog-grid-view-component";
import {getBlogPostsRes} from "@/services/post/post-service";

export const BlogGridComponent = () => {

    const [blogPosts, setBlogPosts] = useState<any>();

    async function fetchData() {
        try {
            const entryRes = await getBlogPostsRes();
            if (!entryRes) throw new Error('Status code 404');
            setBlogPosts(entryRes);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);



    return <BlogGridViewComponent blogPosts={blogPosts} />
}