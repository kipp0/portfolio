export default {
	title: 'Body',
	name: 'blockContent',
	type: 'array',
	of: [
		{
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'H1', value: 'h1' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
				{ title: 'Quote', value: 'blockquote' },
			],
			lists: [{ title: 'Bullet', value: 'bullet' }],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
					{ title: 'Code', value: 'code' },
				],
				annotations: [
					{
						name: 'link',
						title: 'URL',
						type: 'object',
						fields: [
							{
								name: 'href',
								title: 'URL',
								type: 'url',
							},
						],
					},
				],
			},
		},
		{
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
	options: {
		spellCheck: true,
	},
};
