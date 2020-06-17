module.exports = function (api) {
	api.cache(true)

	if (process.env.REALM === "WEB") {
		return {
			plugins: [
				[
					"module-resolver",
					{
						root: ["./"],
						alias: {
							"^react-native$": "react-native-web",
							"^@storybook/react-native$": "@storybook/react",
							assets: "./assets",
							components: "./src/Components",
							config: "./src/config",
							modules: "./src/modules",
							navigation: "./src/navigation",
							screens: "./src/screens",
							services: "./src/Services",
							storybook: "./storybook",
							styles: "./src/Styles"
						},
						extensions: [".js", ".ios.js", ".android.js"]
					}
				]
			],
			presets: [["react-app"]]
		}
	}

	return {
		plugins: [
			[
				"module-resolver",
				{
					root: ["./"],
					alias: {
						"^@storybook/react$": "@storybook/react-native",
						assets: "./assets",
						components: "./src/Components",
						config: "./src/config",
						modules: "./src/modules",
						navigation: "./src/navigation",
						screens: "./src/screens",
						services: "./src/Services",
						storybook: "./storybook",
						styles: "./src/Styles"
					},
					extensions: [".js", ".ios.js", ".android.js"]
				}
			]
		],
		presets: ["module:metro-react-native-babel-preset"]
	}
}
