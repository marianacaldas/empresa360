// INÍCIO DAS ROTAS

import { createRouter, createWebHistory } from 'vue-router'
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
import Home from '@/views/Home.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Lead from '@/components/vendas/Lead.vue'
import Leads from '@/components/vendas/Leads.vue'
import Login from '@/views/Login.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'
import Servico from '@/components/servicos/Servico.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'

const routes = [
    {
        path: '/', 
        component: Site
    },
    {
        path: '/home', 
        alias: '/app',
        component: Home,
        children: [
            { path: 'vendas', component: Vendas, children: 
                [
                    { path: 'leads', component: Leads, name: 'leads' },
                    { path: 'leads/:id', component: Lead, name: 'lead', alias: ['/l/:id', '/pessoa/:id', '/:id']},
                    { path: 'contratos', component: Contratos, name: 'contratos' },
                    { path: '', component: VendasPadrao,  name: 'vendas' }
                ]
            },
            { path: 'servicos', component: Servicos, name: 'servicos', children:
            [
                { path: ':id', alias: '/s/:id', name: 'servico', components: 
                    {
                        default: Servico,
                        opcoes: Opcoes,
                        indicadores: Indicadores
                    },
                }
            ]
        },
            { path: 'dashboard', components: 
                {
                    default: Dashboard,
                    rodape: DashboardRodape
                }
            }
        ]
    },
    {
        path: '/login', 
        component: Login
    },
    { path: '/redirecionamento-1', redirect:'/home/serviços'},
    { path: '/redirecionamento-2', redirect:{ name: 'leads' } },
    { path: '/redirecionamento-3', redirect:'/home/vendas'},
    { path: '/redirecionamento-4', redirect:{ name: 'vendas' } },
    { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada }  //Vue2 = *
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

// FIM DAS ROTAS