import { createMuiTheme, Theme } from '@material-ui/core/styles'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const palette: PaletteOptions = {
	primary: {
		main: '#EDFFD9',
	},
	secondary: {
		main: '#002549',
	},
	background: {
		default: 'rgba(0, 191, 199, 0.6)',
		paper: 'rgba(0, 191, 199, 1)',
	},
	text: {
		primary: '#EDFFD9',
		secondary: 'rgba(255, 255, 255, 0.7)',
		disabled: 'rgba(255, 255, 255, 0.5)',
		hint: 'rgba(255, 255, 255, 0.5)',
	},
}
const useTheme = (): Theme => {
	return createMuiTheme({
		palette: palette,
		typography: {
			fontFamily: ['Montserrat-Medium', 'Roboto', '"Helvetica Neue"', 'sans-serif'].join(','),
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					'@font-face': [
						{
							fontFamily: 'Montserrat-Light',
							src: 'url(/fonts/Montserrat/Montserrat-Light.ttf)',
						},
						{
							fontFamily: 'Montserrat-Medium',
							src: 'url(/fonts/Montserrat/Montserrat-Medium.ttf)',
						},
						{
							fontFamily: 'Led-Sled',
							src: 'url(/fonts/ModernLcd7-jda7.ttf)',
						},
					],
				},
			},
		},
	})
}

export default useTheme()
