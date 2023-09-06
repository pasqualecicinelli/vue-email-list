var DateTime = luxon.DateTime;
const { createApp } = Vue

createApp({
    data() {
        return {
            emailCasuali: [''],
            emailActive: 0,
        };

    },

    mounted() {


        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const randomEmail = response.data.response;

                    this.emailCasuali.push({
                        emailCasuali: randomEmail,
                    })
                    console.log(this.emailCasuali);
                });

        }
    },
}).mount('#app')


