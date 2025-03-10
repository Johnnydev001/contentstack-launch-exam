"use client";
import {Suspense, useEffect, useState} from "react";
import {getFooterRes} from "@/services/footer/footer-service";
import Link from "next/link";
import {NavigationLinkType} from "@/types/types";


type FooterResponseType = {
    navigation: any;
    copyright: string;
}

export const BlogFooterComponent = () => {

    const [navigationLinks, setNavigationLinks] = useState<Array<NavigationLinkType>>([])
    const [copyright, setCopyright] = useState('')

    const mapNavigationLinks = () => {
        return (
            <nav className={' mx-auto flex justify-center '}>
                <ul className={'flex space-x-2 justify-center'}>
                    {navigationLinks?.map((link) =>
                        <li className={'p-2 hover:text-primary text-sm cursor-pointer hover:text-[#E8B448] hover:font-bold'} key={link?.text}>
                            <Link  href={link?.href} >{link?.text}</Link>
                        </li>
                    )}
                </ul>
            </nav>
        )
    }

    const mapFooterResponse = (response: FooterResponseType) => {
        setCopyright(response?.copyright)
        setNavigationLinks(response?.navigation?.links?.map((elem: { links_block: { link: { title: string; href: string; }; }; }) => {
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
        <footer className="border-t py-6 items-center flex  mx-auto px-4 text-center  grid-cols-2 justify-center bg-white">
            <Suspense fallback={<div>Loading...</div>}>
                <p className={'text-sm'}>{copyright}</p>
                {mapNavigationLinks()}
            </Suspense>

        </footer>
    )
}