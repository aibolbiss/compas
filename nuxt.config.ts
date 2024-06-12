// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		'~/assets/styles/main.scss'
	],
	app: {
		head: {
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap' }
			],
			meta: [
				{ name: "viewport", content: "width=device-width, initial-scale=1.0"}
			]
		}
	},
	routes: [
        { path: '/documents', component: '@/pages/documents.vue' },
    ],
})
