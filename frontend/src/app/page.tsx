import {BlogHeader} from "@/components/blog-header/blog-header-component";
import {BlogGridComponent} from "@/components/blog-grid/blog-grid-component";
import {Suspense} from "react";
import {BlogFooterComponent} from "@/components/blog-footer/blog-footer-component";

export default async function Home() {

  return (
      <div className="mx-0 px-0">
        <BlogHeader />

        <main className=" w-full px-4 pt-12">
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
      </main>
      <BlogFooterComponent/>
    </div>
  );
}
