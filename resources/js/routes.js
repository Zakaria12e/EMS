import Dashboard from './components/Dashboard.vue';
import CreateEmails from './components/Create-Emails.vue';
import EmailsHistory from './components/Emails-History.vue';
import CreateUsers from './components/Create-users.vue';
import UsersAccs from './components/Users-Accs.vue';
import Profile from './components/Profile.vue';

export default [


    {
        path: '/admin',
        name: 'admin.Dashboard',
        component: Dashboard,
    },
    {
        path: '/admin/create-emails',
        name: 'admin.CreateEmails',
        component: CreateEmails,
    },
    {
        path: '/admin/emails-History',
        name: 'admin.EmailsHistory',
        component: EmailsHistory,
    },
    {
        path: '/admin/create-users',
        name: 'admin.CreateUsers',
        component: CreateUsers,
    },
    {
        path: '/admin/users',
        name: 'admin.Users',
        component: UsersAccs,
    },
    {
        path: '/admin/profile',
        name: 'admin.Profile',
        component: Profile,
    },
]
