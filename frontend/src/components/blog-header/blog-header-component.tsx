"use client";
import {JSX} from "react";
import Link from "next/link";

type NavigationLinkType = {
    href: string;
    text: string;
}

export const BlogHeader = ({blogName = '', mainNavigationLinks = [], searchButtonText = ''}: {blogName: string,  mainNavigationLinks: Array<NavigationLinkType>, searchButtonText: string}): JSX.Element => {

        // @ts-ignore
        const handleSearch = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e?.preventDefault()
            console.log('Search button clicked')
        }

        const mapMainNavigationLinks = () => {

            return <ul role={'navigation'} className={'flex justify-center space-x-10 w-full'}>
                {
                    mainNavigationLinks?.map((link: NavigationLinkType) =>
                      <li key={link?.text}>
                          <Link  href={link?.href} className="text-sm font-medium hover:text-primary hover:border-b-[1px] hover:border-b-sky-800">
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
                    <Link href={'/'} className={'font-bold text-xl'}>{blogName}</Link>
                    {mapMainNavigationLinks()}
                    <button onClick={handleSearch} className={'p-2 border-[1px] border-gray-200 rounded-2xl hover:text-primary text-sm cursor-pointer hover:bg-sky-800 hover:text-white'}>
                        {searchButtonText}
                    </button>

                </nav>
            </header>
        )
}