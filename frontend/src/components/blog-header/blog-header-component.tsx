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

            return <ul>
                {
                    mainNavigationLinks?.map((link: NavigationLinkType) =>
                        <Link  href={link?.href} className="text-sm font-medium hover:text-primary">
                            {link?.text}
                        </Link>

                    )
                }
            </ul>

        }

        return (
            <header className={'border-b-[1px]'}>
                <nav className={'container mx-auto px-4 py-4 flex items-center space-x-6'}>
                    <Link href={'/'} className={'font-bold text-xl'}>{blogName}</Link>
                    {mapMainNavigationLinks()}
                    <button onClick={handleSearch} className={'p-2 border-[1px] hover:text-primary text-sm'}>
                        {searchButtonText}
                    </button>

                </nav>
            </header>
        )

}