/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
"use strict";

function isPrime(n) {
    
    for(let index = 2; index < n; index++) {
        if (n % index == 0) {
            return Boolean(false);
        }
    }
    return Boolean(true);
        
}

function getNPrimes(n) {
    
    var i = 0;
    var start = 2;
    var primeList = [];
    while (primeList.length < n) {
        if (isPrime(start) == Boolean(true)) {
            primeList[i]=(start);
            start += 1;
            i += 1;
        } else {
            start += 1;
        }
    } 
    return primeList;
    
}

function printNPrimes(n) {
    
    let p_table = document.querySelector("#prime_table");
    for (let i in getNPrimes(n)) {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        cell.innerHTML = getNPrimes(n)[i];
        row.append(cell);
        p_table.append(row);
    }
    
}

function greetByName() {

    let params = new URLSearchParams(window.location.search);
    let name = params.get('name') || 'Student';    
    let number = params.get('n') || 330;     
    let greet = document.querySelector('h1');    
    greet.innerHTML = `Hello ${name}`;
    
    testPrime(number);
    printNPrimes(number);

}

function testPrime(the_number) {
    
    let declare = document.querySelector("#declare");
    if (isPrime(the_number) == Boolean(true)) {
        declare.innerHTML = `${the_number} is a prime number`;
    } else {
        declare.innerHTML = `${the_number} is not a prime number`;
    }
    
}

window.onload = function() {
    this.greetByName();
};