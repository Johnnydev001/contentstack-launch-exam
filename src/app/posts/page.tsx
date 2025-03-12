import {BlogGridComponent} from "@/components/blog-grid/blog-grid-component";
import {Suspense} from "react";

export default async function BlogPostsPage() {

    return (
        <>
            <section className="mb-16 grid gap-y-14">
                <div className=" text-center grid gap-y-5">
                    <h1 className="text-4xl font-bold mb-4 text-[#3E2723]">Recipes blog</h1>
                    <p className="max-w-2xl mx-auto text-[#5A5A5A]">
                        Discover simple, tasty recipes that anyone can make. From quick weeknight dinners to impressive dinner
                        party dishes.
                    </p>
                </div>
                <Suspense fallback={<div>Loading recipes...</div>} >
                    <BlogGridComponent />
                </Suspense>
            </section>

        </>
    );
}
