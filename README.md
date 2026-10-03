# Armordex

Armordex is a web-based encyclopedia of armored fighting vehicles.

The project provides a searchable and filterable database of armored vehicles with detailed information about each vehicle, including country, year, type, crew, armament, weight, speed, and engine.

The project is built with vanilla HTML, CSS, and JavaScript and is designed as a practical frontend development portfolio project.

### Features:

- Browse a database of 200+ armored vehicles
- Search vehicles by:
 • name
 • country
 • vehicle type
- Filter by country
- Filter by vehicle type
- Sort vehicles by:
 • newest
 • oldest
 • name A–Z
 • name Z–A
- View detailed vehicle information in a modal window
- Responsive layout for desktop and mobile devices
- Mobile-friendly modal layout
- Lazy loading for vehicle images
- Graceful handling of missing vehicle data
- Accessible buttons and image descriptions
- Result counter showing the number of matching vehicles

### Vehicle Information 

Each vehicle can contain:
- Name
- Country
- Year
- Type
- Crew
- Armament
- Weight
- Speed
- Engine
- Image 

### Technologies
- HTML5
- CSS3
- JavaScript (ES6+)
- DOM manipulation
- Array methods
- Event listeners
- Filtering and sorting
- Responsive design
- Git / GitHub 

### Project Structure
Armordex:

- index.html
- style.css
- script.js
- README.md
- images
 
### How to Run
Clone the repository:
git clone YOUR_REPOSITORY_URL
Open the project directory:
cd Armordex
Then open index.html in a browser.
For development, the project can also be opened with a local development server such as the VS Code Live Server extension.
### How It Works
Vehicle data is stored in a JavaScript array of objects.
Filtering and sorting are performed on the vehicle dataset, and the resulting list is rendered dynamically into the page.
The details modal is populated dynamically when the user selects a vehicle.
The application uses DOM event listeners to handle:
- search input
- country filtering
- type filtering
- sorting
- modal opening
- modal closing
- Escape key interaction

### Responsive Design
The interface is designed to work on different screen sizes.
On smaller screens:
- vehicle cards adapt to the available width
- modal specifications switch from two columns to one
- modal images are reduced in height
- controls wrap when necessary
The layout has been tested using browser mobile-device emulation.

### Current Status
The core functionality of Armordex is implemented and working.
The project currently focuses on frontend functionality, UI/UX, responsive design, and JavaScript fundamentals.

### Future Improvements
Planned improvements may include:
- Favorites / bookmarked vehicles
- Persistent favorites using localStorage
- More detailed vehicle descriptions
- Additional vehicle specifications
- Improved vehicle data structure
- More advanced filtering
- Vehicle comparison
- Pagination or virtualized rendering for larger datasets
- Improved animations and transitions
- Unit tests
- Data loading from an external JSON file or API
- Deployment as a live web application

### Learning Goals
This project is being developed as a practical way to improve frontend development skills.
The main learning areas include:
- JavaScript fundamentals
- DOM manipulation
- Working with arrays and objects
- Event-driven programming
- Filtering and sorting data
- Responsive CSS
- UI/UX fundamentals
- Debugging
- Git and GitHub workflow
- Writing maintainable frontend code

### Author
Lev Kardakov
GitHub: wormwood-1
LinkedIn: lev-kardakov

### License
This project is intended primarily as a personal learning and portfolio project.