<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useToastr } from '@/toastr';

  const firstName = ref('');
  const lastName = ref('');
  const StructureId = ref('');
  const phone = ref('');
  const roleId = ref('');
  const departmentId = ref('');
  const email1 = ref('');
  const email2 = ref('');
  const toastr = useToastr();

  const validateForm = () => {
    if (!firstName.value || !lastName.value || !phone.value || !email1.value) {
      toastr.error('Veuillez remplir tous les champs requis');
      return false;
    }
    return true;
  }

  const checkUniqueFields = async () => {
    try {
      const response = await axios.post('/api/check-unique-fields', {
        email1: email1.value,
        email2: email2.value,
        phone: phone.value,
      });
      const data = response.data;
      if (!data.email1Unique) {
        toastr.error('L\'adresse e-mail 1 existe déjà');
        return false;
      }
      if (!data.email2Unique) {
        toastr.error('L\'adresse e-mail 2 existe déjà');
        return false;
      }
      if (!data.phoneUnique) {
        toastr.error('Le numéro de téléphone existe déjà');
        return false;
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  const submitForm = async () => {
    if (!validateForm()) {
      return;
    }
    if (!await checkUniqueFields()) {
      return;
    }
    try {
      const response = await axios.post('/api/create-reception', {
        first_name: firstName.value,
        last_name: lastName.value,
        structurId: StructureId.value,
        phone: phone.value,
        roleId: roleId.value,
        departmentsId: departmentId.value,
        email1: email1.value,
        email2: email2.value,
      });

      toastr.success('Le destinataire a été créé avec succès!');


      firstName.value = '';
      lastName.value = '';
      StructureId.value = '';
      phone.value = '';
      roleId.value = '';
      departmentId.value = '';
      email1.value = '';
      email2.value = '';
    } catch (error) {
      console.error(error);
    }
  }
</script>


<template>







    <div class="flex justify-center">
          <form style="width: 70%;" @submit.prevent="submitForm">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Prénom</label>
                    <input type="text" v-model="firstName" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   />
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                    <input type="text" v-model="lastName" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   />
                </div>
                <div>
                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900">Structure</label>
                    <input type="text" v-model="StructureId" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   />
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Numéro de téléphone</label>
                    <input type="tel" v-model="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   />
                </div>

                <div>
                    <label for="role" class="block mb-2 text-sm font-medium text-gray-900">Rôle</label>
                    <input type="text" v-model="roleId" id="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   />
                </div>
                <div>
                    <label for="departments" class="block mb-2 text-sm font-medium text-gray-900">Département</label>
                    <input type="text" v-model="departmentId" id="departments" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                </div>
            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Adresse e-mail 1</label>
                <input type="email" v-model="email1" id="email1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   />
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Adresse e-mail 2</label>
                <input type="email" v-model="email2" id="email2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Soumettre</button>

          </form>
        </div>



</template>


