import {Suspense} from "react";
import {BlogPostComponent} from "@/components/blog-post/blog-post-component";

export default async function BlogPostPage() {

  return (
    <>
        <section className="mb-16 grid gap-y-14">
            <Suspense fallback={<div>Loading post...</div>} >
                <BlogPostComponent />
            </Suspense>
        </section>
        <section className="border-t py-16 ">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
                <p className="mb-6">
                    Get the latest recipes sent straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm bg-white"
                    />
                    <button className={'sm:w-auto p-2 border-[1px] bg-white border-gray-200 rounded-2xl hover:text-primary text-sm cursor-pointer hover:bg-[#E8B448] hover:text-white'}>
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    </>
  );
}
