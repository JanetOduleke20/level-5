<template>
    <form class="card mx-auto col-6 shadow-sm px-2 py-1 mt-3" @submit.prevent="handleSubmit">
        <div class="form-group mt-2" >
            <label>Name</label>
            <input type="text" class="form-control" v-model.trim="v$.form.name.$model"/>
        </div>
        <div v-for="(error, index) in v$.form.name.$errors" :key="index">
           <span class="text-danger text-sm">{{error.$message}}</span>
        </div>
        <div class="form-group mt-2">
            <label>E-mail address</label>
            <input type="text" class="form-control" v-model.trim="v$.form.email.$model"/>
        </div>
        <div v-for="(error, index) in v$.form.email.$errors" :key="index">
            <span class="text-danger text-sm">{{error.$message}}</span>
        </div>
        <div class="form-group mt-2">
            <label>Age</label>
            <input type="number" class="form-control" v-model.trim="v$.form.age.$model"/>
        </div>
        <div v-for="(error, index) in v$.form.age.$errors" :key="index">
            <span  class="text-danger text-sm">{{error.$message}}</span>
        </div>
        
        <label>Job Description</label>
        <select v-model="job">
            <option value="Developer">Developer</option>
            <option value="Teacher">Teacher</option>
            <option value="Instructor">Instructor</option>
        </select>
        <br>

        <div class="form-group mt-2">
            <label>Password</label>
            <input type="password" class="form-control" v-model.trim="v$.form.password.$model"/>
        </div>
        <div v-for="(error, index) in v$.form.password.$errors" :key="index">
            <span class="text-danger text-sm">{{error.$message}}</span>
        </div>
        <!-- <div class="form-group mt-2">
            <input type="checkbox" v-model="check"/>
            <label>Accept terms and conditions</label>
        </div> -->

        <div class="form-group mt-2">
            <label>Skills</label>
            <small><i>(Please press enter or comma after inputting each skill)</i></small>
            <input type="text" class="form-control" v-model="tempSkill" @keyup="addSkill"/>
        </div>
        <div v-for="(skill) in skills" :key="skill">
            <span class="skill btn btn-md bg-info text-light">{{skill}}</span>
        </div>
       
        <div class="form-group mt-2">
            <button type="submit" :disabled="v$.form.$invalid" class="btn btn-md bg-info text-light text-center px-2">Create an account</button>
        </div>
    </form>
</template>

<script>
import useValidate from '@vuelidate/core';
import {required, minLength, maxLength, email } from '@vuelidate/validators';
import axios from 'axios';
export default {
    
    mounted() {
        console.log("Signup has been mounted")
    },
    setup() {
        return {v$: useValidate()}
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                age: '',
                password: ''
            }, 
            job: '',
            check: false,
            skills: [],
            tempSkill: '',
            message: '',
            errors: []
        }
    },
    validations() {
        return {
            form: {
                name: {required, max: maxLength(10), min: minLength(5) },
                email: {required, email},
                age: {required},
                password: { required, min: minLength(6), max: maxLength(8)}
            }
        }
    },
    methods: {
        handleSubmit() {
           if(this.v$.form.$invalid) {
            console.log("Form is invalid")
           }else {
            axios.post("http://localhost:8000/api/register", this.form).then((res) => {
                console.log(res.data)
                if(res.data.status) {
                    this.message = res.data.message
                    this.$router.push('/dashboard')

                }else {
                    this.errors = res.data.errors
                    console.log(this.errors)
                }
            })
           }
        },
        addSkill(e) {
           if(e.key === 'Enter' && this.tempSkill) {
            this.skills.push(this.tempSkill);
            this.tempSkill = ''
           }
           if(e.key === "," && this.tempSkill) {
            this.tempSkill = this.tempSkill.slice(0, -1)
            this.skills.push(this.tempSkill)
            this.tempSkill = ''
           }
        },
    }
}
</script>

<style>
.skill {
    
}
</style>