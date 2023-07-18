<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
        <div class="card-body">
            <p class="card-text">{{ dados.descricao }}</p>
        </div>
    </div>
</template>

<script>
import ApiMixin from '@/components/mixins/ApiMixin'

export default {
    name: 'ServicoServ',
    mixins: [ApiMixin],
    created() {
        this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`)
    },
    beforeRouteUpdate(to, from, next) {
        if(to.params.id != undefined) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
        next()
    }
    /*
    watch: {
        $route(to) { // convenção: to = novo valor, from = valor antigo
            if(to.params.id != undefined) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)  
        }
    }*/
}
</script>