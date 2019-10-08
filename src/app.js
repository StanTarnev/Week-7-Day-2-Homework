import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '#app',
    data: {
      currencies: []
    },
    mounted(){
      this.fetchCurrencies()
    },
    methods: {
      fetchCurrencies: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(currencies => this.currencies = currencies)
      }
    }
  })
})
