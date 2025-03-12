"use client";
import {BlogGridComponent} from "@/components/blog-grid/blog-grid-component";
import {Suspense, useEffect, useState} from "react";
import {getHeadingRes} from "@/services/heading/heading-service";

export default function Home() {

    const [mainHeadings, setMainHeadings] = useState({
        mainHeading: '',
        subHeading: ''
    });

    const [newsletterHeadings, setNewsletterHeadings] = useState({
        mainHeading: '',
        subHeading: ''
    });

    const mapHeadingsResponse = (response: any) => {

        setMainHeadings((prev) => ({
            ...prev,
            mainHeading: response?.headings?.children[0]?.children[0]?.text,
            subHeading: response?.headings?.children[1]?.children[0]?.text,
        }))
    }

    const mapNewsletterHeadingsResponse = (response: any) => {

        setNewsletterHeadings((prev) => ({
            ...prev,
            mainHeading: response?.headings?.children[0]?.children[0]?.text,
            subHeading: response?.headings?.children[1]?.children[0]?.text,
        }))
    }

    async function fetchData() {
        try {
            const mainHeadingsRes = await getHeadingRes({entryUrl: '/'});
            const newsletterHeadingsRes = await getHeadingRes({entryUrl: '/newsletter'});

            if (!mainHeadingsRes || !newsletterHeadingsRes) throw new Error('Status code 404');

            mapHeadingsResponse(mainHeadingsRes)
            mapNewsletterHeadingsResponse(newsletterHeadingsRes)

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
        <>
            <section className="mb-16 grid gap-y-14">
                <div className=" text-center grid gap-y-5">
                    <h1 className="text-4xl font-bold mb-4 text-[#3E2723]">{mainHeadings?.mainHeading}</h1>
                    <p className="max-w-2xl mx-auto text-[#5A5A5A]">
                        {mainHeadings?.subHeading}
                    </p>
                </div>
                <Suspense fallback={<div>Loading recipes...</div>} >
                    <BlogGridComponent />
                </Suspense>
            </section>

            <section className="border-t py-16 ">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">{newsletterHeadings?.mainHeading}</h2>
                    <p className="mb-6">
                        {newsletterHeadings?.subHeading}
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
