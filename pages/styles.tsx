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
			color: '#EDFFD9',
			fontSize: '1.5em',
			width: '100%',
			paddingLeft: '0.5em',
			paddingTop: '0.5em',
		},
		photo: {
			width: '100%',
			height: 'auto',
			border: '2px solid #EDFFD9',
			animationName: `$appearingAnimation`,
			animationDuration: '4s',
			opacity: 1,
		},
		line: {
			height: '15em',
			width: '3px',
			backgroundColor: '#E5FACF',
			marginBottom: '3em',
			animationName: `$appearingAnimation`,
			animationDuration: '4s',
			opacity: 1,
		},
		chip: { width: '100%', animationName: `$appearingAnimation`, animationDuration: '4s', opacity: 1 },
		topChip: {
			width: '5em',
			height: '5em',
			position: 'absolute',
			animationName: `$appearingAnimation`,
			animationDuration: '4s',
			opacity: 1,
		},
		'@keyframes appearingAnimation': {
			'0%': {
				opacity: 0,
			},
			'50%': {
				opacity: 0,
			},
			'100%': {
				opacity: 1,
			},
		},
		leftFrame: {
			position: 'fixed',
			top: 0,
			left: 0,
			bottom: 0,
			height: '100vh',
			width: '40vw',
			backgroundColor: 'rgba(0, 191, 199, 0.4)',
			animationName: `$leftFrameAnimation`,
			animationDuration: '3s',
		},
		leftFrameContent: { display: 'flex', alignItems: 'center', width: '50vw', height: '100%' },
		'@keyframes leftFrameAnimation': {
			'0%': {
				width: '100vw',
				backgroundColor: 'white',
			},
			'50%': {
				width: '100vw',
				backgroundColor: 'rgba(0, 191, 199, 0.4)',
			},
			'70%': {
				width: '36vw',
			},
			'100%': {
				width: '40vw',
				backgroundColor: 'rgba(0, 191, 199, 0.4)',
			},
		},
		triangle: {
			position: 'absolute',
			left: '40vw',
			bottom: 0,
			width: 0,
			height: 0,
			borderTop: '50vh solid transparent',
			borderLeft: '20vw solid rgba(0, 191, 199, 0.4)',
			borderBottom: '50vh solid transparent',
			animationName: `$triangleAnimation`,
			animationDuration: '3s',
			zIndex: -1,
		},
		'@keyframes triangleAnimation': {
			'0%': {
				left: '100vw',
			},
			'50%': {
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
			position: 'fixed',
			top: 0,
			right: 0,
			height: '100vh',
			width: '10em',
			display: 'flex',
			flexFlow: 'column',
			justifyContent: 'center',
			paddingBottom: '10vh',
		},
		sociaLinksItem: {
			padding: '1em',
			width: '5em',
			animationName: `$appearingAnimation`,
			animationDuration: '3s',
		},
	}),
)

export default styles
