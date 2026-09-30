const vehicles = [
// Архив бронетехники 1938–1992
// year — год принятия на вооружение / начала серийного производства
// crew — штатный экипаж (без десанта)

  // ===== Germany =====
  { name: "Panzer 38(t)", country: "Germany", year: 1939, type: "Light tank", crew: 4 },
  { name: "Panzer II Ausf. F", country: "Germany", year: 1941, type: "Light tank", crew: 3 },
  { name: "Panzer III Ausf. J", country: "Germany", year: 1941, type: "Medium tank", crew: 5 },
  { name: "Panzer IV Ausf. H", country: "Germany", year: 1943, type: "Medium tank", crew: 5 },
  { name: "Panther Ausf. D", country: "Germany", year: 1943, type: "Medium tank", crew: 5 },
  { name: "Tiger I", country: "Germany", year: 1942, type: "Heavy tank", crew: 5 },
  { name: "Tiger II", country: "Germany", year: 1944, type: "Heavy tank", crew: 5 },
  { name: "StuG III Ausf. G", country: "Germany", year: 1942, type: "Assault gun", crew: 4 },
  { name: "Hetzer", country: "Germany", year: 1944, type: "Tank destroyer", crew: 4 },
  { name: "Jagdpanther", country: "Germany", year: 1944, type: "Tank destroyer", crew: 5 },
  { name: "Elefant", country: "Germany", year: 1943, type: "Tank destroyer", crew: 6 },
  { name: "Nashorn", country: "Germany", year: 1943, type: "Tank destroyer", crew: 5 },
  { name: "Marder III", country: "Germany", year: 1942, type: "Tank destroyer", crew: 4 },
  { name: "Wespe", country: "Germany", year: 1943, type: "Self-propelled howitzer", crew: 5 },
  { name: "Hummel", country: "Germany", year: 1943, type: "Self-propelled howitzer", crew: 5 },
  { name: "Brummbär", country: "Germany", year: 1943, type: "Assault gun", crew: 5 },
  { name: "Sturmtiger", country: "Germany", year: 1944, type: "Assault mortar", crew: 5 },
  { name: "Maus", country: "Germany", year: 1944, type: "Super-heavy tank", crew: 6 },
  { name: "Sd.Kfz. 251", country: "Germany", year: 1939, type: "Half-track APC", crew: 2 },
  { name: "Sd.Kfz. 234/2 Puma", country: "Germany", year: 1943, type: "Armored car", crew: 4 },
  { name: "Leopard 1", country: "West Germany", year: 1965, type: "Main battle tank", crew: 4 },
  { name: "Leopard 2", country: "West Germany", year: 1979, type: "Main battle tank", crew: 4 },
  { name: "Marder", country: "West Germany", year: 1971, type: "IFV", crew: 4 },
  { name: "Gepard", country: "West Germany", year: 1976, type: "SPAAG", crew: 3 },
  { name: "Spähpanzer Luchs", country: "West Germany", year: 1975, type: "Reconnaissance vehicle", crew: 4 },
  { name: "TPz Fuchs", country: "West Germany", year: 1979, type: "APC", crew: 2 },

  // ===== USSR =====
  { name: "BT-7M", country: "USSR", year: 1938, type: "Light tank", crew: 3 },
  { name: "T-34-76", country: "USSR", year: 1940, type: "Medium tank", crew: 4 },
  { name: "T-34-85", country: "USSR", year: 1944, type: "Medium tank", crew: 5 },
  { name: "KV-1", country: "USSR", year: 1939, type: "Heavy tank", crew: 5 },
  { name: "KV-2", country: "USSR", year: 1940, type: "Heavy tank", crew: 6 },
  { name: "IS-2", country: "USSR", year: 1944, type: "Heavy tank", crew: 4 },
  { name: "IS-3", country: "USSR", year: 1945, type: "Heavy tank", crew: 4 },
  { name: "T-44", country: "USSR", year: 1944, type: "Medium tank", crew: 4 },
  { name: "T-54", country: "USSR", year: 1947, type: "Main battle tank", crew: 4 },
  { name: "T-55", country: "USSR", year: 1958, type: "Main battle tank", crew: 4 },
  { name: "T-62", country: "USSR", year: 1961, type: "Main battle tank", crew: 4 },
  { name: "T-64", country: "USSR", year: 1967, type: "Main battle tank", crew: 3 },
  { name: "T-72", country: "USSR", year: 1973, type: "Main battle tank", crew: 3 },
  { name: "T-80", country: "USSR", year: 1976, type: "Main battle tank", crew: 3 },
  { name: "T-90", country: "Russia", year: 1992, type: "Main battle tank", crew: 3 },
  { name: "T-10", country: "USSR", year: 1953, type: "Heavy tank", crew: 4 },
  { name: "PT-76", country: "USSR", year: 1951, type: "Amphibious light tank", crew: 3 },
  { name: "T-70", country: "USSR", year: 1942, type: "Light tank", crew: 2 },
  { name: "T-60", country: "USSR", year: 1941, type: "Light tank", crew: 2 },
  { name: "SU-76M", country: "USSR", year: 1943, type: "Self-propelled gun", crew: 4 },
  { name: "SU-85", country: "USSR", year: 1943, type: "Tank destroyer", crew: 4 },
  { name: "SU-100", country: "USSR", year: 1944, type: "Tank destroyer", crew: 4 },
  { name: "SU-152", country: "USSR", year: 1943, type: "Assault gun", crew: 5 },
  { name: "ISU-152", country: "USSR", year: 1943, type: "Assault gun", crew: 5 },
  { name: "BTR-152", country: "USSR", year: 1950, type: "APC", crew: 2 },
  { name: "BTR-60", country: "USSR", year: 1960, type: "APC", crew: 2 },
  { name: "BTR-80", country: "USSR", year: 1986, type: "APC", crew: 3 },
  { name: "BMP-1", country: "USSR", year: 1966, type: "IFV", crew: 3 },
  { name: "BMP-2", country: "USSR", year: 1980, type: "IFV", crew: 3 },
  { name: "BMD-1", country: "USSR", year: 1969, type: "Airborne IFV", crew: 3 },
  { name: "BRDM-2", country: "USSR", year: 1962, type: "Armored scout car", crew: 4 },
  { name: "ZSU-23-4 Shilka", country: "USSR", year: 1965, type: "SPAAG", crew: 4 },
  { name: "2S1 Gvozdika", country: "USSR", year: 1971, type: "Self-propelled howitzer", crew: 4 },
  { name: "2S3 Akatsiya", country: "USSR", year: 1971, type: "Self-propelled howitzer", crew: 4 },

  // ===== USA =====
  { name: "M3 Stuart", country: "USA", year: 1941, type: "Light tank", crew: 4 },
  { name: "M24 Chaffee", country: "USA", year: 1944, type: "Light tank", crew: 5 },
  { name: "M3 Lee", country: "USA", year: 1941, type: "Medium tank", crew: 6 },
  { name: "M4 Sherman", country: "USA", year: 1942, type: "Medium tank", crew: 5 },
  { name: "M26 Pershing", country: "USA", year: 1945, type: "Heavy tank", crew: 5 },
  { name: "M47 Patton", country: "USA", year: 1952, type: "Main battle tank", crew: 5 },
  { name: "M48 Patton", country: "USA", year: 1953, type: "Main battle tank", crew: 4 },
  { name: "M60 Patton", country: "USA", year: 1960, type: "Main battle tank", crew: 4 },
  { name: "M1 Abrams", country: "USA", year: 1980, type: "Main battle tank", crew: 4 },
  { name: "M10 Wolverine", country: "USA", year: 1942, type: "Tank destroyer", crew: 5 },
  { name: "M18 Hellcat", country: "USA", year: 1943, type: "Tank destroyer", crew: 5 },
  { name: "M36 Jackson", country: "USA", year: 1944, type: "Tank destroyer", crew: 5 },
  { name: "M8 Greyhound", country: "USA", year: 1943, type: "Armored car", crew: 4 },
  { name: "M3 Half-track", country: "USA", year: 1940, type: "Half-track APC", crew: 2 },
  { name: "M7 Priest", country: "USA", year: 1942, type: "Self-propelled howitzer", crew: 7 },
  { name: "M41 Walker Bulldog", country: "USA", year: 1951, type: "Light tank", crew: 4 },
  { name: "M113", country: "USA", year: 1960, type: "APC", crew: 2 },
  { name: "M2 Bradley", country: "USA", year: 1981, type: "IFV", crew: 3 },
  { name: "M551 Sheridan", country: "USA", year: 1967, type: "Light tank", crew: 4 },
  { name: "M109", country: "USA", year: 1963, type: "Self-propelled howitzer", crew: 6 },
  { name: "M163 VADS", country: "USA", year: 1969, type: "SPAAG", crew: 4 },
  { name: "LAV-25", country: "USA", year: 1983, type: "Armored reconnaissance vehicle", crew: 3 },
  { name: "AAV-7", country: "USA", year: 1972, type: "Amphibious APC", crew: 3 },
  { name: "M88 Hercules", country: "USA", year: 1961, type: "Armored recovery vehicle", crew: 4 },

  // ===== United Kingdom =====
  { name: "Cruiser Mk III (A13)", country: "UK", year: 1938, type: "Cruiser tank", crew: 4 },
  { name: "Matilda II", country: "UK", year: 1939, type: "Infantry tank", crew: 4 },
  { name: "Valentine", country: "UK", year: 1940, type: "Infantry tank", crew: 3 },
  { name: "Churchill", country: "UK", year: 1941, type: "Infantry tank", crew: 5 },
  { name: "Crusader", country: "UK", year: 1941, type: "Cruiser tank", crew: 5 },
  { name: "Cromwell", country: "UK", year: 1943, type: "Cruiser tank", crew: 5 },
  { name: "Comet", country: "UK", year: 1944, type: "Cruiser tank", crew: 5 },
  { name: "Sherman Firefly", country: "UK", year: 1944, type: "Medium tank", crew: 4 },
  { name: "Centurion", country: "UK", year: 1945, type: "Main battle tank", crew: 4 },
  { name: "Conqueror", country: "UK", year: 1955, type: "Heavy tank", crew: 4 },
  { name: "Chieftain", country: "UK", year: 1966, type: "Main battle tank", crew: 4 },
  { name: "Challenger 1", country: "UK", year: 1983, type: "Main battle tank", crew: 4 },
  { name: "Daimler Dingo", country: "UK", year: 1939, type: "Scout car", crew: 2 },
  { name: "Saladin", country: "UK", year: 1958, type: "Armored car", crew: 3 },
  { name: "Saracen", country: "UK", year: 1952, type: "APC", crew: 2 },
  { name: "Scorpion", country: "UK", year: 1972, type: "Light tank", crew: 3 },
  { name: "FV432", country: "UK", year: 1962, type: "APC", crew: 2 },
  { name: "Warrior", country: "UK", year: 1988, type: "IFV", crew: 3 },

  // ===== France =====
  { name: "Hotchkiss H39", country: "France", year: 1938, type: "Light tank", crew: 2 },
  { name: "Somua S40", country: "France", year: 1940, type: "Medium tank", crew: 3 },
  { name: "AMX-13", country: "France", year: 1953, type: "Light tank", crew: 3 },
  { name: "AMX-30", country: "France", year: 1967, type: "Main battle tank", crew: 4 },
  { name: "Leclerc", country: "France", year: 1992, type: "Main battle tank", crew: 3 },
  { name: "Panhard EBR", country: "France", year: 1950, type: "Armored car", crew: 4 },
  { name: "AMX-10 RC", country: "France", year: 1978, type: "Armored reconnaissance vehicle", crew: 4 },
  { name: "AMX-10P", country: "France", year: 1973, type: "IFV", crew: 3 },
  { name: "VAB", country: "France", year: 1976, type: "APC", crew: 2 },
  { name: "Panhard AML", country: "France", year: 1961, type: "Armored car", crew: 3 },

  // ===== Italy =====
  { name: "Fiat M13/40", country: "Italy", year: 1940, type: "Medium tank", crew: 4 },
  { name: "Semovente 75/18", country: "Italy", year: 1941, type: "Assault gun", crew: 3 },
  { name: "Carro Armato P26/40", country: "Italy", year: 1943, type: "Heavy tank", crew: 4 },
  { name: "Autoblinda AB 41", country: "Italy", year: 1941, type: "Armored car", crew: 4 },
  { name: "OF-40", country: "Italy", year: 1980, type: "Main battle tank", crew: 4 },
  { name: "B1 Centauro", country: "Italy", year: 1991, type: "Tank destroyer", crew: 4 },

  // ===== Japan =====
  { name: "Type 98 Ke-Ni", country: "Japan", year: 1938, type: "Light tank", crew: 3 },
  { name: "Type 97 Shinhoto Chi-Ha", country: "Japan", year: 1942, type: "Medium tank", crew: 4 },
  { name: "Type 3 Chi-Nu", country: "Japan", year: 1944, type: "Medium tank", crew: 5 },
  { name: "Type 61", country: "Japan", year: 1961, type: "Main battle tank", crew: 4 },
  { name: "Type 74", country: "Japan", year: 1975, type: "Main battle tank", crew: 4 },
  { name: "Type 90", country: "Japan", year: 1990, type: "Main battle tank", crew: 3 },
  { name: "Type 89 IFV", country: "Japan", year: 1989, type: "IFV", crew: 3 },

  // ===== China =====
  { name: "Type 59", country: "China", year: 1958, type: "Main battle tank", crew: 4 },
  { name: "Type 63", country: "China", year: 1963, type: "Amphibious light tank", crew: 4 },
  { name: "Type 69", country: "China", year: 1982, type: "Main battle tank", crew: 4 },
  { name: "Type 80", country: "China", year: 1985, type: "Main battle tank", crew: 4 },
  { name: "Type 86", country: "China", year: 1987, type: "IFV", crew: 3 },

  // ===== Other countries =====
  { name: "Strv m/42", country: "Sweden", year: 1943, type: "Medium tank", crew: 4 },
  { name: "Strv 103 (S-tank)", country: "Sweden", year: 1966, type: "Main battle tank", crew: 3 },
  { name: "LT vz. 38", country: "Czechoslovakia", year: 1938, type: "Light tank", crew: 4 },
  { name: "OT-64 SKOT", country: "Czechoslovakia", year: 1964, type: "APC", crew: 2 },
  { name: "Panzer 68", country: "Switzerland", year: 1971, type: "Main battle tank", crew: 4 },
  { name: "Merkava Mk 1", country: "Israel", year: 1979, type: "Main battle tank", crew: 4 },
  { name: "Merkava Mk 3", country: "Israel", year: 1989, type: "Main battle tank", crew: 4 },
  { name: "M-84", country: "Yugoslavia", year: 1984, type: "Main battle tank", crew: 3 },
  { name: "EE-9 Cascavel", country: "Brazil", year: 1974, type: "Armored car", crew: 3 },
  { name: "Vijayanta", country: "India", year: 1965, type: "Main battle tank", crew: 4 },
  { name: "Ratel 20", country: "South Africa", year: 1976, type: "IFV", crew: 3 },
  { name: "Toldi I", country: "Hungary", year: 1940, type: "Light tank", crew: 3 },
  { name: "K1", country: "South Korea", year: 1987, type: "Main battle tank", crew: 4 },
  { name: "TAM", country: "Argentina", year: 1979, type: "Medium tank", crew: 4 },
  { name: "SK 105 Kürassier", country: "Austria", year: 1971, type: "Light tank / tank destroyer", crew: 3 },
  { name: "Mareșal M-05", country: "Romania", year: 1943, type: "Tank destroyer", crew: 3 },
  { name: "Ram Mk I", country: "Canada", year: 1941, type: "Cruiser tank", crew: 5 },
  { name: "Sentinel AC1", country: "Australia", year: 1942, type: "Cruiser tank", crew: 5 },
  { name: "YPR-765", country: "Netherlands", year: 1977, type: "IFV", crew: 3 },

  // ===== Дополнение: новые страны =====
  { name: "OT-62 TOPAS", country: "Poland", year: 1962, type: "Amphibious APC", crew: 2 },
  { name: "AMX-30E", country: "Spain", year: 1974, type: "Main battle tank", crew: 4 },
  { name: "BMR-600", country: "Spain", year: 1979, type: "APC", crew: 2 },
  { name: "BT-42", country: "Finland", year: 1943, type: "Assault gun", crew: 4 },
  { name: "Sisu XA-180 Pasi", country: "Finland", year: 1983, type: "APC", crew: 2 },
  { name: "Walid", country: "Egypt", year: 1964, type: "APC", crew: 2 },
  { name: "Fahd", country: "Egypt", year: 1978, type: "APC", crew: 2 },
  { name: "Chonma-ho", country: "North Korea", year: 1980, type: "Main battle tank", crew: 4 },
  { name: "M1978 Koksan", country: "North Korea", year: 1978, type: "Self-propelled gun", crew: 5 },

  // ===== Дополнение: бронемашины обеспечения =====
  { name: "Bergepanther", country: "Germany", year: 1943, type: "Armored recovery vehicle", crew: 3 },
  { name: "BREM-1", country: "USSR", year: 1974, type: "Armored recovery vehicle", crew: 3 },
  { name: "MTU-20", country: "USSR", year: 1957, type: "Bridgelayer", crew: 2 },
  { name: "M60 AVLB", country: "USA", year: 1963, type: "Bridgelayer", crew: 2 },
  { name: "Biber", country: "West Germany", year: 1975, type: "Bridgelayer", crew: 2 },
  { name: "Churchill AVRE", country: "UK", year: 1943, type: "Combat engineer vehicle", crew: 6 },
  { name: "M728 CEV", country: "USA", year: 1963, type: "Combat engineer vehicle", crew: 4 },
  { name: "IMR-2", country: "USSR", year: 1982, type: "Combat engineer vehicle", crew: 2 },

  // ===== Дополнение: самоходные зенитные установки =====
  { name: "Flakpanzer IV Wirbelwind", country: "Germany", year: 1944, type: "SPAAG", crew: 5 },
  { name: "M16 MGMC", country: "USA", year: 1943, type: "SPAAG", crew: 5 },
  { name: "M19 GMC", country: "USA", year: 1944, type: "SPAAG", crew: 6 },
  { name: "ZSU-57-2", country: "USSR", year: 1955, type: "SPAAG", crew: 6 },
  { name: "M42 Duster", country: "USA", year: 1953, type: "SPAAG", crew: 6 },
  { name: "2K22 Tunguska", country: "USSR", year: 1982, type: "Self-propelled AA gun-missile system", crew: 4 },
  { name: "Type 87 SPAAG", country: "Japan", year: 1987, type: "SPAAG", crew: 3 },

  // ===== Дополнение: лёгкие бронеавтомобили =====
  { name: "Daimler Armoured Car", country: "UK", year: 1941, type: "Armored car", crew: 3 },
  { name: "Ferret", country: "UK", year: 1952, type: "Scout car", crew: 2 },
  { name: "Staghound", country: "USA", year: 1942, type: "Armored car", crew: 5 },
  { name: "BA-64", country: "USSR", year: 1942, type: "Armored car", crew: 2 },
  { name: "Fox", country: "UK", year: 1973, type: "Armored car", crew: 3 },

  // ===== Дополнение: 1938–1941 =====
  { name: "Panzer I Ausf. F", country: "Germany", year: 1940, type: "Infantry tank", crew: 2 },
  { name: "Panzer IV Ausf. D", country: "Germany", year: 1939, type: "Medium tank", crew: 5 },
  { name: "StuG III Ausf. A", country: "Germany", year: 1940, type: "Assault gun", crew: 4 },
  { name: "T-26 Model 1939", country: "USSR", year: 1939, type: "Light tank", crew: 3 },
  { name: "T-40", country: "USSR", year: 1940, type: "Amphibious light tank", crew: 2 },
  { name: "T-50", country: "USSR", year: 1941, type: "Light tank", crew: 4 },
  { name: "FCM 36", country: "France", year: 1938, type: "Light tank", crew: 2 },
  { name: "M2 Medium", country: "USA", year: 1939, type: "Medium tank", crew: 6 },
  { name: "Tetrarch", country: "UK", year: 1940, type: "Light tank", crew: 3 },
  { name: "Covenanter", country: "UK", year: 1940, type: "Cruiser tank", crew: 4 },
  { name: "Fiat M11/39", country: "Italy", year: 1939, type: "Medium tank", crew: 3 },
  { name: "Type 1 Chi-He", country: "Japan", year: 1941, type: "Medium tank", crew: 5 },
  { name: "Turán I", country: "Hungary", year: 1941, type: "Medium tank", crew: 5 },

  // ===== Дополнение: 1950-е =====
  { name: "M103", country: "USA", year: 1957, type: "Heavy tank", crew: 5 },
  { name: "Object 279", country: "USSR", year: 1959, type: "Heavy tank (prototype)", crew: 4 },
  { name: "Panzer 58", country: "Switzerland", year: 1958, type: "Main battle tank", crew: 4 },
  { name: "Charioteer", country: "UK", year: 1954, type: "Medium tank", crew: 4 },
  { name: "M56 Scorpion", country: "USA", year: 1953, type: "Tank destroyer", crew: 4 },
  { name: "BTR-50", country: "USSR", year: 1954, type: "Amphibious APC", crew: 2 },
  { name: "M4A3E8 Sherman", country: "USA", year: 1944, type: "Medium tank", crew: 5 },

  // ===== Дополнение: 1980-е =====
  { name: "T-72B", country: "USSR", year: 1985, type: "Main battle tank", crew: 3 },
  { name: "T-80U", country: "USSR", year: 1985, type: "Main battle tank", crew: 3 },
  { name: "BMP-3", country: "USSR", year: 1987, type: "IFV", crew: 3 },
  { name: "BMD-2", country: "USSR", year: 1985, type: "Airborne IFV", crew: 3 },
  { name: "2S19 Msta-S", country: "USSR", year: 1989, type: "Self-propelled howitzer", crew: 5 },
  { name: "2S9 Nona", country: "USSR", year: 1981, type: "Self-propelled mortar", crew: 4 },
  { name: "M1A1 Abrams", country: "USA", year: 1985, type: "Main battle tank", crew: 4 },
  { name: "Leopard 2A4", country: "West Germany", year: 1985, type: "Main battle tank", crew: 4 },
  { name: "M3 Bradley CFV", country: "USA", year: 1983, type: "Cavalry fighting vehicle", crew: 5 },
  { name: "TR-85", country: "Romania", year: 1985, type: "Main battle tank", crew: 4 },
  { name: "Type 88", country: "China", year: 1988, type: "Main battle tank", crew: 4 },
  { name: "Rooikat", country: "South Africa", year: 1990, type: "Armored car", crew: 4 },
  { name: "Wiesel 1", country: "West Germany", year: 1990, type: "Light armored vehicle", crew: 3 },
]; 

