import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import theme from '../pages/theme'
import makeStyles from './styles'

type Props = {
	title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => {
	const cl = makeStyles()
	const router = useRouter()

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div>
				<Head>
					<title>{title}</title>
					<meta charSet='utf-8' />
					<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				</Head>
				<Container>
					<header>
						<nav className={cl.navBar}>
							<Link href='/'>
								<a className={`${cl.navItem} ${router.pathname === '/' ? cl.active : ''}`}>Home</a>
							</Link>
							<Link href='/about'>
								<a className={`${cl.navItem} ${router.pathname === '/about' ? cl.active : ''}`}>About</a>
							</Link>
							{/* <Link href='/blog'>
							<a className={`${cl.navItem} ${router.pathname === '/blog' ? cl.active : ''}`}>Blog</a>
						</Link> */}
							<Link href='/contact'>
								<a className={`${cl.navItem} ${router.pathname === '/contact' ? cl.active : ''}`}>Contact</a>
							</Link>
						</nav>
					</header>
					{children}
				</Container>
			</div>
		</ThemeProvider>
	)
}

export default Layout
