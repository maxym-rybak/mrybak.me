import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import useTheme from './theme'
import makeStyles from './styles'

type Props = {
	title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => {
	const theme = useTheme()
	const cl = makeStyles()
	return (
		<ThemeProvider theme={theme}>
		<CssBaseline />
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='stylesheet' href='styles.css' />
			</Head>
			<header>
				<nav className={cl.navBar}>
					<Link href='/'>
						<a className={`${cl.navItem} ${cl.active}`}>Home</a>
					</Link>
					<Link href='/about'>
						<a className={cl.navItem}>About me</a>
					</Link>
					<Link href='/blog'>
						<a className={cl.navItem}>Blog</a>
					</Link>
					<Link href='/contact'>
						<a className={cl.navItem}>Contact</a>
					</Link>
				</nav>
			</header>
			{children}
		</div>
		</ThemeProvider>
	)
}

export default Layout
