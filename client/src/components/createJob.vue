<template>
<div class="createJob">
    <div class="row">
        <div class=col-4>
                <form @submit.prevent="addJob">
      <input type="text" placeholder="title" v-model="newList.title" required>
      <input type="text" placeholder="description" v-model="newList.description">
      <button type="submit">Create List</button>
    </form>
        </div>

    </div>  




</div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>
