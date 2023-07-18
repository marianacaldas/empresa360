<template>
    <div>
        <h5>{{ dados.id }} - {{ dados.nome }}</h5>
        <div class="mb-3 row">
            <label class="col-sm- col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="dados.id">
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-sm- col-form-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.nome">
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-sm- col-form-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.telefone">
            </div>
        </div>

        <div class="col-auto d-flex justify-content-between">
            <button type="button" class="btn btn-warning" @click="$router.push({name: 'leads'})">Voltar</button>
            <button type="button" class="btn btn-primary">Atualizar</button>
        </div>
    </div>
</template>

<script>
import ApiMixin from '@/components/mixins/ApiMixin'

export default {
    name: 'LeadVendas',
    mixins: [ApiMixin],
    created() {
        this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
    }
}
</script>