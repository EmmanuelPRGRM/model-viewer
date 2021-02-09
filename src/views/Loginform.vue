<template>
    <v-container
    fluid
    class="fill-height background"
    id="login-container">
    <v-row>
        <v-col>
            <div class="box">
                <v-img class="heemman"
                aspect-ratio="1.5"
                height="500"
                width="500"
                src='@/assets/heeman.png'>
                </v-img>
            </div>
        </v-col>
         <v-col>
            <div class="box">
             <v-form>
                <v-text-field
                class="name"
                v-model="username"
                :error="error"
                color="primary"
                label="Username"
                :rules="rules"
                outlined
                hide-details="auto"
                ></v-text-field>
                <p v-if="error" />
                <v-btn
                color="primary"
                class="button"
                :loading="loading"
                @click="login"
                > Continue
                </v-btn>
             </v-form>
            </div>
        </v-col>
    </v-row>
    </v-container>
</template>
<script>
export default {

    data: () => ({


    username: null,
    error: null,


    rules: 
    [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters'
    ],

    loading: false
    }

    ),

    methods:
    {
       async login()
        {
            this.loading
            
            var correctUser = "heemman"
            if(this.username == correctUser)
            {

                this.loading = true
                await new Promise(resolve => setTimeout(resolve, 3000))
                this.$router.push({name : 'Lobby'})
            }
            else if(this.username != correctUser)
            {
                this.loading = true
                await new Promise(resolve => setTimeout(resolve, 1000))
                this.loading = false
                this.error = 'Invalid Username'
                
            }
        }

    }
    
}
</script>

<style>

.background
{
    background-image: url("~@/assets/loginbg.png") !important;
    background-size: cover;
    z-index: 1;
}
.box
{
    height: 98vh;
    padding-top: 45vh;
    padding-left: 30vh;
}
.name
{
    /*background-color: rgb(255, 255, 255);*/
    /*border: 1px solid rgb(255, 161, 19);*/
    /*border-radius: 10px;*/
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: left;
    align-items: left;
    padding: 10px;
    height: 60px;
    width: 500px;
}
.heemman
{
    z-index: 2;
    margin-top: -25vh;
}
.button
{
    margin-top: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>