const vehiclesContainer = document.querySelector("#vehicles-container");
const resultsCount = document.querySelector("#results-count"); 

function renderVehicles(vehicleList) { vehiclesContainer.innerHTML = ""; 
resultsCount.textContent =
    `Showing ${vehicleList.length} of ${vehicles.length} vehicles`;   
    vehicleList.forEach((vehicle) => {
    const card = document.createElement("div");

    card.innerHTML = ` 
    <h2>${vehicle.name}</h2> 
    <p>Country: ${vehicle.country}</p> 
    <p>Year: ${vehicle.year}</p> 
    <p>Type: ${vehicle.type}</p> 
    <p>Crew: ${vehicle.crew}</p>
    <button class="details-button">Show details</button>
    `; 
const detailsButton = card.querySelector(".details-button");
detailsButton.addEventListener("click", () => 
    { alert( 
        `${vehicle.name}\n\n` + 
        `Country: ${vehicle.country}\n` + 
        `Year: ${vehicle.year}\n` + 
        `Type: ${vehicle.type}\n` + 
        `Crew: ${vehicle.crew}` 
         );  
    });


 vehiclesContainer.appendChild(card);
});
}
renderVehicles(vehicles); 
// добавил счетчик вывода

const searchInput = document.querySelector("#search");
const countryFilter = document.querySelector("#country-filter");
function filterVehicles() { const searchText = searchInput.value.toLowerCase(); const selectedCountry = countryFilter.value;
const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch = vehicle.name
        .toLowerCase()
        .includes(searchText);

    const matchesCountry =
        selectedCountry === "all" ||
        vehicle.country === selectedCountry;

    return matchesSearch && matchesCountry;
});

renderVehicles(filteredVehicles);
}
searchInput.addEventListener("input", filterVehicles);
countryFilter.addEventListener("change", filterVehicles);
// Теперь поиск с сортировкой

const countries = [...new Set( vehicles.map((vehicle) => vehicle.country) )];
countries.sort();
countries.forEach((country) => { const option = document.createElement("option");
option.value = country;
option.textContent = country;

countryFilter.appendChild(option);
}); 
// автоматическое заполнение списка стран