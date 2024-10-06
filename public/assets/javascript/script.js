// Simulated user data
const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    subscriptionDate: "2023-01-25"
};

// Simulated news data
const newsData = [
    { title: "AI Breakthroughs in 2024", category: "Technology", date: "2024-09-15", source: "TechCrunch" },
    { title: "Economy Updates: Inflation and Growth", category: "Finance", date: "2024-09-14", source: "Bloomberg" },
    { title: "Wildfires in California", category: "Environment", date: "2024-09-13", source: "BBC" },
    { title: "New Health Guidelines for 2024", category: "Health", date: "2024-09-12", source: "WebMD" },
    { title: "2024 Election: Key Players", category: "Politics", date: "2024-09-11", source: "Reuters" }
];

// Simulated search history data
const searchHistory = [
    { user: "Jane Doe", topic: "Artificial Intelligence", date: "2024-09-12" },
    { user: "Jane Doe", topic: "Climate Change", date: "2024-09-10" },
    { user: "John Smith", topic: "Economy", date: "2024-09-14" },
    { user: "Jane Doe", topic: "Politics 2024", date: "2024-09-09" }
];

// Function to populate user data
function populateUserData() {
    const userTableBody = document.querySelector("#userTable tbody");
    const userRow = document.createElement("tr");

    userRow.innerHTML = `
        <td>${userData.name}</td>
        <td>${userData.email}</td>
        <td>${userData.subscriptionDate}</td>
    `;

    userTableBody.appendChild(userRow);
}

// Function to populate news data
function populateNewsData() {
    const newsTableBody = document.querySelector("#newsTable tbody");

    newsData.forEach(news => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${news.title}</td>
            <td>${news.category}</td>
            <td>${news.date}</td>
            <td>${news.source}</td>
        `;

        newsTableBody.appendChild(row);
    });
}

// Function to populate search history data
function populateSearchHistory() {
    const searchHistoryTableBody = document.querySelector("#searchHistoryTable tbody");

    searchHistory.forEach(record => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${record.user}</td>
            <td>${record.topic}</td>
            <td>${record.date}</td>
        `;

        searchHistoryTableBody.appendChild(row);
    });
}

document.getElementById('subscribeBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if (email) {
        // Redirect to a thank-you page (change URL as needed)
        window.location.href = 'congratulations.html';
    } else {
        alert('Please enter a valid email address.');
    }
});

// Social media links (can be customized with your actual URLs)
document.getElementById('twitter-link').addEventListener('click', function() {
    window.open('https://twitter.com', '_blank');
});
document.getElementById('facebook-link').addEventListener('click', function() {
    window.open('https://facebook.com', '_blank');
});
document.getElementById('instagram-link').addEventListener('click', function() {
    window.open('https://instagram.com', '_blank');
});
document.getElementById("learn-more-btn").addEventListener("click", function() {
    alert("Learn more about our company and team!");
});




    

