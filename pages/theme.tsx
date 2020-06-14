import { createMuiTheme, Theme, PaletteColorOptions } from '@material-ui/core/styles'

const palette: PaletteOptions = {
	primary: {
		main: '#FE5D26',
	},
	secondary: {
		main: '#19857b',
	},
	background: {
		default: '#1a191e',
		paper: '#1a191e',
	},
	text: {
		primary: '#fff',
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
