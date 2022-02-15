export default async function getMenuData() {
  return [
    {
      category: true,
      title: 'Dashboards',
    },
    {
      title: 'Dashboard',
      key: 'dashboards',
      icon: 'fe fe-home',
      url: '/dashboard',
    },
    {
      category: true,
      title: 'Administration',
    },
    {
      title: 'Admins',
      key: 'apps',
      icon: 'fe fe-database',
      children: [
        {
          title: 'Profile',
          key: 'appsProfile',
          url: '/profile',
        },
        {
          title: 'All Admins',
          key: 'admins',
          url: '/admins',
        },
        {
          title: 'All Roles',
          key: 'appsGallery',
          url: '/roles',
        }
  ]
  }
]
}
