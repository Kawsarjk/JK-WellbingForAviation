
document.addEventListener("DOMContentLoaded", function() {
    //  location
    function fetchPrayerTimes(latitude, longitude) {
        const apiUrl = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const timings = data.data.timings;
                const prayerTimesList = document.getElementById("prayer-times-list");
                prayerTimesList.innerHTML = `
                    <li><span>Fajr</span><span>${timings.Fajr}</span></li>
                    <li><span>Dhuhr</span><span>${timings.Dhuhr}</span></li>
                    <li><span>Asr</span><span>${timings.Asr}</span></li>
                    <li><span>Maghrib</span><span>${timings.Maghrib}</span></li>
                    <li><span>Isha</span><span>${timings.Isha}</span></li>
                `;
            })
            .catch(error => {
                console.error("Error fetching prayer times:", error);
            });
    }

    // to get user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchPrayerTimes(latitude, longitude);
        }, error => {
            console.error("Error getting location:", error);
            alert("Could not get your location. Please allow location access and refresh the page.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});
