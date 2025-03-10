"use client";
import {useEffect, useState} from "react";
import {getBlogPostByUidRes} from "@/services/post/post-service";
import {usePathname} from "next/navigation";
import {BlogCardType} from "@/types/types";
import {BlogPostViewComponent} from "@/components/blog-post/blog-post-view-component";

export const BlogPostComponent = () => {

  const [blogPost, setBlogPost] = useState<BlogCardType>({
    author: {
        avatar: "",
        name: ""
    },
    category: "",
    content: undefined,
    cover_image: '',
    date: "",
    description: "",
    tags: undefined,
    title: "",
    uid: "",
    url: ""
  });

  const entryUrl = usePathname()

  const mapContentToHtml = (content: { children: { type: string; children: any[]; }[]; }) => {
    let html= `<article class="grid gap-y-2">`

      html  += content?.children.map((elem: { type: string; children: any[]; }) => {
      if (elem.type === 'p') {
        return `<p class="text-md font-bold">${elem.children[0].text}</p>`
      }
      if (elem.type === 'ul') {
        return `<ul>${elem.children.map((li) => `<li>${li.children[0].text}</li>`).join('')}</ul>`
      }
      if (elem.type === 'ol') {
        return `<ol>${elem.children.map((li) => `<li>${li.children[0].text}</li>`).join('')}</ol>`
      }
    }).join('')
    html += `</article>`
    return html
  }

  const mapBlogPostResponse = (response: { uid: any; cover_image: { url: any; }; title: any; description: any; category: any; date: any; author: { name: string, avatar: { permanent_url: any; }; }[]; content: any; modular_blocks: { tags_block: { tag: any; }; }[]; url: any; }) => {

    const mappedBlogResponse = {
      uid: response?.uid,
      cover_image: response?.cover_image?.url,
      title: response?.title,
      description: response?.description,
      category: response?.category,
      date: new Date(response?.date).toLocaleDateString(),
      author: {
        name: response?.author[0]?.name,
        avatar: response?.author[0]?.avatar?.permanent_url
      },
      content: mapContentToHtml(response?.content),
      tags: response?.modular_blocks?.map((block: { tags_block: { tag: any; }; }) => block?.tags_block?.tag),
      url: response?.url,
    }

    setBlogPost(mappedBlogResponse)

  }
  const fetchData = async () => {

    try {
      const entryRes = await getBlogPostByUidRes({entryUrl: entryUrl});
      mapBlogPostResponse(entryRes)
    } catch (e){
      console.error("Failed to get post data")
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <BlogPostViewComponent post={blogPost}/>
  )

}