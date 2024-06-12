<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps({
	label: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
	size: {
		type: Boolean,
	},
	modelValue: {
		type: String,
		required: true
	}
})

const emits = defineEmits(['update:modelValue', 'validation'])

const error = ref('')

const red = ref(false)

const validate = () => {
	if(!props.modelValue){
		error.value = 'Поле не может быть пустым';
		red.value = true;
		emits('validation', true);
	} else {
		error.value = '';
		red.value = false;
		emits('validation', false)
	}
}

watch(() => props.modelValue, validate)
</script>

<template>
	<div class="input-container" :class="{ 'full': size}">
		<label class="input-label">{{ label }}</label>
		<input type="text" class="input-field" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @blur="validate" :class="{red: red}" />
		<h3>{{ modelValue }}</h3>
		<span v-if="error" class="error">{{ error }}</span>
	</div>
</template>

<style lang="scss" scoped>
.input-container {
	display: flex;
    flex-direction: column;
}

.input-label {
	font-family: "PT Sans", sans-serif;
	font-weight: 400;
	font-size: 12px;
	margin-bottom: 5px;
}

.input-field {
	border-radius: 5px;
	border: 1px #BCBCBC solid;
	height: 40px;
	padding-left: 10px;
}

.full{
	grid-column: span 2; /* Растянуть на две колонки */
    width: 563px;
}
.error{
	color: red;
}
.red{
	border: 1px solid red;
}
</style>