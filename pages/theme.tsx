import { createMuiTheme, Theme } from '@material-ui/core/styles'

const useTheme = (): Theme => {
	return createMuiTheme({
		typography: {
			fontFamily: ['Led-Sled', 'Montserrat-Medium', 'Roboto', '"Helvetica Neue"', 'sans-serif'].join(','),
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
