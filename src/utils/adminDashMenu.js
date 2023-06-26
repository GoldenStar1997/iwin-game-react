import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'DASHBOARD',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'Users',
		icon: 'users',
		children: [
			{ id: uuid(), to: '#', name: 'Active Users' },
			{ id: uuid(), to: '#', name: 'Blocked Users' },
		]
	},
	{
		id: uuid(),
		title: 'Games',
		icon: 'gamepad',
		children: [
			{ id: uuid(), to: '#', name: 'Game1' },
			{ id: uuid(), to: '#', name: 'Game2' },
			{ id: uuid(), to: '#', name: 'Setting' },
		]
	},
	{
		id: uuid(),
		title: 'Affiliates',
		icon: 'user-friends',
		children: [
			{ id: uuid(), to: '#', name: 'Game1'},
			{ id: uuid(), to: 'aff-setting', name: 'Setting' },
		]
	},
	{
		id: uuid(),
		title: 'Ads',
		icon: 'ad',
		children: [
			{ id: uuid(), to: '#', name: 'Banner Ads' },
			{ id: uuid(), to: '#', name: 'Video Ads' },
		]
	},
	// {
	// 	id: uuid(),
	// 	title: 'Payonner',
	// 	icon: 'corner-left-down',
	// 	children: [
	// 		{ 
	// 			id: uuid(), 
	// 			to: '#', 
	// 			title: 'Two Level',
	// 			children: [
	// 				{ id: uuid(), to: '#', name: 'Item  1'},
	// 				{ id: uuid(), to: '#', name: 'Item  2' }
	// 			]
	// 		},
	// 		{ 
	// 			id: uuid(), 
	// 			to: '#', 
	// 			title: 'Three Level',
	// 			children: [
	// 				{ 
	// 					id: uuid(), 
	// 					to: '#', 
	// 					title: 'NavItem 1',
	// 					children: [
	// 						{ id: uuid(), to: '#', name: 'Item  1'},
	// 						{ id: uuid(), to: '#', name: 'Item  2'}
	// 					]
	// 				},
	// 				{ id: uuid(), to: '#', name: 'Item  2' }
	// 			]
	// 		}
	// 	]
	// },	
	{
		id: uuid(),
		title: 'Documentation',
		grouptitle: true
	},
	
	{
		id: uuid(),
		title: 'Changelog',
		icon: 'git-pull-request',
		to: '#'
	},
	{
		id: uuid(),
		title: 'Download',
		icon: 'download',
		to: '#'
	}
];

export default DashboardMenu;
