import { Navbar, Spacer, Text, useTheme } from "@nextui-org/react"
import Head from "next/head"
import NextLink from 'next/link'

const origin=typeof window==='undefined'? '':window.location.origin

const Layout = ({children, title}) => {
    const {theme}=useTheme()
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={`Pokemon ${title}!`} />
            <meta property="og:description" content={`Descripcion de ${title}`} />
            <meta property="og:image" content={`${origin}/img/background.jpg`} />
        </Head>
            <Navbar css={{background:theme.colors.gray200.value}}>
               
                    <NextLink href="/" passHref>
                        <div style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
                            <Text h2>P</Text>
                            <Text h3>okemon</Text>
                            </div>
                    </NextLink>               
                <Spacer/>
                <NextLink href="/favorites" passHref>
                    
                        <Text color={'white'} css={{cursor:'pointer'}}>Favorites</Text>
                    
                </NextLink>
            </Navbar>
            <main>
            {children}
            </main>
        </>
    )
}

export default Layout