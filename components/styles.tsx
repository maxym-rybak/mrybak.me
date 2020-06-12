import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme: Theme) =>
	createStyles({
		navBar: {
			display: 'flex',
			justifyContent: 'flex-end',
			margin: '1em 0',
		},
		navItem: {
			margin: '0.5em',
			textDecoration: 'none',
			padding: '0.2em',
			color: '#EDFFD9',
			textTransform: 'uppercase',
		},
		active: {
			borderBottom: '2px solid #EDFFD9',
		},
	}),
)

export default styles
