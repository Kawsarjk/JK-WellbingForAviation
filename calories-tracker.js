document.addEventListener("DOMContentLoaded", function() {
    const activities = {
        "Walking: moderate": 3.8,
        "Running: 6 mph": 9.8,
        "Cycling: 12-14 mph": 8.0,
        "Swimming": 6.0,
        "Yoga": 2.5,
        "Jumping rope": 12.0,
        "Hiking": 7.0,
        "Dancing": 5.5,
        "Rowing: moderate": 6.0,
        "Weightlifting: vigorous": 6.0,
        "Tennis: singles": 8.0,
        "Basketball: game": 8.0,
        "Elliptical trainer": 5.0,
        "Skiing: downhill": 6.0,
        "Boxing: sparring": 9.0,
        "Soccer: game": 10.0,
        
    };

    function calculateCaloriesBurned(activity, weight, hours, minutes) {
        const totalMinutes = (hours * 60) + minutes;
        const metValue = activities[activity];
        const caloriesBurned = (metValue * 3.5 * weight / 200) * totalMinutes;
        return Math.round(caloriesBurned);
    }

    document.getElementById("calories-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const activity = document.getElementById("activity-select").value;
        const weight = parseFloat(document.getElementById("weight-input").value);
        const hours = parseInt(document.getElementById("hours-input").value);
        const minutes = parseInt(document.getElementById("minutes-input").value);
        
        if (!isNaN(weight) && !isNaN(hours) && !isNaN(minutes)) {
            const caloriesBurned = calculateCaloriesBurned(activity, weight, hours, minutes);
            document.getElementById("results").innerHTML = `
                <h3>You burned approximately:</h3>
                <p>${caloriesBurned} calories</p>
            `;
        } else {
            document.getElementById("results").innerHTML = `<p>Please enter valid values.</p>`;
        }
    });
});
