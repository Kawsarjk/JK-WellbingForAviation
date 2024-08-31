document.addEventListener("DOMContentLoaded", function() {
    // Sample data: replace with real data if available
    const ketoFoods = {
        "United States": {
            foods: ["Avocados", "Almonds", "Coconut Oil", "Eggs", "Cheese"],
            flag: "https://flagcdn.com/us.svg"
        },
        "Canada": {
            foods: ["Salmon", "Avocados", "Coconut Oil", "Beef", "Broccoli"],
            flag: "https://flagcdn.com/ca.svg"
        },
        "United Kingdom": {
            foods: ["Olive Oil", "Bacon", "Eggs", "Spinach", "Almonds"],
            flag: "https://flagcdn.com/gb.svg"
        },
        "Australia": {
            foods: ["Eggs", "Cheese", "Chicken", "Spinach", "Avocados"],
            flag: "https://flagcdn.com/au.svg"
        },
        "Germany": {
            foods: ["Sausages", "Cheese", "Bacon", "Olive Oil", "Almonds"],
            flag: "https://flagcdn.com/de.svg"
        },
        "France": {
            foods: ["Cheese", "Butter", "Olive Oil", "Eggs", "Cream"],
            flag: "https://flagcdn.com/fr.svg"
        },
        "Italy": {
            foods: ["Olive Oil", "Mozzarella", "Prosciutto", "Zucchini", "Eggplant"],
            flag: "https://flagcdn.com/it.svg"
        },
        "Spain": {
            foods: ["Olive Oil", "Chorizo", "Manchego Cheese", "Avocados", "Eggs"],
            flag: "https://flagcdn.com/es.svg"
        },
        "Japan": {
            foods: ["Salmon", "Seaweed", "Eggs", "Avocados", "Mackerel"],
            flag: "https://flagcdn.com/jp.svg"
        },
        "South Korea": {
            foods: ["Pork Belly", "Kimchi", "Eggs", "Seaweed", "Avocados"],
            flag: "https://flagcdn.com/kr.svg"
        },
        "China": {
            foods: ["Tofu", "Pork", "Eggs", "Bok Choy", "Sesame Oil"],
            flag: "https://flagcdn.com/cn.svg"
        },
        "India": {
            foods: ["Coconut Oil", "Paneer", "Ghee", "Cauliflower", "Spinach"],
            flag: "https://flagcdn.com/in.svg"
        },
        "Mexico": {
            foods: ["Avocados", "Beef", "Pork", "Cheese", "Coconut Oil"],
            flag: "https://flagcdn.com/mx.svg"
        },
        "Brazil": {
            foods: ["Picanha", "Cheese", "Eggs", "Coconut Oil", "Cashews"],
            flag: "https://flagcdn.com/br.svg"
        },
        "Argentina": {
            foods: ["Beef", "Eggs", "Cheese", "Spinach", "Avocados"],
            flag: "https://flagcdn.com/ar.svg"
        },
        "South Africa": {
            foods: ["Biltong", "Avocados", "Eggs", "Cheese", "Spinach"],
            flag: "https://flagcdn.com/za.svg"
        },
        "Russia": {
            foods: ["Sour Cream", "Salmon", "Cabbage", "Pork", "Butter"],
            flag: "https://flagcdn.com/ru.svg"
        },
        "Turkey": {
            foods: ["Lamb", "Olive Oil", "Eggs", "Cheese", "Zucchini"],
            flag: "https://flagcdn.com/tr.svg"
        },
        "Greece": {
            foods: ["Feta Cheese", "Olive Oil", "Lamb", "Eggplant", "Zucchini"],
            flag: "https://flagcdn.com/gr.svg"
        },
        "Sweden": {
            foods: ["Salmon", "Eggs", "Butter", "Cheese", "Spinach"],
            flag: "https://flagcdn.com/se.svg"
        },
        "Norway": {
            foods: ["Mackerel", "Eggs", "Cheese", "Spinach", "Butter"],
            flag: "https://flagcdn.com/no.svg"
        },
        "Finland": {
            foods: ["Salmon", "Butter", "Cheese", "Eggs", "Spinach"],
            flag: "https://flagcdn.com/fi.svg"
        },
        "Denmark": {
            foods: ["Pork", "Butter", "Eggs", "Cheese", "Spinach"],
            flag: "https://flagcdn.com/dk.svg"
        },
        "Netherlands": {
            foods: ["Gouda Cheese", "Butter", "Eggs", "Beef", "Spinach"],
            flag: "https://flagcdn.com/nl.svg"
        },
        "Belgium": {
            foods: ["Cheese", "Butter", "Eggs", "Spinach", "Beef"],
            flag: "https://flagcdn.com/be.svg"
        },
        "Switzerland": {
            foods: ["Gruyère Cheese", "Butter", "Eggs", "Beef", "Spinach"],
            flag: "https://flagcdn.com/ch.svg"
        },
        "Austria": {
            foods: ["Sausages", "Cheese", "Butter", "Eggs", "Spinach"],
            flag: "https://flagcdn.com/at.svg"
        },
        "Poland": {
            foods: ["Sausages", "Cheese", "Butter", "Eggs", "Cabbage"],
            flag: "https://flagcdn.com/pl.svg"
        },
        "Czech Republic": {
            foods: ["Pork", "Cheese", "Butter", "Eggs", "Spinach"],
            flag: "https://flagcdn.com/cz.svg"
        },
        "Hungary": {
            foods: ["Paprika Sausages", "Cheese", "Butter", "Eggs", "Pork"],
            flag: "https://flagcdn.com/hu.svg"
        },
        "Portugal": {
            foods: ["Bacalhau", "Olive Oil", "Eggs", "Cheese", "Spinach"],
            flag: "https://flagcdn.com/pt.svg"
        },
        "Ireland": {
            foods: ["Butter", "Eggs", "Cheese", "Bacon", "Cabbage"],
            flag: "https://flagcdn.com/ie.svg"
        },
        "New Zealand": {
            foods: ["Lamb", "Eggs", "Butter", "Spinach", "Cheese"],
            flag: "https://flagcdn.com/nz.svg"
        },
        "Chile": {
            foods: ["Salmon", "Avocados", "Beef", "Eggs", "Cheese"],
            flag: "https://flagcdn.com/cl.svg"
        },
        "Colombia": {
            foods: ["Avocados", "Cheese", "Eggs", "Pork", "Spinach"],
            flag: "https://flagcdn.com/co.svg"
        },
        "Peru": {
            foods: ["Avocados", "Cheese", "Eggs", "Chicken", "Spinach"],
            flag: "https://flagcdn.com/pe.svg"
        },
        "Venezuela": {
            foods: ["Avocados", "Pork", "Eggs", "Cheese", "Butter"],
            flag: "https://flagcdn.com/ve.svg"
        },
        "Cuba": {
            foods: ["Pork", "Avocados", "Eggs", "Cheese", "Butter"],
            flag: "https://flagcdn.com/cu.svg"
        },
        "Dominican Republic": {
            foods: ["Pork", "Cheese", "Eggs", "Avocados", "Butter"],
            flag: "https://flagcdn.com/do.svg"
        },
        "Panama": {
            foods: ["Pork", "Cheese", "Eggs", "Avocados", "Butter"],
            flag: "https://flagcdn.com/pa.svg"
        },
        "Costa Rica": {
            foods: ["Avocados", "Cheese", "Eggs", "Chicken", "Spinach"],
            flag: "https://flagcdn.com/cr.svg"
        },
        "Honduras": {
            foods: ["Avocados", "Cheese", "Eggs", "Chicken", "Spinach"],
            flag: "https://flagcdn.com/hn.svg"
        },
        "El Salvador": {
            foods: ["Avocados", "Cheese", "Eggs", "Chicken", "Spinach"],
            flag: "https://flagcdn.com/sv.svg"
        },
        "Guatemala": {
            foods: ["Avocados", "Cheese", "Eggs", "Chicken", "Spinach"],
            flag: "https://flagcdn.com/gt.svg"
        },
        "Nicaragua": {
            foods: ["Pork", "Avocados", "Cheese", "Eggs", "Butter"],
            flag: "https://flagcdn.com/ni.svg"
        },
        "Ecuador": {
            foods: ["Avocados", "Cheese", "Eggs", "Chicken", "Spinach"],
            flag: "https://flagcdn.com/ec.svg"
        },
        "Uruguay": {
            foods: ["Beef", "Eggs", "Cheese", "Spinach", "Avocados"],
            flag: "https://flagcdn.com/uy.svg"
        },
        "Paraguay": {
            foods: ["Beef", "Eggs", "Cheese", "Spinach", "Avocados"],
            flag: "https://flagcdn.com/py.svg"
        },
        "Bolivia": {
            foods: ["Avocados", "Cheese", "Eggs", "Chicken", "Spinach"],
            flag: "https://flagcdn.com/bo.svg"
        },
        "Algeria": {
            foods: ["Lamb", "Olive Oil", "Eggs", "Cheese", "Zucchini"],
            flag: "https://flagcdn.com/dz.svg"
        },
        "Morocco": {
            foods: ["Lamb", "Olive Oil", "Eggs", "Cheese", "Zucchini"],
            flag: "https://flagcdn.com/ma.svg"
        },
        "Egypt": {
            foods: ["Lamb", "Olive Oil", "Eggs", "Cheese", "Zucchini"],
            flag: "https://flagcdn.com/eg.svg"
        },
        "Nigeria": {
            foods: ["Goat", "Palm Oil", "Eggs", "Spinach", "Avocados"],
            flag: "https://flagcdn.com/ng.svg"
        },
        "Kenya": {
            foods: ["Goat", "Eggs", "Avocados", "Spinach", "Butter"],
            flag: "https://flagcdn.com/ke.svg"
        },
        "Tanzania": {
            foods: ["Goat", "Eggs", "Avocados", "Spinach", "Butter"],
            flag: "https://flagcdn.com/tz.svg"
        },
        "Uganda": {
            foods: ["Pork", "Eggs", "Avocados", "Spinach", "Butter"],
            flag: "https://flagcdn.com/ug.svg"
        },
        "Ethiopia": {
            foods: ["Lamb", "Clarified Butter", "Eggs", "Cheese", "Spinach"],
            flag: "https://flagcdn.com/et.svg"
        },
        "Israel": {
            foods: ["Avocados", "Olive Oil", "Eggs", "Cheese", "Zucchini"],
            flag: "https://flagcdn.com/il.svg"
        },
        "Saudi Arabia": {
            foods: ["Lamb", "Olive Oil", "Eggs", "Cheese", "Zucchini"],
            flag: "https://flagcdn.com/sa.svg"
        },
        "United Arab Emirates": {
            foods: ["Lamb", "Olive Oil", "Eggs", "Cheese", "Zucchini"],
            flag: "https://flagcdn.com/ae.svg"
        },
        "Qatar": {
            foods: ["Lamb", "Olive Oil", "Eggs", "Cheese", "Zucchini"],
            flag: "https://flagcdn.com/qa.svg"
        },
        "Oman": {
            foods: ["Lamb", "Olive Oil", "Eggs", "Cheese", "Zucchini"],
            flag: "https://flagcdn.com/om.svg"
        }
    };
    

    // Populate datalist options
    const countryInput = document.getElementById("country-input");
    const dataList = document.getElementById("countries-list");

    Object.keys(ketoFoods).forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        dataList.appendChild(option);
    });

    //  form 
    document.getElementById("keto-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const countryName = countryInput.value.trim();
        const resultsDiv = document.getElementById("results");

        if (ketoFoods[countryName]) {
            const foods = ketoFoods[countryName].foods;
            const flag = ketoFoods[countryName].flag;
            resultsDiv.innerHTML = `
                <img src="${flag}" alt="${countryName} Flag" class="country-flag">
                <h3>Common Keto Foods in ${countryName}:</h3>
                <ul>
                    ${foods.map(food => `<li>${food}</li>`).join('')}
                </ul>`;
        } else {
            resultsDiv.innerHTML = `<p>Sorry, we don't have keto food information for ${countryName}.</p>`;
        }
    });
});
