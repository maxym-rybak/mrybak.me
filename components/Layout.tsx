import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, Menu, MenuItem, ButtonBase, Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import theme from '../styling/theme'
import makeStyles from '../styling/layoutMenuStyles'

type Props = {
	title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => {
	const cl = makeStyles()
	const router = useRouter()
	const routes = [
		{
			path: '/',
			name: 'home',
		},
		{
			path: '/contact',
			name: 'contact',
		},
	]
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const normal = (
		<nav className={cl.navBar}>
			{routes.map((route) => {
				return (
					<Link href={route.path}>
						<a className={`${cl.navItem} ${router.pathname === route.path ? cl.active : ''}`}>{route.name}</a>
					</Link>
				)
			})}
		</nav>
	)

	const mobile = (
		<nav className={cl.navBar}>
			<ButtonBase aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
				<MenuIcon />
			</ButtonBase>
			<Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				{routes.map((route) => {
					return (
						<MenuItem onClick={handleClose}>
							<Link href={route.path}>
								<a className={`${cl.navItem} ${router.pathname === route.path ? cl.active : ''}`}>{route.name}</a>
							</Link>
						</MenuItem>
					)
				})}
			</Menu>
		</nav>
	)

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
						<Hidden xsDown>{normal}</Hidden>
						<Hidden smUp>{mobile}</Hidden>
					</header>
					{children}
				</Container>
			</div>
		</ThemeProvider>
	)
}

export default Layout
