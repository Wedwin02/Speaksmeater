
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { Link } from '@inertiajs/vue3'
import { router } from '@inertiajs/vue3'
defineProps({
    categories: {
        type: Object,
        requited: true
    }
})
const deleteCategory = id => {
    if(confirm('Are you sure?')){
        router.delete(route('categories.destroy',id))

    }
}

</script>

<template>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Categories</h2>

        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="p-6 border-b border-gray-200">
                    <div class="flex justify-between">
                        <Link :href="route('categories.create')" class="text-white bg-indigo-500 hover:bg-indigo-700 py-2 px-4 rounded"  v-if="$page.props.user.permissions.includes('create category')">
                        Crear Category
                        </Link>
                    </div>

                </div>
                <div class="mt-4">

                    <ul role="list" class="divide-y divide-gray-100">
                        <li class="flex justify-between gap-x-6 py-5" v-for="Category in categories.data">
                            <div class="flex min-w-0 gap-x-4">

                                <div class="min-w-0 flex-auto">
                                    <p class="text-lg font-semibold leading-6 text-white">{{Category.name}}</p>
                                </div>
                            </div>
                            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p class="text-sm leading-6 text-white">
                                    <Link :href="route('categories.edit',Category.id)" v-if="$page.props.user.permissions.includes('update category')"  class=" inline-block text-white bg-indigo-500 hover:bg-indigo-700 py-2 px-4 rounded">
                                        Edit
                                    </Link>
                                    
                                    <Link @click="deleteCategory(Category.id)" v-if="$page.props.user.permissions.includes('delete category')" class=" inline-block text-whit bg-slate-500 hover:bg-indigo-700 py-2 px-4 rounded">
                                        Delete
                                    </Link>
                                    </p>                   
                            </div>
                            
                        </li>
                    </ul>
                </div>

            </div>

        </div>



    </AppLayout>
</template>