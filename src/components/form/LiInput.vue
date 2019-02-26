<template>
    <li class="form-item padb2 padt4">
        <h5 class="form-label font5 padb2">{{ title }}</h5>
        <input :type="type" :value="value" :id="id" class="form-input" :placeholder="placeholder" @input="$emit('update:value',$event.target.value)" />
    </li>    
</template>

<script>
export default {
    name: 'LiInput',
    props: ['title','type','id','placeholder','value']
}
</script>
