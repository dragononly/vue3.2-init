export default [
	// {
	//     path: '/',
	//     name: 'root',
	//     redirect: '/root',
	//     component: () => import('../App.vue'),
	//     children:[]
	// },
	{
		path: '/',
		name: 'home',
		component: () => import('../pages/home/home.vue'),
	},
	{
		path: '/404',
		name: '404',
		component: () => import('../pages/404.vue'),
	},
	{
		path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
		redirect: (_: any) => {
			return { path: '/404' }
		},
	},
]


