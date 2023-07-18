<template>
    <div>
        <h5>Contratos</h5>

        <router-link class="btn btn-primary" :to="{ name: 'contratos', query: { leadId_like: 1 } }">LeadId = 1</router-link>
        <router-link class="btn btn-primary" to="/home/vendas/contratos?servicoId-likke=2">servicoId = 2</router-link>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">LEAD</th>
                    <th scope="col">SERVIÇO</th>
                    <th scope="col">DATA INÍCIO</th>
                    <th scope="col">DATA FIM</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in dados" :key="d.id">
                    <td>{{ d.id }}</td>
                    <td>{{ d.leadId }}</td>
                    <td>{{ d.servicoId }}</td>
                    <td>{{ d.data_inicio }}</td>
                    <td>{{ d.data_fim }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ApiMixin from '../mixins/ApiMixin'

export default {
    name: 'ContratosVendas',
    mixins: [ApiMixin], 
    created() {
        this.getDadosApi('http://localhost:3000/contratos')
    }
}
</script>