import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme: Theme) =>
	createStyles({
		navBar: {
			display: 'flex',
			justifyContent: 'flex-end',
			margin: '1em',
		},
		navItem: {
			margin: '0.5em',
			textDecoration: 'none',
			padding: '0.2em',
			color: 'white',
			textTransform: 'uppercase',
		},
		active: {
			borderBottom: '2px solid white',
		},
	}),
)

export default styles
