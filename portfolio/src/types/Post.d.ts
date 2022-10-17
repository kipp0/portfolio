export type Post = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	title: string;
	createdAt: string;
	publishedAt: string;
	body: PostBody;
	category: PostCategory;
	slug: PostSlug;
};
export type PostBody = typeof PostJSON.body;
export type PostCategory = typeof PostJSON.category;
export type PostSlug = typeof PostJSON.slug;

const PostJSON = {
	_createdAt: '2022-10-16T17:59:43Z',
	_id: 'c72c097c-1af6-4fbb-9d14-1d1f85743c21',
	_rev: '6MAN5xbu46jc8RDEhVgtGY',
	_type: 'post',
	_updatedAt: '2022-10-16T19:04:08Z',
	body: [
		{
			_key: 'f95df13d7986',
			_type: 'block',
			children: [
				{
					_key: '19c22db43c3b0',
					_type: 'span',
					marks: ['code'],
					text: 'export default {',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '079521e3a4b0',
			_type: 'block',
			children: [
				{
					_key: '213fc82908cc',
					_type: 'span',
					marks: ['code'],
					text: "  title:'Body',name:'blockContent',",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '9343a928beef',
			_type: 'block',
			children: [
				{
					_key: 'a832346a9781',
					_type: 'span',
					marks: ['code'],
					text: "  type:'array',",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '48719ed6fa74',
			_type: 'block',
			children: [
				{
					_key: '43b62528a506',
					_type: 'span',
					marks: ['code'],
					text: '  of: [ ',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '116be9923307',
			_type: 'block',
			children: [
				{
					_key: '5e8f057d9a2c',
					_type: 'span',
					marks: ['code'],
					text: '    {',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '07a544950337',
			_type: 'block',
			children: [
				{
					_key: '67fdec02c654',
					_type: 'span',
					marks: ['code'],
					text: "      type:'block',",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'c883da1f0dac',
			_type: 'block',
			children: [
				{
					_key: '7e963cc763f8',
					_type: 'span',
					marks: ['code'],
					text: '      styles: [ ',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'aec38fbc728e',
			_type: 'block',
			children: [
				{
					_key: '9f4710423dea',
					_type: 'span',
					marks: ['code'],
					text: "        { title:'Normal', value:'normal' }, ",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'de8413e92379',
			_type: 'block',
			children: [
				{
					_key: '6445af2b95a9',
					_type: 'span',
					marks: ['code'],
					text: "        { title:'H1', value:'h1' },",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '148097793554',
			_type: 'block',
			children: [
				{
					_key: '04e6400df9c8',
					_type: 'span',
					marks: ['code'],
					text: "        { title:'H2', value:'h2' }, ",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '85891bd15c0f',
			_type: 'block',
			children: [
				{
					_key: 'cca9f72a8515',
					_type: 'span',
					marks: ['code'],
					text: "        { title:'H3', value:'h3' },",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'c16cb176ff04',
			_type: 'block',
			children: [
				{
					_key: 'bc5d7dc01e58',
					_type: 'span',
					marks: ['code'],
					text: "        { title:'H4', value:'h4' }, ",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '5ac9b3a5aaa4',
			_type: 'block',
			children: [
				{
					_key: '99017cbe8fac',
					_type: 'span',
					marks: ['code'],
					text: "        { title:'Quote', value:'blockquote' }, ",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '11ba0e83cff3',
			_type: 'block',
			children: [
				{
					_key: '1b349c5dea6d',
					_type: 'span',
					marks: ['code'],
					text: '      ],',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'b5f132c19cbb',
			_type: 'block',
			children: [
				{
					_key: '727dde1e462b',
					_type: 'span',
					marks: ['code'],
					text: "      lists: [{ title:'Bullet', value:'bullet' }],",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '37346a4657ac',
			_type: 'block',
			children: [
				{
					_key: 'baa5e3197b61',
					_type: 'span',
					marks: ['code'],
					text: '      marks: {',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'cfb46a783a20',
			_type: 'block',
			children: [
				{
					_key: 'bd4c98affa80',
					_type: 'span',
					marks: ['code'],
					text: '        decorators: [ ',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'af7016e84e85',
			_type: 'block',
			children: [
				{
					_key: 'b0052f722d42',
					_type: 'span',
					marks: ['code'],
					text: "          { title:'Strong', value:'strong' }, ",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '29443db832a7',
			_type: 'block',
			children: [
				{
					_key: '30dc14f0203f',
					_type: 'span',
					marks: ['code'],
					text: "          { title:'Emphasis', value:'em' }, ",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '73e314b705b5',
			_type: 'block',
			children: [
				{
					_key: '4e99068527f3',
					_type: 'span',
					marks: ['code'],
					text: "          { title:'Code', value:'code' }, ",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '9b886152ea0a',
			_type: 'block',
			children: [
				{
					_key: '1d2f68a57c79',
					_type: 'span',
					marks: ['code'],
					text: '        ],',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '4b50f76563a0',
			_type: 'block',
			children: [
				{
					_key: '6081cca2d16e',
					_type: 'span',
					marks: ['code'],
					text: '        annotations: [',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'a104d182de4f',
			_type: 'block',
			children: [
				{
					_key: 'be4f28b141ca',
					_type: 'span',
					marks: ['code'],
					text: '          {',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'b0a9eec1109d',
			_type: 'block',
			children: [
				{
					_key: 'a6a479c06e26',
					_type: 'span',
					marks: ['code'],
					text: "            name:'link',",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '0ac7d949f17a',
			_type: 'block',
			children: [
				{
					_key: 'aeda8e96af9b',
					_type: 'span',
					marks: ['code'],
					text: "            title:'URL',",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'a7cab18db539',
			_type: 'block',
			children: [
				{
					_key: '8a3f7157755a',
					_type: 'span',
					marks: ['code'],
					text: "            type:'object',",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '6677f3aef9f9',
			_type: 'block',
			children: [
				{
					_key: 'fa9c756726b5',
					_type: 'span',
					marks: ['code'],
					text: '            fields: [ ',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '926dbe445238',
			_type: 'block',
			children: [
				{
					_key: '03c8c331b4d4',
					_type: 'span',
					marks: ['code'],
					text: "              {name:'href',title:'URL',type:'url', }, ",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '87a6693aa30e',
			_type: 'block',
			children: [
				{
					_key: 'f51647a314dc',
					_type: 'span',
					marks: ['code'],
					text: '            ], ',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'dbff39a67992',
			_type: 'block',
			children: [
				{
					_key: '0fd432b658f6',
					_type: 'span',
					marks: ['code'],
					text: '          }, ',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '49450908538d',
			_type: 'block',
			children: [
				{
					_key: '7ee98b9c8795',
					_type: 'span',
					marks: ['code'],
					text: '        ], ',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '8f265f97daea',
			_type: 'block',
			children: [
				{
					_key: '5628cddef334',
					_type: 'span',
					marks: ['code'],
					text: '      }, ',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '75a6f3b4aea0',
			_type: 'block',
			children: [
				{
					_key: 'f703166c1598',
					_type: 'span',
					marks: ['code'],
					text: '    }, ',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'aabdbd00cebb',
			_type: 'block',
			children: [
				{
					_key: '691786a8d442',
					_type: 'span',
					marks: ['code'],
					text: '    {',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '88d86ef8c49e',
			_type: 'block',
			children: [
				{
					_key: 'd9dc76d1ac79',
					_type: 'span',
					marks: ['code'],
					text: "      type:'image',options: { hotspot:true },",
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '42b77df5ce76',
			_type: 'block',
			children: [
				{
					_key: '1a3ab146ce74',
					_type: 'span',
					marks: ['code'],
					text: '    }, ',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '17b0311e5f87',
			_type: 'block',
			children: [
				{
					_key: '5d4df400c03f',
					_type: 'span',
					marks: ['code'],
					text: '  ],',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '456b4d74d222',
			_type: 'block',
			children: [
				{
					_key: 'a04974a35558',
					_type: 'span',
					marks: ['code'],
					text: '  options: {spellCheck:true, },',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'f1fc1c868b1e',
			_type: 'block',
			children: [
				{
					_key: '2d236c5c7818',
					_type: 'span',
					marks: ['code'],
					text: '};\n\n',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'a87f748efc0a',
			_type: 'block',
			children: [
				{
					_key: '91f30aafbdb4',
					_type: 'span',
					marks: [],
					text: 'Usage:',
				},
			],
			markDefs: [],
			style: 'h3',
		},
		{
			_key: '6160565d8bc2',
			_type: 'block',
			children: [
				{
					_key: '0f49cd59f057',
					_type: 'span',
					marks: [],
					text: '',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: '0bff2b486546',
			_type: 'block',
			children: [
				{
					_key: '664730654fac',
					_type: 'span',
					marks: [],
					text: 'Place this copy the code into a file named ',
				},
				{
					_key: '3c4af666e3dd',
					_type: 'span',
					marks: ['em'],
					text: 'blockContent.ts',
				},
				{
					_key: 'e547242c3b1b',
					_type: 'span',
					marks: [],
					text: ' in the folder called ',
				},
				{
					_key: '147fcc57901e',
					_type: 'span',
					marks: ['em'],
					text: 'schemas.',
				},
			],
			markDefs: [],
			style: 'normal',
		},
		{
			_key: 'e78c4957e8ca',
			_type: 'block',
			children: [
				{
					_key: '6587ca472c91',
					_type: 'span',
					marks: [],
					text: 'import and add it to the ',
				},
				{
					_key: '370581f89b91',
					_type: 'span',
					marks: ['code'],
					text: 'schemaType.concat([])',
				},
				{
					_key: 'b9c73da9b9dc',
					_type: 'span',
					marks: [],
					text: ' array.',
				},
			],
			markDefs: [],
			style: 'normal',
		},
	],
	category: [
		{
			_key: '28e7fee02df7',
			_ref: 'f738735c-6e7b-4fd7-8e15-949439d49d2d',
			_type: 'reference',
		},
	],
	createdAt: '2022-10-16T19:02:00.000Z',
	publishedAt: '2022-10-16T19:02:00.000Z',
	slug: {
		_type: 'slug',
		current: 'sanity-block-content',
	},
	title: 'Sanity - Block Content',
} as const;
