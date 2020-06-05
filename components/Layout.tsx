import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import classes from './Layout.module.scss'

type Props = {
	title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel='stylesheet' href='styles.css' />
		</Head>
		<header>
			<nav className={classes.nav_bar}>
				<Link href='/'>
					<a className={classes.nav_item}>Home</a>
				</Link>{' '}
				<Link href='/about'>
					<a>About</a>
				</Link>{' '}
			</nav>
		</header>
		{children}
	</div>
)

export default Layout
