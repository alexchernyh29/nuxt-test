<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta? Aperiam, atque sapiente fugiat delectus, quam assumenda et placeat accusantium consectetur illum in ducimus error incidunt, sit velit officia voluptatum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem nam at ipsa, tempora adipisci explicabo quaerat sapiente praesentium esse, eveniet quisquam voluptatem expedita! Veritatis aliquid vel rerum dolorum perferendis!</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const {data} = await useFetch('/api/main?name=mario', {
    method: 'post',
    body: {age: 30}
})
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>