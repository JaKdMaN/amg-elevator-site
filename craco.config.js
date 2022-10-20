const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
	// ...
	webpack: {
		alias: {
			"@": resolvePath("./src"),
			'@components': resolvePath('./src/components'),
			'@assets': resolvePath('./src/assets'),
			'@services': resolvePath('./src/services')
		}
	},
	// ...
}