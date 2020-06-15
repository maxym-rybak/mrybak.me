import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const leftPanelColor = 'rgba(0, 191, 199, 0.4)'
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
			fontSize: '1.5em',
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			[theme.breakpoints.down('sm')]: {
				fontSize: '1.3em',
			},
		},
		photo: {
			width: '100%',
			height: 'auto',
			border: `2px solid ${theme.palette.text.primary}`,
			animationName: `$appearingAnimation`,
			animationDuration: '2s',
			opacity: 1,
		},
		chip: { width: '100%', animationName: `$appearingAnimation`, animationDuration: '3s', opacity: 1 },
		topChip: {
			width: '5em',
			height: '5em',
			position: 'absolute',
			animationName: `$appearingAnimation`,
			animationDuration: '2s',
			opacity: 1,
		},
		'@keyframes appearingAnimation': {
			'0%': {
				opacity: 0,
			},
			'25%': {
				opacity: 0,
			},
			'100%': {
				opacity: 1,
			},
		},
		leftFrame: {
			position: 'fixed',
			top: '10vh',
			left: 0,
			bottom: '10vh',
			height: '80vh',
			width: '40vw',
			backgroundColor: leftPanelColor,
			[theme.breakpoints.up('sm')]: {
				animationName: `$leftFrameAnimation`,
				animationDuration: '1.5s',
			},
			zIndex: -1,
		},
		leftFrameContent: {
			alignItems: 'center',
			height: 'calc(100vh - 10em)',
			display: 'flex',
			[theme.breakpoints.down('sm')]: {
				height: 'auto',
			},
		},
		'@keyframes leftFrameAnimation': {
			'0%': {
				width: '100vw',
				backgroundColor: leftPanelColor,
			},
			'25%': {
				width: '100vw',
				backgroundColor: leftPanelColor,
			},
			'70%': {
				width: '36vw',
			},
			'100%': {
				width: '40vw',
				backgroundColor: leftPanelColor,
			},
		},
		triangle: {
			position: 'absolute',
			left: '40vw',
			bottom: '10vh',
			width: 0,
			height: 0,
			borderTop: '40vh solid transparent',
			borderLeft: `20vw solid ${leftPanelColor}`,
			borderBottom: '40vh solid transparent',
			animationName: `$triangleAnimation`,
			animationDuration: '1.5s',
			zIndex: -1,
		},
		'@keyframes triangleAnimation': {
			'0%': {
				left: '100vw',
			},
			'25%': {
				left: '100vw',
			},
			'70%': {
				left: '36vw',
			},
			'100%': {
				left: '40vw',
			},
		},
		socialLinks: {
			height: 'calc(100vh - 10em)',
			width: '10em',
			display: 'flex',
			flexFlow: 'column',
			justifyContent: 'center',
			alignItems: 'flex-end',
			[theme.breakpoints.down('sm')]: {
				flexFlow: 'row',
				height: 'auto',
			},
		},
		sociaLinksItem: {
			width: '3em',
			height: '3em',
			padding: '0.6em',
			animationName: `$appearingAnimation`,
			animationDuration: '2s',
			'&:hover': {
				border: `0.5px dashed ${theme.palette.text.primary}`,
			},
		},
		contacts: {
			fontSize: '1.5em',
			[theme.breakpoints.down('sm')]: {
				fontSize: '1.2em',
			},
		},
	}),
)

export default styles
