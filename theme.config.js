export default {
    github: 'https://github.com/cytronicoder/mangrove-sais',
    docsRepositoryBase: 'https://github.com/cytronicoder/mangrove-sais/blob/master',
    titleSuffix: ' – SAIS Service CCA',
    logo: (
        <>
            <span className="mr-2 font-extrabold hidden md:inline">SAIS Service CCA</span>
            <span className="text-gray-600 font-normal hidden md:inline">
                x LooLa Eco Adventure
            </span>
        </>
    ),
    head: (
        <>
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Language" content="en" />
            <meta name="description" content="An overview of the mangrove planting project at SAIS (in collaboration with LooLa Eco Adventure)" />
            <meta name="og:description" content="An overview of the mangrove planting project at SAIS (in collaboration with LooLa Eco Adventure)" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://mangrove-sais.vercel.app/og.png" />
            <meta name="twitter:site:domain" content="mangrove-sais.vercel.app" />
            <meta name="twitter:url" content="https://mangrove-sais.vercel.app" />
            <meta name="og:title" content="An overview of the mangrove planting project at SAIS (in collaboration with LooLa Eco Adventure)" />
            <meta name="og:image" content="https://mangrove-sais.vercel.app/og.png" />
            <meta name="apple-mobile-web-app-title" content="SAIS Service CCA" />
        </>
    ),
    search: true,
    prevLinks: true,
    nextLinks: true,
    footer: true,
    footerEditLink: 'Edit this page on GitHub',
    footerText: <>MIT {new Date().getFullYear()} © Zeyu Yao.</>,
    unstable_faviconGlyph: '🌴',
}
