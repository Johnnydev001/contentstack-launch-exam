"use client";
import {Suspense, useEffect, useState} from "react";
import {getFooterRes} from "@/services/footer/footer-service";
import Link from "next/link";

export const BlogFooterComponent = () => {

    const [navigationLinks, setNavigationLinks] = useState([])
    const [copyright, setCopyright] = useState('')

    const mapNavigationLinks = () => {
        return (
            <nav className={'container mx-auto flex justify-center '}>
                <ul className={'flex space-x-2 justify-center'}>
                    {navigationLinks?.map((link) =>
                        <li className={'p-2 hover:text-primary text-sm cursor-pointer hover:text-sky-800 hover:font-bold'} key={link?.title}>
                            <Link  href={link?.href} >{link?.text}</Link>
                        </li>
                    )}
                </ul>
            </nav>
        )
    }

    const mapFooterResponse = (response) => {
        setCopyright(response?.copyright)
        setNavigationLinks(response?.navigation?.links?.map(elem => {
            return {
                text: elem?.links_block?.link?.title,
                href: elem?.links_block?.link?.href
            }
        }))

    }

    async function fetchData() {
        try {
            const entryRes = await getFooterRes();
            if (!entryRes) throw new Error('Status code 404');

            mapFooterResponse(entryRes[0])
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <footer className="border-t py-12 mt-12 container mx-auto px-4 text-center grid grid-cols-2 justify-center">
            <Suspense fallback={<div>Loading...</div>}>
                <p className={'text-sm'}>{copyright}</p>
                {mapNavigationLinks()}
            </Suspense>

        </footer>
    )
}