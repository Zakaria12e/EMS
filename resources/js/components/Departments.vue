<script setup>

import { ref , onMounted} from 'vue';
import axios from 'axios';
import { useToastr } from '@/toastr';

const formData = ref({
  dept_name: '',
  chef_dept: '',
  description: ''
});
const toastr = useToastr();
const isModalOpen = ref(false);


const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const validateForm = () => {
  if (!formData.value.dept_name || !formData.value.description) {
    toastr.error('Veuillez remplir tous les champs requis');
    return false;
  }
  return true;
};

const createDepartment = () => {
  if (!validateForm()) {
    return;
  }
  axios.post('/api/create-departments', formData.value)
    .then(response => {
      toastr.success('Département créé avec succès!');
      closeModal();
      fetchDepartments();

      formData.value.dept_name = '';
      formData.value.chef_dept = '';
      formData.value.description = '';
    })
    .catch(error => {
      console.error('Erreur lors de la création du département:', error);
    });
};

const departments = ref([]);

const fetchDepartments = async () => {
  try {
    const response = await axios.get('/api/getdepartments');
    departments.value = response.data;
  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};

onMounted(() => {
  fetchDepartments();
});

</script>


<template>

    <header class="mb-6">
        <h1 class="text-3xl font-bold">Départements</h1>
    </header>


    <div v-if="isModalOpen" id="crud-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 ">
        <div class="relative p-4 w-full max-w-md max-h-full">

            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Ajouter Département
                    </h3>
                    <button @click="closeModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form @submit.prevent="createDepartment" class="p-4 md:p-5">
                    <div class="col-span-2 mb-3">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                        <input v-model="formData.dept_name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Entrez le nom de département">
                    </div>
                    <div class="col-span-2 sm:col-span-1 mb-3">
                        <label for="chef" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chef</label>
                        <input v-model="formData.chef_dept" type="text" name="chef" id="chef" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>

                    <div class="col-span-2 mb-3">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea v-model="formData.description" id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Écrivez la description de département ici"></textarea>
                    </div>

                    <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Ajouter
                    </button>
                </form>
            </div>
        </div>
    </div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="pb-4 pt-4 pl-2 bg-white dark:bg-gray-900">
        <button
        @click="openModal"
        type="button"
        class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
        <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
        Ajouter Departement
    </button>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>


                <th scope="col" class="px-6 py-3">
                    Nom
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Chef
                </th>

                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

          <tbody v-if="departments.length > 0">
            <tr v-for="department in departments" :key="department.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <td class="px-6 py-4">{{ department.dept_name }}</td>
                <td class="px-6 py-4">{{ department.description }}</td>
                <td class="px-6 py-4">{{ department.chef_dept }}</td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:text-red-700 pl-3">Delete</a>
                </td>
              </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td style="padding-top: 40px;" colspan="4" class="px-6 py-4 text-center bg-white">
                Aucun département n'est encore disponible.
              </td>
            </tr>
          </tbody>

    </table>
    <div class="pb-2 pt-4 pl-2 bg-white dark:bg-gray-900">
    </div>
</div>


</template>

