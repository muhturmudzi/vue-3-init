<script setup>
import { ref } from 'vue'
import InputDropDown from '@/components/form/InputDropDown.vue'

const listData = [
  {
      "id": 1,
      "name": "PKB",
      "full_name": "Partai Kebangkitan Bangsa",
  },
  {
      "id": 2,
      "name": "Gerindra",
      "full_name": "Partai Gerakan Indonesia Raya",
  },
  {
      "id": 3,
      "name": "PDI Perjuangan",
      "full_name": "Partai Demokrasi Indonesia Perjuangan",
  },
  {
      "id": 4,
      "name": "Golkar",
      "full_name": "Partai Golongan Karya",
  },
  {
      "id": 5,
      "name": "NasDem",
      "full_name": "Partai NasDem",
  },
  {
      "id": 6,
      "name": "Partai Buruh",
      "full_name": "Partai Buruh",
  },
  {
      "id": 7,
      "name": "Gelora",
      "full_name": "Partai Gelombang Rakyat Indonesia",
  },
  {
      "id": 8,
      "name": "PKS",
      "full_name": "Partai Keadilan Sejahtera",
  },
  {
      "id": 9,
      "name": "PKN",
      "full_name": "Partai Kebangkitan Nusantara",
  },
  {
      "id": 10,
      "name": "Hanura",
      "full_name": "Partai Hati Nurani Rakyat",
  },
  {
      "id": 11,
      "name": "Garuda",
      "full_name": "Partai Garda Perubahan Indonesia",
  },
  {
      "id": 12,
      "name": "PAN",
      "full_name": "Partai Amanat Nasional",
  },
  {
      "id": 13,
      "name": "PBB",
      "full_name": "Partai Bulan Bintang",
  },
  {
      "id": 14,
      "name": "Partai Demokrat",
      "full_name": "Partai Demokrat",
  },
  {
      "id": 15,
      "name": "PSI",
      "full_name": "Partai Solidaritas Indonesia",
  },
  {
      "id": 16,
      "name": "Perindo",
      "full_name": "Partai Persatuan Indonesia",
  },
  {
      "id": 17,
      "name": "PPP",
      "full_name": "Partai Persatuan Pembangunan",
  },
  {
      "id": 24,
      "name": "Partai Ummat",
      "full_name": "Partai Ummat",
  }
]

const idPartai = ref('')

const reset = () => {
  idPartai.value = ''
}

const inject = (val) => {
  idPartai.value = val
}
</script>

<template>
  <section>
    <h3 class="mb-8 text-center">Vue's Components</h3>

    <div class="[&>*:not(:last-of-type)]:mr-4 mb-8">
      <button class="btn--primary-outline" @click="reset">Reset</button>
      <button class="btn--primary" @click="inject(4)">Inject Data</button>
    </div>

    <InputDropDown
      placeholder="Search or select Partai"
      :list="listData"
      label="name"
      reduce="id"
      v-model="idPartai"
      class="mb-4"
    />

    <p>Partai Id: <b>{{ idPartai }}</b></p>
  </section>
</template>