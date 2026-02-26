import { defineConfig } from "orval"

export default defineConfig({
	api: {
		input: {
			target: "./swagger.json",
		},
		output: {
			mode: "tags-split",
			target: "./src/shared/api/generated",
			client: "react-query",
			override: {
				mutator: {
					path: "./src/shared/api/client.ts",
					name: "apiClient",
				},
			},
		},
	},
})
