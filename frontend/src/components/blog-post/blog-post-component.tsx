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

  //
  // const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // })
  //
  //   return (
  //
  //
  //       <div className="min-h-screen">
  //         <main className="mx-auto px-4 py-12">
  //           <article className="max-w-3xl mx-auto">
  //
  //             <div className="mb-12">
  //               <span className="mb-24 p-2 rounded-full bg-gray-200 text-xs">
  //                 {post?.category}
  //               </span>
  //               <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
  //               <div className="flex items-center gap-4 text-sm">
  //                 <div className="flex items-center">
  //                   <Image
  //                       src={post?.author?.avatar }
  //                       alt={post?.author?.name}
  //                       width={24}
  //                       height={24}
  //                       className="rounded-full mr-2"
  //                   />
  //                   <span>{post.author.name}</span>
  //                 </div>
  //                 <div className="flex items-center gap-1">
  //                   <span>•</span>
  //                   <span>{formattedDate}</span>
  //                 </div>
  //
  //               </div>
  //             </div>
  //
  //             <div className="aspect-[16/9] relative mb-8 rounded-lg overflow-hidden">
  //               <Image
  //                   src={post?.cover_image || "/placeholder.svg"}
  //                   alt={post?.title}
  //                   fill
  //                   className="object-cover"
  //                   priority
  //               />
  //             </div>
  //
  //             <div className="font-large max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post?.content! }} />
  //
  //             <ul className="flex flex-wrap gap-2 mb-8">
  //               {post?.tags?.map((tag: string) => (
  //                   <li key={tag} className={'text-xs p-2 border-[1px] rounded-full'}>
  //                     {tag}
  //                   </li>
  //               ))}
  //             </ul>
  //
  //             <div className="border-t  py-8 my-8">
  //               <div className="flex items-center gap-4">
  //                 <Image
  //                     src={post?.author?.avatar || "/placeholder.svg"}
  //                     alt={post?.author?.name}
  //                     width={64}
  //                     height={64}
  //                     className="rounded-full"
  //                 />
  //                 <h3 className="font-bold">{post?.author?.name}</h3>
  //
  //               </div>
  //             </div>
  //
  //           </article>
  //         </main>
  //
  //         <footer className="border-t py-12 mt-12">
  //           <div className="mx-auto px-4 text-center">
  //             <p>© Copyright João Saraiva.</p>
  //           </div>
  //         </footer>
  //       </div>
  //   )


}