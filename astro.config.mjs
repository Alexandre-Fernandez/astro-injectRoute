import { defineConfig } from "astro/config"

/** @type import("astro").AstroIntegration */
const test = {
	name: "test",
	hooks: {
		"astro:config:setup": ({ injectRoute }) => {
			injectRoute({
				pattern: "/secret",
				entryPoint: "./src/pages/index.astro",
			})
		},
	},
}

// https://astro.build/config
export default defineConfig({ integrations: [test] })
