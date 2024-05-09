<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const destinataires = ref([]);

const fetchDestinataires = async () => {
  try {
    const response = await axios.get('/api/destinataires');
    destinataires.value = response.data;
  } catch (error) {
    console.error('Error fetching destinataires:', error);
  }
};

onMounted(fetchDestinataires);
</script>


<template>

    <header class="mb-6">
        <h1 class="text-3xl font-bold">Déstinataire</h1>
    </header>



<div class="relative overflow-x-auto shadow-md sm:rounded-lg">

    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>


                <th scope="col" class="px-6 py-3">
                    Nom & Prenom
                </th>
                <th scope="col" class="px-6 py-3">
                 Telephone
                </th>
                <th scope="col" class="px-6 py-3">
                    Emails
                   </th>
                <th scope="col" class="px-6 py-3">
                    Department
                </th>
                <th scope="col" class="px-6 py-3">
                    role
                </th>

                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

          <tbody>
            <tr v-for="destinataire in destinataires" :key="destinataire.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <td class="px-6 py-4">{{ destinataire.nom_prenom }}</td>
                <td class="px-6 py-4">{{ destinataire.telephone }}</td>
                <td class="px-6 py-4">{{ destinataire.emails }}</td>
                <td class="px-6 py-4">{{ destinataire.department }}</td>
                <td class="px-6 py-4">{{ destinataire.role }}</td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:text-red-700 pl-3">Delete</a>
                </td>
              </tr>
          </tbody>
          <tbody v-if="destinataires.length === 0">
            <tr>
              <td style="padding-top: 40px;"colspan="7" class="px-6 py-4 text-center bg-white">
                Aucun déstinataire n'est encore disponible.
              </td>
            </tr>
          </tbody>

    </table>
    <div class="pb-2 pt-4 pl-2 bg-white dark:bg-gray-900">
    </div>
</div>


</template>

