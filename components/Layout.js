import Link from 'next/link'
import Head from 'next/head'
import Title from './Title'
const Layout = ({children, title="Crypto App"}) => {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <Link href="/" passHref>
                <a>
                    <Title />
                </a>
            </Link>
            <main>{children}</main>
        </div>

    )
}

export default Layout