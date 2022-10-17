function getPosition(options: PositionOptions = {}) {
	if (!navigator.geolocation) return;
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, options);
	});
}

export default {
	name: 'post',
	type: 'document',
	title: 'Post',
	// initialValue: async () => ({
	// 	postedAt: await getPosition()
	// 		.then((coords: GeolocationCoordinates) => {
	// 			const { latitude, longitude, altitude } = coords;

	// 			return {
	// 				_type: 'geopoint',
	// 				lat: latitude,
	// 				lng: longitude,
	// 				alt: altitude || undefined,
	// 			};
	// 		})
	// 		.catch((err) => console.log),
	// }),
	fields: [
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
				maxLength: 90,
			},
		},
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'location',
			title: 'Location',
			type: 'geopoint',
		},
		{
			name: 'category',
			title: 'Category',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'category' },
				},
			],
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
		{
			name: 'publishedAt',
			title: 'Published At',
			type: 'datetime',
		},
		{
			name: 'createdAt',
			title: 'Created At',
			type: 'datetime',
		},
	],
};
