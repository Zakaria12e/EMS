import Dashboard from './components/Dashboard.vue';
import CreateEmails from './components/Create-Emails.vue';
import EmailsHistory from './components/Emails-History.vue';
import CreateReciptients from './components/Create-reciptients.vue';
import ReciptientsAccs from './components/Reciptients-Accs.vue';
import Profile from './components/Profile.vue';
import Departments from './components/Departments.vue';

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
        path: '/admin/create-reciptients',
        name: 'admin.reciptients',
        component: CreateReciptients,
    },
    {
        path: '/admin/reciptients',
        name: 'admin.Reciptients',
        component: ReciptientsAccs,
    },
    {
        path: '/admin/profile',
        name: 'admin.Profile',
        component: Profile,
    },
    {
        path: '/admin/departments',
        name: 'admin.Departments',
        component: Departments,
    },
]
