"use client";
import {JSX, useEffect, useState} from "react";
import Link from "next/link";
import {getNavigationRes} from "@/services/header/header-service";

type NavigationLinkType = {
    href: string;
    text: string;
}

export const BlogHeader = (): JSX.Element => {

        const [logo, setLogo] = useState('')
        const [navigationLinks, setNavigationLinks] = useState([])
        const [action, setAction] = useState('')

        const mapNavigationResponse = (response) => {
            setLogo(response?.logo || '')
            setNavigationLinks(response?.navigation?.links?.map(elem => {
                return {
                    text: elem?.links_block?.link?.title,
                    href: elem?.links_block?.link?.href
                }
            }))
            setAction(response?.action?.children[0]?.children[0]?.text || '')

        }

        async function fetchData() {
            try {
                const entryRes = await getNavigationRes();
                if (!entryRes) throw new Error('Status code 404');

                mapNavigationResponse(entryRes[0])
            } catch (error) {
                console.error(error);
            }
        }

        useEffect(() => {
            fetchData();
        }, []);

        // @ts-ignore
        const handleSearch = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e?.preventDefault()
            console.log('Search button clicked')
        }

        const mapMainNavigationLinks = () => {

            return <ul role={'navigation'} className={'flex justify-center space-x-10 w-full'}>
                {
                    navigationLinks?.map((link: NavigationLinkType) =>
                      <li key={link?.text}>
                          <Link  href={link?.href} className="text-md p-2 hover:text-primary  cursor-pointer hover:text-sky-800 hover:font-bold">
                              {link?.text}
                          </Link>
                      </li>
                    )
                }
            </ul>
        }
        return (
            <header className={'border-b-[1px] w-full container mx-auto py-4 flex justify-between'}>
                <nav className={'w-full flex justify-between px-4 py-4 items-center space-x-6'}>
                    <Link href={'/'} className={'font-bold text-xl'}>{logo}</Link>
                    {mapMainNavigationLinks()}
                    <button onClick={handleSearch} className={'p-2 border-[1px] border-gray-200 rounded-2xl hover:text-primary text-md cursor-pointer hover:bg-sky-800 hover:text-white'}>
                        {action}
                    </button>

                </nav>
            </header>
        )
}