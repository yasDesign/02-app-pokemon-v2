import { Link, Navbar, Spacer, Text, useTheme } from "@nextui-org/react"
import Head from "next/head"
import NextLink from 'next/link'

const Layout = ({children, title}) => {
    const {theme}=useTheme()
    return (
        <>
        <Head>
            <title>{title}</title>
        </Head>
            <Navbar css={{background:theme.colors.gray200.value}}>
               
                    <NextLink href="/" passHref>
                        <Link>
                            <Text h2>P</Text>
                            <Text h3>okemon</Text>
                        </Link>
                    </NextLink>               
                <Spacer/>
                <NextLink href="/favorites" passHref>
                    <Link>
                        <Text h5>Favorites</Text>
                    </Link>
                </NextLink>
            </Navbar>
            <main>
            {children}
            </main>
        </>
    )
}

export default Layout