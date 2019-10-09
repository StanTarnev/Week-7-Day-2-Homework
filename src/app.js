import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '#app',
    data: {
      currencies: [],
      enteredAmount: null,
      convertedFromEuros: null
    },
    mounted(){
      this.fetchCurrencies()
    },
    methods: {
      fetchCurrencies: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(currencies => this.currencies = currencies)
      },
      convertFromEuros: function(){
        return this.currencies.rates.name * this.enteredAmount;
      }
    }
  })
})
