var request = new XMLHttpRequest();


request.open('GET','https://restcountries.eu/rest/v2/all', true)


request.send();


request.onload = function () {
    var data = JSON.parse(this.response);

  1. Get all the countries from Asia continent /region using Filter function

    var asia = data.filter(v => {return v.region === 'Asia'});
    console.log(asia);

  2. Get all the countries with population of less than 2 lacs using Filter function

   var population = data.filter(v => {return v.population < 200000});
   console.log(population);

  3. Print the following details name, capital, flag using forEach function

    data.forEach((v) => {
    console.log('name :' + v.name,'capital :' + v.capital,'flag :' + v.flag);
    })

  4. Print the total population of countries using reduce function

    var total = data.reduce((acc,cur) => { return acc + cur.population },0)
    console.log(total);

   5. Print the country which use US Dollars as currency.

      var currency = data.filter(v => {
       let flag = false;
       v.currencies.forEach(element => {
         if(element.code === 'USD') {
           flage = true;
         }
       })
       if(flag == true) {
         return true;
       } else {
         return false;
       }

       })
      console.log(currency);

}
