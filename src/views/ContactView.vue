<template>
    <div class="messageMe">
                    <h2 class="workTogether">I’d love to hear from you!</h2>
                </div>
    <div class="contactMe">
    <div class="formBody">
                <div v-if="submitted == 'sent'">
                    <p class="respond">Thank you for your message! <br>You Can Expect A Response Within 48 Hours!</p>
                </div>
                <div v-if="submitted == 'loading'" class="loading">
                    <fa class="spinner" :icon="['fas', 'rotate']" />
                </div>
                <div class="error" v-if="error">Sorry, there was an error sending your message. 
                    <br>Please try again in a couple minutes as I'd love to know what you have to say!
                </div>
            <form @submit.prevent="sendEmail" @keypress.enter.prevent="sendEmail" v-if="submitted == 'start'" class="form" ref="form">
                <div class="inputArea">
                <div class="firstName">
                <label for="firstName" class="firstNameLabel">First Name<fa class="asterisk" :icon="['fas', 'asterisk']" /></label>
                <input type="text" id="firstName" class="firstNameInput" name="fistName" required><br>
                </div>
                <div class="lastName">
                <label for="lastName" class="lastNameLabel">Last Name<fa class="asterisk" :icon="['fas', 'asterisk']" /></label>
                <input type="text" id="lastName" class="lastNameInput" name="lastName" required><br>
                </div>
                <div class="email">
                <label for="email" class="emailLabel">Email<fa class="asterisk" :icon="['fas', 'asterisk']" /> </label>
                <input type="text" id="email" class="emailInput" name="email" required><br>
                </div>
                <div class="services">
                <label for="services" class="servicesLabel">Service<fa class="asterisk" :icon="['fas', 'asterisk']" /></label>
                <select id="services" class="servicesSelect" name="services" required>
                    <option value="" hidden>Select an Option</option>
                    <option value="Choreo">Choreography</option>
                    <option value="Performance">Performance</option>
                    <option value="Teaching">Teaching</option>
                    <option value="Other">Other</option>
                </select><br>
                </div>
                <div class="message">
                <label for="subject" class="messageLabel">Message<fa class="asterisk" :icon="['fas', 'asterisk']" /></label>
                <textarea name="message" id="subject" placeholder="Your Message Here..." required></textarea>
                </div>
                <input type="submit" value="Submit" class="formSubmit">
                </div>
            </form>
            </div>
            <img class="contactPhoto" src="../photos/contact_isa.jpg"/>
        </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default{
    data(){
        return{
            submitted: "start",
            error: false
        }
    },
    methods: {
        sendEmail(){
            emailjs
            .sendForm('service_6l1je8m', 'template_z7wjwzp', this.$refs.form, {publicKey:'gFJATjLwRQ6zFvUHQ'})
            .then(response => {
                if(response.status === 200){
                    this.submitted = "loading";
                    setTimeout(() => {this.submitted = "sent";}, 1500)
                }
            })
            .catch(response => {
                if(response.status === 400){
                    this.error = true;
                    this.submitted = "";
                }
            })
        }
    }
}

</script>

<style>
.contactMe{
    margin-bottom: 75px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: "Playfair Display", serif;
}

.formBody{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    height: 550px;
    width: 550px;
    border-radius: 5px;
}

.contactPhoto{
    height: 550px;
    width: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
}

.messageMe{
    margin-top: 70px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.workTogether, .workTogether2{
    margin: 0;
    font-family: "Playfair Display", serif;
    font-size: 50px;
    font-weight: lighter;
}

.asterisk{
    color: red;
    height: 7px;
    width: 7px;
    padding-bottom: 10px;
}

.form{
    display: flex;
    justify-items: center;
    align-items: center;
    height: 357px;
    margin: 0;
    padding: 40px;
    font-family: "Playfair Display", serif;
}

.inputArea{
    width: 450px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    "firstName lastName"
    "email email"
    "services services"
    "message message"
    "submit submit";
    justify-items: center;
    align-items: center;
}

.firstName, .lastName{
    grid-area: firstName;
    height: 60px;
    width: 210px;
    display: flex;
    flex-direction: column;
    margin: 15px 30px 10px 0;
    text-align: center;
} 

.lastName{
    grid-area: lastName;
}

.email{
    grid-area: email;
    margin: 15px 0 10px 0px;
    padding-right: 30px;
    width: 450px;
    display: flex;
    flex-direction: column;
}

.services{
    grid-area: services;
    width: 450px;
    margin: 0 0 10px 0;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
}

.message{
    grid-area: message;
    height: 175px;
    width: 450px;
    padding-right: 35px;
}

.firstNameLabel, .lastNameLabel{
    font-family: "Playfair Display", serif;
    display: flex;
    justify-content: flex-start;
    margin: 0 10px 0 0 ;
    width: 150px;
    padding-bottom: 5px;
}

.emailLabel, .servicesLabel, .messageLabel{
    font-family: "Playfair Display", serif;
    display: flex;
    justify-content: flex-start;
    width: 150px;
    padding-bottom: 5px;
}

.firstNameInput, .lastNameInput{
    width: 210px;
    padding: 5px 9px;
    background-color: white;
    color: black;
    font-family: "Playfair Display", serif;
    border: white 1px solid;
    font-size: 15px;
    border-radius: 15px;
}

.emailInput, .servicesSelect{
    width: 450px;
    padding: 5px 9px;
    background-color: white;
    color: black;
    font-family: "Playfair Display", serif;
    border: white 1px solid;
    font-size: 15px;
    border-radius: 15px;
}

.servicesSelect{
    width: 457px;
}

textarea{
    font-family: "Playfair Display", serif;
    background-color: white;
    height: 125px;
    width: 442px;
    padding: 8px;
    font-size: 15px;
    resize: none;
    border-radius: 15px;
    border: white 1px solid;
}

.formSubmit{
    grid-area: submit;
    color: #4d0066;
    background-color: white;
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
    width: 90px;
    height: 25px;
    border-radius: 5px;
    border: solid 1px white;
}

.formSubmit:hover{
    cursor: pointer;
    background-color: white;
    color: black;
    /* box-shadow: 5px 5px white; */
}

::placeholder{
    color: black;
}

.error{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 415px;
    height: 357px;
    margin: 0;
    padding: 40px;
    font-family: "Playfair Display", serif;
    font-size: 18px;
    line-height: 35px;
}

.respond, .loading{
    width: 415px;
    height: 357px;
    margin: 0;
    padding: 40px;
    font-family: "Playfair Display", serif;
    text-align: center;
    font-size: 27px;
    line-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center
}

.spinner{
    font-size: 50px;
    color: black;
    animation: 5s spin linear infinite;
}

@keyframes spin{
    from{transform: rotate(0deg)}
    to {transform: rotate(1000deg)}
}
</style>