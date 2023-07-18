<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <router-link class="navbar-brand" to="/home">Empresa 360</router-link >
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Sair</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="d-flex">
            <div class="list-group menu-esquerda">
                <router-link class="list-group-item list-group-item-action" to="/home/dashboard" exact-active-class="active">
                    <i class="bi bi-speedometer2"></i> Dashboard
                </router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/vendas" exact-active-class="active">
                    <i class="bi bi-cart"></i> Vendas
                </router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/vendas/leads" exact-active-class="active">
                    <i class="bi bi-caret-right"></i> Leads
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'contratos' }" exact-active-class="active">
                    <i class="bi bi-caret-right"></i> Contratos
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'servicos' }" exact-active-class="active">
                    <i class="bi bi-card-checklist"></i> Serviços
                </router-link>
            </div>

            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>

                <div class="container-fluid">
                    <router-view></router-view>
                </div>

            </div>
        </div>
        <div class="rodape">
            <router-view name="rodape"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView'

}

</script>

<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.list-group-item {
    border-top: none;
    border-right: none;
}

/*
.router-link-active {
    color: #fff;
    background-color: #6b9eeb;
    border-color: #6b9eeb;
}

.router-link-exact-active {
    color: #fff;
    background-color: #e77a7a;
    border-color: #e77a7a;
}
*/

.rodape {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #ccc;
}

</style>