document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").onsubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        const base = document.querySelector("#local_currency").value;
        fetch(`https://api.exchangerate.host/latest?base=${base}`) // Corrected URL
        .then((response) => response.json())
        .then((data) => {
            const amount = parseFloat(document.querySelector("#amount").value); // Parse the amount as a float
            const foreignCurrency = document.querySelector("#foreign_currency").value;
            const rate = data.rates[foreignCurrency];

            function convert() {
                return amount * rate;
            }

            document.querySelector("#results").innerHTML = ` ${convert().toFixed(4)} ${foreignCurrency}`;
        }).catch((error) => {
            console.log("Error: ", error);
        });
    };
});

