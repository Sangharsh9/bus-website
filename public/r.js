// data array
const routes=[
    {route: 'Yeola', pass: 2370, ticket: 55},
    {route: 'Tol Naka', pass: 1840, ticket: 45},
    {route: 'Yesgaon', pass: 1320, ticket: 35},
    {route: 'Nagarsul', pass: 2890, ticket: 65},
    {route: 'Savargaon', pass: 2630, ticket: 60},
    {route: 'Andarsul', pass: 2370, ticket: 55},
    {route: 'Pipalgaonjalal', pass: 1840, ticket: 45},
    {route: 'Undirwadi', pass: 2100, ticket: 50},
    {route: 'Chasnali', pass: 2890, ticket: 65},
    {route: 'Handewadi', pass: 2630, ticket: 60},
    {route: 'Karwadi', pass: 2530, ticket: 60},
    {route: 'Velapur', pass: 2100, ticket: 50},
    {route: 'Kolpewadi', pass: 2100, ticket: 50},
    {route: 'Mahegaon Deshmukh', pass: 1740, ticket: 45},
    {route: 'Sahajapur', pass: 2370, ticket: 50},
    {route: 'Pangavhane Wasti', pass: 1840, ticket: 45},
    {route: 'Kumbhari', pass: 1580, ticket: 40},
    {route: 'Dharangaon', pass: 1580, ticket: 40},
    {route: 'Murshatpur Fata', pass: 1470, ticket: 40},
    {route: 'Kekan Wasti', pass: 1370, ticket: 35},
    {route: 'Sambhaji Chowk', pass: 1320, ticket: 35},
    {route: 'Kopargaon', pass: 1320, ticket: 35},
    {route: 'Shrirampur', pass: 4200, ticket: 90},
    {route: 'Gondhvani', pass: 3680, ticket: 85},
    {route: 'KhireNimgaon', pass: 3420, ticket: 75},
    {route: 'Gondegaon', pass: 3150, ticket: 70},
    {route: 'Puntamba', pass: 3000, ticket: 65},
    {route: 'Borbane Wasti', pass: 2630, ticket: 60},
    {route: 'Sade Phata', pass: 2000, ticket: 50},
    {route: 'Shingave', pass: 2210, ticket: 55},
    {route: 'Maruti Mandir', pass: 1580, ticket: 40},
    {route: 'Puntamba Phata', pass: 1320, ticket: 40},
    {route: 'Pohegaon', pass: 2100, ticket: 50},
    {route: 'Zagde Phata', pass: 1890, ticket: 45},
    {route: 'Chandekasare', pass: 1790, ticket: 45},
    {route: 'Wavi', pass: 2630, ticket: 60},
    {route: 'Pathare', pass: 2370, ticket: 55},
    {route: 'Madhi Phata', pass: 2210, ticket: 55},
    {route: 'Derde', pass: 2100, ticket: 50},
    {route: 'Dauch', pass: 1580, ticket: 40},
    {route: 'Jeour Phata', pass: 1320, ticket: 40},
    {route: 'Erandgaon', pass: 3000, ticket: 65},
    {route: 'Bharwas Phata', pass: 3680, ticket: 80},
    {route: 'Deshmane', pass: 3420, ticket: 75},
    {route: 'Vinchur', pass: 3800, ticket: 85},
    {route: 'Lasalgaon', pass: 4200, ticket: 90},
    {route: 'Dahiwadi', pass: 3000, ticket: 65},
    {route: 'Savargaon', pass:2630},
    {route: 'Bangao', pass: 3750},
    {route: 'Tandulwadi', pass: 3850},
    {route: 'Balwadi', pass: 4000},
    {route: 'Wakadi', pass: 3150, ticket: 70},
    {route: 'Ganesh Nagar', pass: 2890, ticket: 65},
    {route: 'Ekrukhe', pass: 2630, ticket: 60},
    {route: 'Astagaon', pass: 2630, ticket: 60},
    {route: 'Rahata', pass: 2370, ticket: 55},
    {route: 'Sakuri', pass: 2310, ticket: 55},
    {route: 'Kandamarket', pass: 2260, ticket: 50},
    {route: 'Shirdi Shiv', pass: 2210, ticket: 50},
    {route: 'Shirdi', pass: 2100, ticket: 50},
    {route: 'Nimgaon Nighoj', pass: 1840, ticket: 45},
    {route: 'Savalivihir', pass: 1790, ticket: 45},
    {route: 'Aatma Malik', pass: 1580, ticket: 40},
    {route: 'Tm Ch', pass: 1580, ticket: 40},
    {route: 'Puntamba Phata', pass: 1320, ticket: 40},
    {route: 'Nandurkhij', pass: 2370, ticket: 55},
    {route: 'Kohalre', pass: 2630, ticket: 60},
    {route: 'Dorhale', pass: 2370, ticket: 55},
    {route: 'Mukhed', pass: 2890, ticket: 65},
    {route: 'Dhamori', pass: 2370, ticket: 55},
    {route: 'Mahegaon Devi', pass: 2370, ticket: 55},
    {route: 'Sangavi Phata', pass: 2100, ticket: 50},
    {route: 'Rawanda', pass: 1840, ticket: 45},
    {route: 'Brahmangaon', pass: 1840, ticket: 45},
    {route: 'Sachchari', pass: 1580, ticket: 40},
    {route: 'Takali', pass: 1470, ticket: 40},
    {route: 'Vaijapur', pass: 2630, ticket: 60},
    {route: 'Ukadgaon', pass: 2100, ticket: 50},
    {route: 'Shirasgaon Tilwani', pass: 1840, ticket: 45},
    {route: 'Apegaon', pass: 1950, ticket: 50},
    {route: 'Padhegaon', pass: 1580, ticket: 40},
    {route: 'Godhegaon Phata', pass: 1790, ticket: 45},
    {route: 'Dahegaon', pass: 1680, ticket: 45},
    {route: 'Savantsar', pass: 1580, ticket: 40},
    {route: '9 Chari', pass: 1050, ticket: 35},
    {route: 'Bhagaon', pass: 2520, ticket: 55},
    {route: 'Belgaon', pass: 2370, ticket: 55},
    {route: 'SuralePati', pass: 2100, ticket: 50},
    {route: 'Talegaon', pass: 1840, ticket: 45},
    {route: 'Belgon', pass: 2200, ticket: 50},
    {route: 'Dasthrwadi', pass: 1700, ticket: 45},
    {route: 'Babhaleshwar', pass: 3150, ticket: 70},
    {route: 'Nirmal Pimpal', pass: 2890, ticket: 65},
    {route: 'Pangari', pass: 2750, ticket: 60},
    {route: 'Sinnar', pass: 4500, ticket: 95},
    {route: 'Rajapur', pass: 3350, ticket: 70},
    {route: 'Nandgaon', pass: 4300, ticket: 95},
    {route: 'Panchael (Saha)', pass: 3300, ticket: 80},
    {route: 'Dahiwadi', pass: 3100, ticket: 70},
    {route: 'wadacha mala ', pass: 2520},
    {route: 'somthane', pass: 3450},
    {route: 'bhovari phata ', pass: 3550, },
    {route: 'Dahiwadi', pass: 3100, ticket: 70},
    {route:'khiradii' ,pass:3560}
];

function searchRoute() {
    const input = document.getElementById('searchRoute').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    const matchedRoute = routes.find(routeObj => routeObj.route.toLowerCase() === input);
    const availabilityText = matchedRoute? 
        `<span style="color: white; background-color: green; padding: 4px; border-radius: 4px;">YES</span>` : 
        `<span style="color: white; background-color: red; padding: 4px; border-radius: 4px;">NO</span>`;

    if (matchedRoute) {
 
        resultDiv.innerHTML = `
            <p><strong>Bus Availability:</strong> ${availabilityText}</p>
            <p><strong>Route:</strong> ${matchedRoute.route}</p>
            <p><strong>Pass Price:</strong> ${matchedRoute.pass}</p>
            <p><strong>Ticket Price:</strong> ${matchedRoute.ticket}</p>
        `;
    } else {
        resultDiv.innerHTML = `
        <p>No matching route found.</p>
        <p><strong>Bus Availability:</strong> ${availabilityText}</p>
        `;
    }
}   