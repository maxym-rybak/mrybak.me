import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme: Theme) =>
	createStyles({
		fullScreanImg: {
			minHeight: '100%',
			minWidth: theme.breakpoints.values.lg,
			width: '100%',
			height: 'auto',
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: -1,
			[theme.breakpoints.down('md')]: {
				left: '50%',
				marginLeft: -(theme.breakpoints.values.lg / 2),
			},
		},
		backdrop: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			opacity: '0.2',
			backgroundColor: '#125aa5',
			zIndex: -1,
		},
		greeting: {
			color: 'white',
			fontFamily: 'Montserrat-Light',
			fontSize: '1.5em',
			width: '9.5em',
			margin: 'auto',
			marginTop: '25vh',
		},
	}),
)

export default styles
