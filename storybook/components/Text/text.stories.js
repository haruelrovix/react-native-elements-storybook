import { storiesOf } from "@storybook/react"
import React from "react"

import { Text } from "react-native-elements"
import { View } from "react-native"

storiesOf("Text|Text", module).add("Heading usage", () => (
	<View>
		<Text h1>Heading 1</Text>
		<Text h2>Heading 2</Text>
		<Text h3>Heading 3</Text>
		<Text h4>Heading 4</Text>
	</View>
))
