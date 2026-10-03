const vehicles = [
// Архив бронетехники 1938–1992
// year — год принятия на вооружение / начала серийного производства
// crew — штатный экипаж (без десанта)
// weight — боевая масса, т; speed — максимальная скорость по шоссе, км/ч
// engine: null — значение неизвестно; image — относительный путь к файлу изображения
 
  // ===== Germany =====
  { name: "Panzer 38(t)", country: "Germany", year: 1939, type: "Light tank", crew: 4, armament: "37 mm Škoda A7", weight: 9.7, speed: 42, engine: "Praga EPA", image: "images/panzer-38t.jpg" },
  { name: "Panzer II Ausf. F", country: "Germany", year: 1941, type: "Light tank", crew: 3, armament: "20 mm KwK 30", weight: 9.5, speed: 40, engine: "Maybach HL 62 TRM", image: "images/panzer-ii-ausf-f.jpg" },
  { name: "Panzer III Ausf. J", country: "Germany", year: 1941, type: "Medium tank", crew: 5, armament: "50 mm KwK 38 L/42", weight: 21.5, speed: 40, engine: "Maybach HL 120 TRM", image: "images/panzer-iii-ausf-j.jpg" },
  { name: "Panzer IV Ausf. H", country: "Germany", year: 1943, type: "Medium tank", crew: 5, armament: "75 mm KwK 40 L/48", weight: 25, speed: 38, engine: "Maybach HL 120 TRM", image: "images/panzer-iv-ausf-h.jpg" },
  { name: "Panther Ausf. D", country: "Germany", year: 1943, type: "Medium tank", crew: 5, armament: "75 mm KwK 42 L/70", weight: 43, speed: 46, engine: "Maybach HL 230 P30", image: "images/panther-ausf-d.jpg" },
  { name: "Tiger I", country: "Germany", year: 1942, type: "Heavy tank", crew: 5, armament: "88 mm KwK 36 L/56", weight: 57, speed: 38, engine: "Maybach HL 230 P45", image: "images/tiger-i.jpg" },
  { name: "Tiger II", country: "Germany", year: 1944, type: "Heavy tank", crew: 5, armament: "88 mm KwK 43 L/71", weight: 68.5, speed: 38, engine: "Maybach HL 230 P30", image: "images/tiger-ii.jpg" },
  { name: "StuG III Ausf. G", country: "Germany", year: 1942, type: "Assault gun", crew: 4, armament: "75 mm StuK 40 L/48", weight: 23.9, speed: 40, engine: "Maybach HL 120 TRM", image: "images/stug-iii-ausf-g.jpg" },
  { name: "Hetzer", country: "Germany", year: 1944, type: "Tank destroyer", crew: 4, armament: "75 mm Pak 39 L/48", weight: 15.7, speed: 39, engine: "Praga AC/2", image: "images/hetzer.jpg" },
  { name: "Jagdpanther", country: "Germany", year: 1944, type: "Tank destroyer", crew: 5, armament: "88 mm Pak 43 L/71", weight: 45.5, speed: 46, engine: "Maybach HL 230 P30", image: "images/jagdpanther.jpg" },
  { name: "Elefant", country: "Germany", year: 1943, type: "Tank destroyer", crew: 6, armament: "88 mm Pak 43 L/71", weight: 65, speed: 30, engine: "Maybach HL 120 TRM ×2", image: "images/elefant.jpg" },
  { name: "Nashorn", country: "Germany", year: 1943, type: "Tank destroyer", crew: 5, armament: "88 mm Pak 43 L/71", weight: 24, speed: 40, engine: "Maybach HL 120 TRM", image: "images/nashorn.jpg" },
  { name: "Marder III", country: "Germany", year: 1942, type: "Tank destroyer", crew: 4, armament: "75 mm Pak 40 L/46", weight: 10.6, speed: 42, engine: "Praga AC/2", image: "images/marder-iii.jpg" },
  { name: "Wespe", country: "Germany", year: 1943, type: "Self-propelled howitzer", crew: 5, armament: "105 mm leFH 18/2", weight: 11, speed: 40, engine: "Maybach HL 62 TR", image: "images/wespe.jpg" },
  { name: "Hummel", country: "Germany", year: 1943, type: "Self-propelled howitzer", crew: 5, armament: "150 mm sFH 18/1", weight: 24, speed: 42, engine: "Maybach HL 120 TRM", image: "images/hummel.jpg" },
  { name: "Brummbär", country: "Germany", year: 1943, type: "Assault gun", crew: 5, armament: "150 mm StuH 43 L/12", weight: 28.2, speed: 40, engine: "Maybach HL 120 TRM", image: "images/brummbar.jpg" },
  { name: "Sturmtiger", country: "Germany", year: 1944, type: "Assault mortar", crew: 5, armament: "380 mm RW 61 rocket mortar", weight: 65, speed: 40, engine: "Maybach HL 230 P45", image: "images/sturmtiger.jpg" },
  { name: "Maus", country: "Germany", year: 1944, type: "Super-heavy tank", crew: 6, armament: "128 mm KwK 44 L/55", weight: 188, speed: 20, engine: "Daimler-Benz MB 517", image: "images/maus.jpg" },
  { name: "Sd.Kfz. 251", country: "Germany", year: 1939, type: "Half-track APC", crew: 2, armament: "7.92 mm MG 34 ×2", weight: 8, speed: 53, engine: "Maybach HL 42 TUKRRM", image: "images/sd-kfz-251.jpg" },
  { name: "Sd.Kfz. 234/2 Puma", country: "Germany", year: 1943, type: "Armored car", crew: 4, armament: "50 mm KwK 39/1 L/60", weight: 11.7, speed: 85, engine: "Tatra 103", image: "images/sd-kfz-234-2-puma.jpg" },
  { name: "Leopard 1", country: "West Germany", year: 1965, type: "Main battle tank", crew: 4, armament: "105 mm L7A3", weight: 40, speed: 65, engine: "MTU MB 838 CaM 500", image: "images/leopard-1.jpg" },
  { name: "Leopard 2", country: "West Germany", year: 1979, type: "Main battle tank", crew: 4, armament: "120 mm Rh-120 L/44", weight: 55, speed: 68, engine: "MTU MB 873 Ka-501", image: "images/leopard-2.jpg" },
  { name: "Marder", country: "West Germany", year: 1971, type: "IFV", crew: 4, armament: "20 mm Rh 202", weight: 28.2, speed: 75, engine: "MTU MB 833 Ea-500", image: "images/marder.jpg" },
  { name: "Gepard", country: "West Germany", year: 1976, type: "SPAAG", crew: 3, armament: "35 mm Oerlikon KDA ×2", weight: 47.5, speed: 65, engine: "MTU MB 838 CaM 500", image: "images/gepard.jpg" },
  { name: "Spähpanzer Luchs", country: "West Germany", year: 1975, type: "Reconnaissance vehicle", crew: 4, armament: "20 mm Rh 202", weight: 19.5, speed: 90, engine: "Daimler-Benz OM 403 VA", image: "images/spahpanzer-luchs.jpg" },
  { name: "TPz Fuchs", country: "West Germany", year: 1979, type: "APC", crew: 2, armament: "7.62 mm MG3", weight: 17, speed: 105, engine: "Mercedes-Benz OM 402A", image: "images/tpz-fuchs.jpg" },
 
  // ===== USSR =====
  { name: "BT-7M", country: "USSR", year: 1938, type: "Light tank", crew: 3, armament: "45 mm 20K", weight: 14.5, speed: 86, engine: "V-2", image: "images/bt-7m.jpg" },
  { name: "T-34-76", country: "USSR", year: 1940, type: "Medium tank", crew: 4, armament: "76.2 mm F-34", weight: 26.5, speed: 55, engine: "V-2-34", image: "images/t-34-76.jpg" },
  { name: "T-34-85", country: "USSR", year: 1944, type: "Medium tank", crew: 5, armament: "85 mm ZiS-S-53", weight: 32, speed: 55, engine: "V-2-34", image: "images/t-34-85.jpg" },
  { name: "KV-1", country: "USSR", year: 1939, type: "Heavy tank", crew: 5, armament: "76.2 mm F-32 / ZiS-5", weight: 45, speed: 35, engine: "V-2K", image: "images/kv-1.jpg" },
  { name: "KV-2", country: "USSR", year: 1940, type: "Heavy tank", crew: 6, armament: "152 mm M-10T", weight: 52, speed: 26, engine: "V-2K", image: "images/kv-2.jpg" },
  { name: "IS-2", country: "USSR", year: 1944, type: "Heavy tank", crew: 4, armament: "122 mm D-25T", weight: 46, speed: 37, engine: "V-2IS", image: "images/is-2.jpg" },
  { name: "IS-3", country: "USSR", year: 1945, type: "Heavy tank", crew: 4, armament: "122 mm D-25T", weight: 46.5, speed: 37, engine: "V-2IS", image: "images/is-3.jpg" },
  { name: "T-44", country: "USSR", year: 1944, type: "Medium tank", crew: 4, armament: "85 mm ZiS-S-53", weight: 31.9, speed: 51, engine: "V-44", image: "images/t-44.jpg" },
  { name: "T-54", country: "USSR", year: 1947, type: "Main battle tank", crew: 4, armament: "100 mm D-10T", weight: 36, speed: 48, engine: "V-54", image: "images/t-54.jpg" },
  { name: "T-55", country: "USSR", year: 1958, type: "Main battle tank", crew: 4, armament: "100 mm D-10T2S", weight: 36, speed: 50, engine: "V-55", image: "images/t-55.jpg" },
  { name: "T-62", country: "USSR", year: 1961, type: "Main battle tank", crew: 4, armament: "115 mm U-5TS", weight: 37.5, speed: 50, engine: "V-55V", image: "images/t-62.jpg" },
  { name: "T-64", country: "USSR", year: 1967, type: "Main battle tank", crew: 3, armament: "125 mm D-81T", weight: 38, speed: 60, engine: "5TDF", image: "images/t-64.jpg" },
  { name: "T-72", country: "USSR", year: 1973, type: "Main battle tank", crew: 3, armament: "125 mm 2A46", weight: 41.5, speed: 60, engine: "V-46-6", image: "images/t-72.jpg" },
  { name: "T-80", country: "USSR", year: 1976, type: "Main battle tank", crew: 3, armament: "125 mm 2A46M", weight: 42, speed: 70, engine: "GTD-1000T", image: "images/t-80.jpg" },
  { name: "T-90", country: "Russia", year: 1992, type: "Main battle tank", crew: 3, armament: "125 mm 2A46M-2", weight: 46.5, speed: 60, engine: "V-84MS", image: "images/t-90.jpg" },
  { name: "T-10", country: "USSR", year: 1953, type: "Heavy tank", crew: 4, armament: "122 mm M-62-T2", weight: 50, speed: 42, engine: "V-12-5", image: "images/t-10.jpg" },
  { name: "PT-76", country: "USSR", year: 1951, type: "Amphibious light tank", crew: 3, armament: "76.2 mm D-56T", weight: 14, speed: 44, engine: "V-6B", image: "images/pt-76.jpg" },
  { name: "T-70", country: "USSR", year: 1942, type: "Light tank", crew: 2, armament: "45 mm 20K", weight: 9.2, speed: 45, engine: "GAZ-202 ×2", image: "images/t-70.jpg" },
  { name: "T-60", country: "USSR", year: 1941, type: "Light tank", crew: 2, armament: "20 mm TNSh", weight: 5.8, speed: 44, engine: "GAZ-202", image: "images/t-60.jpg" },
  { name: "SU-76M", country: "USSR", year: 1943, type: "Self-propelled gun", crew: 4, armament: "76.2 mm ZiS-3", weight: 11.2, speed: 45, engine: "GAZ-202 ×2", image: "images/su-76m.jpg" },
  { name: "SU-85", country: "USSR", year: 1943, type: "Tank destroyer", crew: 4, armament: "85 mm D-5S", weight: 29.6, speed: 47, engine: "V-2-34", image: "images/su-85.jpg" },
  { name: "SU-100", country: "USSR", year: 1944, type: "Tank destroyer", crew: 4, armament: "100 mm D-10S", weight: 31.6, speed: 50, engine: "V-2-34", image: "images/su-100.jpg" },
  { name: "SU-152", country: "USSR", year: 1943, type: "Assault gun", crew: 5, armament: "152 mm ML-20S", weight: 45.5, speed: 43, engine: "V-2K", image: "images/su-152.jpg" },
  { name: "ISU-152", country: "USSR", year: 1943, type: "Assault gun", crew: 5, armament: "152 mm ML-20S", weight: 46, speed: 35, engine: "V-2IS", image: "images/isu-152.jpg" },
  { name: "BTR-152", country: "USSR", year: 1950, type: "APC", crew: 2, armament: "7.62 mm SGMB", weight: 8.6, speed: 65, engine: "ZIS-123", image: "images/btr-152.jpg" },
  { name: "BTR-60", country: "USSR", year: 1960, type: "APC", crew: 2, armament: "14.5 mm KPVT", weight: 10.3, speed: 80, engine: "GAZ-49B ×2", image: "images/btr-60.jpg" },
  { name: "BTR-80", country: "USSR", year: 1986, type: "APC", crew: 3, armament: "14.5 mm KPVT", weight: 13.6, speed: 80, engine: "KamAZ-7403", image: "images/btr-80.jpg" },
  { name: "BMP-1", country: "USSR", year: 1966, type: "IFV", crew: 3, armament: "73 mm 2A28 Grom", weight: 13, speed: 65, engine: "UTD-20", image: "images/bmp-1.jpg" },
  { name: "BMP-2", country: "USSR", year: 1980, type: "IFV", crew: 3, armament: "30 mm 2A42", weight: 14.3, speed: 65, engine: "UTD-20", image: "images/bmp-2.jpg" },
  { name: "BMD-1", country: "USSR", year: 1969, type: "Airborne IFV", crew: 3, armament: "73 mm 2A28 Grom", weight: 7.5, speed: 60, engine: "5D20", image: "images/bmd-1.jpg" },
  { name: "BRDM-2", country: "USSR", year: 1962, type: "Armored scout car", crew: 4, armament: "14.5 mm KPVT", weight: 7, speed: 100, engine: "GAZ-41", image: "images/brdm-2.jpg" },
  { name: "ZSU-23-4 Shilka", country: "USSR", year: 1965, type: "SPAAG", crew: 4, armament: "23 mm 2A7 ×4", weight: 19, speed: 50, engine: "V-6R", image: "images/zsu-23-4-shilka.jpg" },
  { name: "2S1 Gvozdika", country: "USSR", year: 1971, type: "Self-propelled howitzer", crew: 4, armament: "122 mm 2A31", weight: 15.7, speed: 60, engine: "YaMZ-238N", image: "images/2s1-gvozdika.jpg" },
  { name: "2S3 Akatsiya", country: "USSR", year: 1971, type: "Self-propelled howitzer", crew: 4, armament: "152 mm 2A33", weight: 27.5, speed: 60, engine: "V-59", image: "images/2s3-akatsiya.jpg" },
 
  // ===== USA =====
  { name: "M3 Stuart", country: "USA", year: 1941, type: "Light tank", crew: 4, armament: "37 mm M5", weight: 12.7, speed: 58, engine: "Continental W-670", image: "images/m3-stuart.jpg" },
  { name: "M24 Chaffee", country: "USA", year: 1944, type: "Light tank", crew: 5, armament: "75 mm M6", weight: 18.4, speed: 55, engine: "Cadillac 44T24 ×2", image: "images/m24-chaffee.jpg" },
  { name: "M3 Lee", country: "USA", year: 1941, type: "Medium tank", crew: 6, armament: "75 mm M2 + 37 mm M6", weight: 27.2, speed: 42, engine: "Continental R975", image: "images/m3-lee.jpg" },
  { name: "M4 Sherman", country: "USA", year: 1942, type: "Medium tank", crew: 5, armament: "75 mm M3", weight: 30.3, speed: 38, engine: "Continental R975", image: "images/m4-sherman.jpg" },
  { name: "M26 Pershing", country: "USA", year: 1945, type: "Heavy tank", crew: 5, armament: "90 mm M3", weight: 41.7, speed: 48, engine: "Ford GAF", image: "images/m26-pershing.jpg" },
  { name: "M47 Patton", country: "USA", year: 1952, type: "Main battle tank", crew: 5, armament: "90 mm M36", weight: 44, speed: 48, engine: "Continental AV-1790", image: "images/m47-patton.jpg" },
  { name: "M48 Patton", country: "USA", year: 1953, type: "Main battle tank", crew: 4, armament: "90 mm M41", weight: 44.9, speed: 48, engine: "Continental AVDS-1790", image: "images/m48-patton.jpg" },
  { name: "M60 Patton", country: "USA", year: 1960, type: "Main battle tank", crew: 4, armament: "105 mm M68", weight: 46, speed: 48, engine: "Continental AVDS-1790-2A", image: "images/m60-patton.jpg" },
  { name: "M1 Abrams", country: "USA", year: 1980, type: "Main battle tank", crew: 4, armament: "105 mm M68A1", weight: 54.4, speed: 67, engine: "Lycoming AGT1500", image: "images/m1-abrams.jpg" },
  { name: "M10 Wolverine", country: "USA", year: 1942, type: "Tank destroyer", crew: 5, armament: "76 mm M7", weight: 29, speed: 51, engine: "GM 6046", image: "images/m10-wolverine.jpg" },
  { name: "M18 Hellcat", country: "USA", year: 1943, type: "Tank destroyer", crew: 5, armament: "76 mm M1A1", weight: 17, speed: 89, engine: "Continental R975", image: "images/m18-hellcat.jpg" },
  { name: "M36 Jackson", country: "USA", year: 1944, type: "Tank destroyer", crew: 5, armament: "90 mm M3", weight: 28, speed: 48, engine: "GM 6046", image: "images/m36-jackson.jpg" },
  { name: "M8 Greyhound", country: "USA", year: 1943, type: "Armored car", crew: 4, armament: "37 mm M6", weight: 7.8, speed: 89, engine: "Hercules JXD", image: "images/m8-greyhound.jpg" },
  { name: "M3 Half-track", country: "USA", year: 1940, type: "Half-track APC", crew: 2, armament: "12.7 mm M2HB", weight: 9.1, speed: 72, engine: "White 160AX", image: "images/m3-half-track.jpg" },
  { name: "M7 Priest", country: "USA", year: 1942, type: "Self-propelled howitzer", crew: 7, armament: "105 mm M2A1", weight: 22.9, speed: 38, engine: "Continental R975", image: "images/m7-priest.jpg" },
  { name: "M41 Walker Bulldog", country: "USA", year: 1951, type: "Light tank", crew: 4, armament: "76 mm M32", weight: 23.5, speed: 72, engine: "Continental AOS-895", image: "images/m41-walker-bulldog.jpg" },
  { name: "M113", country: "USA", year: 1960, type: "APC", crew: 2, armament: "12.7 mm M2HB", weight: 11, speed: 64, engine: "Detroit 6V53", image: "images/m113.jpg" },
  { name: "M2 Bradley", country: "USA", year: 1981, type: "IFV", crew: 3, armament: "25 mm M242 + TOW", weight: 22.6, speed: 66, engine: "Cummins VTA-903T", image: "images/m2-bradley.jpg" },
  { name: "M551 Sheridan", country: "USA", year: 1967, type: "Light tank", crew: 4, armament: "152 mm M81", weight: 15.8, speed: 70, engine: "Detroit 6V53T", image: "images/m551-sheridan.jpg" },
  { name: "M109", country: "USA", year: 1963, type: "Self-propelled howitzer", crew: 6, armament: "155 mm M126", weight: 23.8, speed: 56, engine: "Detroit 8V71T", image: "images/m109.jpg" },
  { name: "M163 VADS", country: "USA", year: 1969, type: "SPAAG", crew: 4, armament: "20 mm M168 Vulcan", weight: 12.3, speed: 68, engine: "Detroit 6V53", image: "images/m163-vads.jpg" },
  { name: "LAV-25", country: "USA", year: 1983, type: "Armored reconnaissance vehicle", crew: 3, armament: "25 mm M242", weight: 12.8, speed: 100, engine: "Detroit 6V53T", image: "images/lav-25.jpg" },
  { name: "AAV-7", country: "USA", year: 1972, type: "Amphibious APC", crew: 3, armament: "12.7 mm M85", weight: 23, speed: 72, engine: "Cummins VT400", image: "images/aav-7.jpg" },
  { name: "M88 Hercules", country: "USA", year: 1961, type: "Armored recovery vehicle", crew: 4, armament: "12.7 mm M2HB", weight: 50.8, speed: 42, engine: "Continental AVDS-1790-2DR", image: "images/m88-hercules.jpg" },
 
  // ===== United Kingdom =====
  { name: "Cruiser Mk III (A13)", country: "UK", year: 1938, type: "Cruiser tank", crew: 4, armament: "2-pounder (40 mm)", weight: 14, speed: 48, engine: "Nuffield Liberty", image: "images/cruiser-mk-iii-a13.jpg" },
  { name: "Matilda II", country: "UK", year: 1939, type: "Infantry tank", crew: 4, armament: "2-pounder (40 mm)", weight: 26.9, speed: 24, engine: "AEC A183 ×2", image: "images/matilda-ii.jpg" },
  { name: "Valentine", country: "UK", year: 1940, type: "Infantry tank", crew: 3, armament: "2-pounder (40 mm)", weight: 16, speed: 24, engine: "AEC A190", image: "images/valentine.jpg" },
  { name: "Churchill", country: "UK", year: 1941, type: "Infantry tank", crew: 5, armament: "6-pounder (57 mm)", weight: 40, speed: 25, engine: "Bedford Twin-Six", image: "images/churchill.jpg" },
  { name: "Crusader", country: "UK", year: 1941, type: "Cruiser tank", crew: 5, armament: "2-pounder (40 mm)", weight: 19, speed: 43, engine: "Nuffield Liberty", image: "images/crusader.jpg" },
  { name: "Cromwell", country: "UK", year: 1943, type: "Cruiser tank", crew: 5, armament: "75 mm QF", weight: 27.9, speed: 64, engine: "Rolls-Royce Meteor", image: "images/cromwell.jpg" },
  { name: "Comet", country: "UK", year: 1944, type: "Cruiser tank", crew: 5, armament: "77 mm HV", weight: 32.7, speed: 51, engine: "Rolls-Royce Meteor", image: "images/comet.jpg" },
  { name: "Sherman Firefly", country: "UK", year: 1944, type: "Medium tank", crew: 4, armament: "17-pounder (76.2 mm)", weight: 35.3, speed: 40, engine: "Continental R975", image: "images/sherman-firefly.jpg" },
  { name: "Centurion", country: "UK", year: 1945, type: "Main battle tank", crew: 4, armament: "20-pounder (84 mm)", weight: 51.8, speed: 35, engine: "Rolls-Royce Meteor", image: "images/centurion.jpg" },
  { name: "Conqueror", country: "UK", year: 1955, type: "Heavy tank", crew: 4, armament: "120 mm L1A1", weight: 64, speed: 34, engine: "Rolls-Royce Meteor M120", image: "images/conqueror.jpg" },
  { name: "Chieftain", country: "UK", year: 1966, type: "Main battle tank", crew: 4, armament: "120 mm L11", weight: 55, speed: 48, engine: "Leyland L60", image: "images/chieftain.jpg" },
  { name: "Challenger 1", country: "UK", year: 1983, type: "Main battle tank", crew: 4, armament: "120 mm L11A5", weight: 62, speed: 56, engine: "Perkins CV12", image: "images/challenger-1.jpg" },
  { name: "Daimler Dingo", country: "UK", year: 1939, type: "Scout car", crew: 2, armament: "7.7 mm Bren", weight: 3, speed: 89, engine: "Daimler 4-cyl", image: "images/daimler-dingo.jpg" },
  { name: "Saladin", country: "UK", year: 1958, type: "Armored car", crew: 3, armament: "76 mm L5A1", weight: 11.6, speed: 72, engine: "Rolls-Royce B80", image: "images/saladin.jpg" },
  { name: "Saracen", country: "UK", year: 1952, type: "APC", crew: 2, armament: "7.62 mm Browning", weight: 10.2, speed: 72, engine: "Rolls-Royce B80", image: "images/saracen.jpg" },
  { name: "Scorpion", country: "UK", year: 1972, type: "Light tank", crew: 3, armament: "76 mm L23A1", weight: 8.1, speed: 87, engine: "Jaguar J60", image: "images/scorpion.jpg" },
  { name: "FV432", country: "UK", year: 1962, type: "APC", crew: 2, armament: "7.62 mm GPMG", weight: 15.3, speed: 52, engine: "Rolls-Royce K60", image: "images/fv432.jpg" },
  { name: "Warrior", country: "UK", year: 1988, type: "IFV", crew: 3, armament: "30 mm L21A1 RARDEN", weight: 25, speed: 75, engine: "Perkins CV8", image: "images/warrior.jpg" },
 
  // ===== France =====
  { name: "Hotchkiss H39", country: "France", year: 1938, type: "Light tank", crew: 2, armament: "37 mm SA 38", weight: 12.1, speed: 36, engine: "Hotchkiss 6-cyl", image: "images/hotchkiss-h39.jpg" },
  { name: "Somua S40", country: "France", year: 1940, type: "Medium tank", crew: 3, armament: "47 mm SA 35", weight: 20.5, speed: 40, engine: "Somua V8", image: "images/somua-s40.jpg" },
  { name: "AMX-13", country: "France", year: 1953, type: "Light tank", crew: 3, armament: "75 mm SA50", weight: 15, speed: 60, engine: "SOFAM 8Gxb", image: "images/amx-13.jpg" },
  { name: "AMX-30", country: "France", year: 1967, type: "Main battle tank", crew: 4, armament: "105 mm CN-105-F1", weight: 36, speed: 65, engine: "Hispano-Suiza HS-110", image: "images/amx-30.jpg" },
  { name: "Leclerc", country: "France", year: 1992, type: "Main battle tank", crew: 3, armament: "120 mm CN-120-26", weight: 56, speed: 71, engine: "SACM V8X-1500", image: "images/leclerc.jpg" },
  { name: "Panhard EBR", country: "France", year: 1950, type: "Armored car", crew: 4, armament: "90 mm DEFA D921", weight: 13.5, speed: 105, engine: "Panhard 12H", image: "images/panhard-ebr.jpg" },
  { name: "AMX-10 RC", country: "France", year: 1978, type: "Armored reconnaissance vehicle", crew: 4, armament: "105 mm CN-105-57", weight: 15.8, speed: 85, engine: "Hispano-Suiza HS-115", image: "images/amx-10-rc.jpg" },
  { name: "AMX-10P", country: "France", year: 1973, type: "IFV", crew: 3, armament: "20 mm M693", weight: 14.2, speed: 65, engine: "Hispano-Suiza HS-115", image: "images/amx-10p.jpg" },
  { name: "VAB", country: "France", year: 1976, type: "APC", crew: 2, armament: "7.62 mm AAT-F1", weight: 13, speed: 92, engine: "Berliet V800", image: "images/vab.jpg" },
  { name: "Panhard AML", country: "France", year: 1961, type: "Armored car", crew: 3, armament: "90 mm Mecar", weight: 5.5, speed: 100, engine: "Panhard 4 HD", image: "images/panhard-aml.jpg" },
 
  // ===== Italy =====
  { name: "Fiat M13/40", country: "Italy", year: 1940, type: "Medium tank", crew: 4, armament: "47 mm Ansaldo", weight: 14, speed: 32, engine: "Fiat SPA 8T", image: "images/fiat-m13-40.jpg" },
  { name: "Semovente 75/18", country: "Italy", year: 1941, type: "Assault gun", crew: 3, armament: "75 mm Ansaldo 75/18", weight: 13, speed: 32, engine: "Fiat SPA 15T", image: "images/semovente-75-18.jpg" },
  { name: "Carro Armato P26/40", country: "Italy", year: 1943, type: "Heavy tank", crew: 4, armament: "75 mm Ansaldo L/34", weight: 26, speed: 40, engine: "SPA 342", image: "images/carro-armato-p26-40.jpg" },
  { name: "Autoblinda AB 41", country: "Italy", year: 1941, type: "Armored car", crew: 4, armament: "20 mm Breda Mod. 35", weight: 7.4, speed: 78, engine: "SPA ABM 1", image: "images/autoblinda-ab-41.jpg" },
  { name: "OF-40", country: "Italy", year: 1980, type: "Main battle tank", crew: 4, armament: "105 mm L7", weight: 45.5, speed: 60, engine: "MTU MB 838 CaM 500", image: "images/of-40.jpg" },
  { name: "B1 Centauro", country: "Italy", year: 1991, type: "Tank destroyer", crew: 4, armament: "105 mm OTO Melara", weight: 25, speed: 108, engine: "Iveco MTCA", image: "images/b1-centauro.jpg" },
 
  // ===== Japan =====
  { name: "Type 98 Ke-Ni", country: "Japan", year: 1938, type: "Light tank", crew: 3, armament: "37 mm Type 94", weight: 7.2, speed: 50, engine: "Mitsubishi Type 100", image: "images/type-98-ke-ni.jpg" },
  { name: "Type 97 Shinhoto Chi-Ha", country: "Japan", year: 1942, type: "Medium tank", crew: 4, armament: "47 mm Type 1", weight: 15.8, speed: 38, engine: "Mitsubishi Type 97", image: "images/type-97-shinhoto-chi-ha.jpg" },
  { name: "Type 3 Chi-Nu", country: "Japan", year: 1944, type: "Medium tank", crew: 5, armament: "75 mm Type 3", weight: 19, speed: 39, engine: "Mitsubishi Type 100", image: "images/type-3-chi-nu.jpg" },
  { name: "Type 61", country: "Japan", year: 1961, type: "Main battle tank", crew: 4, armament: "90 mm M3-type", weight: 35, speed: 45, engine: "Mitsubishi 12HM21WT", image: "images/type-61.jpg" },
  { name: "Type 74", country: "Japan", year: 1975, type: "Main battle tank", crew: 4, armament: "105 mm L7", weight: 38, speed: 53, engine: "Mitsubishi 10ZF", image: "images/type-74.jpg" },
  { name: "Type 90", country: "Japan", year: 1990, type: "Main battle tank", crew: 3, armament: "120 mm Rheinmetall L/44", weight: 50, speed: 70, engine: "Mitsubishi 10ZG", image: "images/type-90.jpg" },
  { name: "Type 89 IFV", country: "Japan", year: 1989, type: "IFV", crew: 3, armament: "35 mm Oerlikon KDE", weight: 26.5, speed: 70, engine: "Mitsubishi 4ZF", image: "images/type-89-ifv.jpg" },
 
  // ===== China =====
  { name: "Type 59", country: "China", year: 1958, type: "Main battle tank", crew: 4, armament: "100 mm Type 59", weight: 36, speed: 50, engine: "12150L-7", image: "images/type-59.jpg" },
  { name: "Type 63", country: "China", year: 1963, type: "Amphibious light tank", crew: 4, armament: "85 mm Type 62-85TC", weight: 18.7, speed: 64, engine: "Type 12150L", image: "images/type-63.jpg" },
  { name: "Type 69", country: "China", year: 1982, type: "Main battle tank", crew: 4, armament: "100 mm Type 69", weight: 36.7, speed: 50, engine: "12150L-7BW", image: "images/type-69.jpg" },
  { name: "Type 80", country: "China", year: 1985, type: "Main battle tank", crew: 4, armament: "105 mm Type 83", weight: 38, speed: 60, engine: "12150L-7BW", image: "images/type-80.jpg" },
  { name: "Type 86", country: "China", year: 1987, type: "IFV", crew: 3, armament: "73 mm", weight: 13, speed: 65, engine: "Type 6V150", image: "images/type-86.jpg" },
 
  // ===== Other countries =====
  { name: "Strv m/42", country: "Sweden", year: 1943, type: "Medium tank", crew: 4, armament: "75 mm kan m/38", weight: 22, speed: 45, engine: "Scania-Vabis 603 ×2", image: "images/strv-m-42.jpg" },
  { name: "Strv 103 (S-tank)", country: "Sweden", year: 1966, type: "Main battle tank", crew: 3, armament: "105 mm L74", weight: 39, speed: 50, engine: "Rolls-Royce K60 + Boeing 553", image: "images/strv-103-s-tank.jpg" },
  { name: "LT vz. 38", country: "Czechoslovakia", year: 1938, type: "Light tank", crew: 4, armament: "37 mm Škoda A7", weight: 9.4, speed: 42, engine: "Praga EPA", image: "images/lt-vz-38.jpg" },
  { name: "OT-64 SKOT", country: "Czechoslovakia", year: 1964, type: "APC", crew: 2, armament: "14.5 mm KPVT", weight: 14.3, speed: 94, engine: "Tatra T928-14", image: "images/ot-64-skot.jpg" },
  { name: "Panzer 68", country: "Switzerland", year: 1971, type: "Main battle tank", crew: 4, armament: "105 mm L7", weight: 39.7, speed: 55, engine: "MTU MB 837 Ba-500", image: "images/panzer-68.jpg" },
  { name: "Merkava Mk 1", country: "Israel", year: 1979, type: "Main battle tank", crew: 4, armament: "105 mm M68", weight: 60, speed: 46, engine: "Continental AVDS-1790-5A", image: "images/merkava-mk-1.jpg" },
  { name: "Merkava Mk 3", country: "Israel", year: 1989, type: "Main battle tank", crew: 4, armament: "120 mm MG251", weight: 65, speed: 60, engine: "Continental AVDS-1790-9AR", image: "images/merkava-mk-3.jpg" },
  { name: "M-84", country: "Yugoslavia", year: 1984, type: "Main battle tank", crew: 3, armament: "125 mm 2A46", weight: 42, speed: 65, engine: "V-46TK", image: "images/m-84.jpg" },
  { name: "EE-9 Cascavel", country: "Brazil", year: 1974, type: "Armored car", crew: 3, armament: "90 mm EC-90", weight: 13.4, speed: 100, engine: "Detroit 6V53T", image: "images/ee-9-cascavel.jpg" },
  { name: "Vijayanta", country: "India", year: 1965, type: "Main battle tank", crew: 4, armament: "105 mm L7", weight: 39, speed: 48, engine: "Leyland L60", image: "images/vijayanta.jpg" },
  { name: "Ratel 20", country: "South Africa", year: 1976, type: "IFV", crew: 3, armament: "20 mm F2", weight: 18, speed: 105, engine: "Detroit 6V53T", image: "images/ratel-20.jpg" },
  { name: "Toldi I", country: "Hungary", year: 1940, type: "Light tank", crew: 3, armament: "20 mm 36M", weight: 8.5, speed: 50, engine: "Büssing-NAG L8V", image: "images/toldi-i.jpg" },
  { name: "K1", country: "South Korea", year: 1987, type: "Main battle tank", crew: 4, armament: "105 mm KM68A1", weight: 51.1, speed: 65, engine: "MTU MB 871 Ka-501", image: "images/k1.jpg" },
  { name: "TAM", country: "Argentina", year: 1979, type: "Medium tank", crew: 4, armament: "105 mm L7", weight: 30.5, speed: 75, engine: "MTU MB 833 Ka-500", image: "images/tam.jpg" },
  { name: "SK 105 Kürassier", country: "Austria", year: 1971, type: "Light tank / tank destroyer", crew: 3, armament: "105 mm CN-105-57", weight: 17.7, speed: 70, engine: "Steyr 7FA", image: "images/sk-105-kurassier.jpg" },
  { name: "Mareșal M-05", country: "Romania", year: 1943, type: "Tank destroyer", crew: 3, armament: "75 mm Reșița Model 1943", weight: 16.5, speed: 50, engine: null, image: "images/maresal-m-05.jpg" },
  { name: "Ram Mk I", country: "Canada", year: 1941, type: "Cruiser tank", crew: 5, armament: "2-pounder (40 mm)", weight: 29, speed: 40, engine: "Continental R975", image: "images/ram-mk-i.jpg" },
  { name: "Sentinel AC1", country: "Australia", year: 1942, type: "Cruiser tank", crew: 5, armament: "2-pounder (40 mm)", weight: 28, speed: 48, engine: "Cadillac 75 ×3", image: "images/sentinel-ac1.jpg" },
  { name: "YPR-765", country: "Netherlands", year: 1977, type: "IFV", crew: 3, armament: "25 mm Oerlikon KBA-B02", weight: 13.7, speed: 64, engine: "Detroit 6V53T", image: "images/ypr-765.jpg" },
 
  // ===== Дополнение: новые страны =====
  { name: "OT-62 TOPAS", country: "Poland", year: 1962, type: "Amphibious APC", crew: 2, armament: "7.62 mm vz. 59", weight: 15, speed: 60, engine: "PV-6", image: "images/ot-62-topas.jpg" },
  { name: "AMX-30E", country: "Spain", year: 1974, type: "Main battle tank", crew: 4, armament: "105 mm CN-105-F1", weight: 36, speed: 65, engine: "Hispano-Suiza HS-110", image: "images/amx-30e.jpg" },
  { name: "BMR-600", country: "Spain", year: 1979, type: "APC", crew: 2, armament: "7.62 mm MG", weight: 13.4, speed: 103, engine: "Pegaso 9157/8", image: "images/bmr-600.jpg" },
  { name: "BT-42", country: "Finland", year: 1943, type: "Assault gun", crew: 4, armament: "114 mm howitzer", weight: 14, speed: 52, engine: "M-17T", image: "images/bt-42.jpg" },
  { name: "Sisu XA-180 Pasi", country: "Finland", year: 1983, type: "APC", crew: 2, armament: "7.62 mm MG", weight: 15, speed: 100, engine: "Valmet 411 BSM", image: "images/sisu-xa-180-pasi.jpg" },
  { name: "Walid", country: "Egypt", year: 1964, type: "APC", crew: 2, armament: "7.62 mm MG", weight: 6, speed: 85, engine: null, image: "images/walid.jpg" },
  { name: "Fahd", country: "Egypt", year: 1978, type: "APC", crew: 2, armament: "7.62 mm MG", weight: 10.5, speed: 100, engine: "Mercedes-Benz OM 352A", image: "images/fahd.jpg" },
  { name: "Chonma-ho", country: "North Korea", year: 1980, type: "Main battle tank", crew: 4, armament: "115 mm smoothbore", weight: 38, speed: 50, engine: null, image: "images/chonma-ho.jpg" },
  { name: "M1978 Koksan", country: "North Korea", year: 1978, type: "Self-propelled gun", crew: 5, armament: "170 mm K-series gun", weight: 28, speed: 40, engine: null, image: "images/m1978-koksan.jpg" },
 
  // ===== Дополнение: бронемашины обеспечения =====
  { name: "Bergepanther", country: "Germany", year: 1943, type: "Armored recovery vehicle", crew: 3, armament: "7.92 mm MG 34", weight: 43, speed: 46, engine: "Maybach HL 230 P30", image: "images/bergepanther.jpg" },
  { name: "BREM-1", country: "USSR", year: 1974, type: "Armored recovery vehicle", crew: 3, armament: "none (winch, crane)", weight: 41.5, speed: 60, engine: "V-46-6", image: "images/brem-1.jpg" },
  { name: "MTU-20", country: "USSR", year: 1957, type: "Bridgelayer", crew: 2, armament: "none (bridge)", weight: 35, speed: 50, engine: "V-54", image: "images/mtu-20.jpg" },
  { name: "M60 AVLB", country: "USA", year: 1963, type: "Bridgelayer", crew: 2, armament: "none (bridge)", weight: 55, speed: 48, engine: "Continental AVDS-1790-2A", image: "images/m60-avlb.jpg" },
  { name: "Biber", country: "West Germany", year: 1975, type: "Bridgelayer", crew: 2, armament: "none (bridge)", weight: 45, speed: 62, engine: "MTU MB 838 CaM 500", image: "images/biber.jpg" },
  { name: "Churchill AVRE", country: "UK", year: 1943, type: "Combat engineer vehicle", crew: 6, armament: "290 mm Petard spigot mortar", weight: 38.5, speed: 24, engine: "Bedford Twin-Six", image: "images/churchill-avre.jpg" },
  { name: "M728 CEV", country: "USA", year: 1963, type: "Combat engineer vehicle", crew: 4, armament: "165 mm M135 demolition gun", weight: 53, speed: 48, engine: "Continental AVDS-1790-2A", image: "images/m728-cev.jpg" },
  { name: "IMR-2", country: "USSR", year: 1982, type: "Combat engineer vehicle", crew: 2, armament: "none (dozer blade, crane)", weight: 43, speed: 60, engine: "V-46-6", image: "images/imr-2.jpg" },
 
  // ===== Дополнение: самоходные зенитные установки =====
  { name: "Flakpanzer IV Wirbelwind", country: "Germany", year: 1944, type: "SPAAG", crew: 5, armament: "20 mm Flakvierling 38", weight: 25, speed: 38, engine: "Maybach HL 120 TRM", image: "images/flakpanzer-iv-wirbelwind.jpg" },
  { name: "M16 MGMC", country: "USA", year: 1943, type: "SPAAG", crew: 5, armament: "12.7 mm M2HB ×4", weight: 9.1, speed: 72, engine: "White 160AX", image: "images/m16-mgmc.jpg" },
  { name: "M19 GMC", country: "USA", year: 1944, type: "SPAAG", crew: 6, armament: "40 mm Bofors ×2", weight: 17.4, speed: 55, engine: "Cadillac 44T24 ×2", image: "images/m19-gmc.jpg" },
  { name: "ZSU-57-2", country: "USSR", year: 1955, type: "SPAAG", crew: 6, armament: "57 mm S-68 ×2", weight: 28.1, speed: 50, engine: "V-54", image: "images/zsu-57-2.jpg" },
  { name: "M42 Duster", country: "USA", year: 1953, type: "SPAAG", crew: 6, armament: "40 mm M2A1 ×2", weight: 22.6, speed: 72, engine: "Continental AOS-895", image: "images/m42-duster.jpg" },
  { name: "2K22 Tunguska", country: "USSR", year: 1982, type: "Self-propelled AA gun-missile system", crew: 4, armament: "30 mm 2A38 ×2 + 9M311 missiles", weight: 34, speed: 65, engine: "V-84MP", image: "images/2k22-tunguska.jpg" },
  { name: "Type 87 SPAAG", country: "Japan", year: 1987, type: "SPAAG", crew: 3, armament: "35 mm Oerlikon KDA ×2", weight: 38, speed: 53, engine: "Mitsubishi 10ZF", image: "images/type-87-spaag.jpg" },
 
  // ===== Дополнение: лёгкие бронеавтомобили =====
  { name: "Daimler Armoured Car", country: "UK", year: 1941, type: "Armored car", crew: 3, armament: "2-pounder (40 mm)", weight: 7.5, speed: 80, engine: "Daimler 6-cyl", image: "images/daimler-armoured-car.jpg" },
  { name: "Ferret", country: "UK", year: 1952, type: "Scout car", crew: 2, armament: "7.7 mm Bren", weight: 4.4, speed: 93, engine: "Rolls-Royce B60", image: "images/ferret.jpg" },
  { name: "Staghound", country: "USA", year: 1942, type: "Armored car", crew: 5, armament: "37 mm M6", weight: 13.9, speed: 89, engine: "GMC 270 ×2", image: "images/staghound.jpg" },
  { name: "BA-64", country: "USSR", year: 1942, type: "Armored car", crew: 2, armament: "7.62 mm DT", weight: 2.4, speed: 80, engine: "GAZ-MM", image: "images/ba-64.jpg" },
  { name: "Fox", country: "UK", year: 1973, type: "Armored car", crew: 3, armament: "30 mm L21 RARDEN", weight: 6.1, speed: 105, engine: "Jaguar XK", image: "images/fox.jpg" },
 
  // ===== Дополнение: 1938–1941 =====
  { name: "Panzer I Ausf. F", country: "Germany", year: 1940, type: "Infantry tank", crew: 2, armament: "7.92 mm MG 34 ×2", weight: 21, speed: 25, engine: "Maybach HL 45", image: "images/panzer-i-ausf-f.jpg" },
  { name: "Panzer IV Ausf. D", country: "Germany", year: 1939, type: "Medium tank", crew: 5, armament: "75 mm KwK 37 L/24", weight: 20, speed: 40, engine: "Maybach HL 120 TRM", image: "images/panzer-iv-ausf-d.jpg" },
  { name: "StuG III Ausf. A", country: "Germany", year: 1940, type: "Assault gun", crew: 4, armament: "75 mm StuK 37 L/24", weight: 19.6, speed: 40, engine: "Maybach HL 120 TRM", image: "images/stug-iii-ausf-a.jpg" },
  { name: "T-26 Model 1939", country: "USSR", year: 1939, type: "Light tank", crew: 3, armament: "45 mm 20K", weight: 10.3, speed: 30, engine: "GAZ T-26", image: "images/t-26-model-1939.jpg" },
  { name: "T-40", country: "USSR", year: 1940, type: "Amphibious light tank", crew: 2, armament: "12.7 mm DShK", weight: 5.9, speed: 44, engine: "GAZ-202", image: "images/t-40.jpg" },
  { name: "T-50", country: "USSR", year: 1941, type: "Light tank", crew: 4, armament: "45 mm 20-K", weight: 13.8, speed: 57, engine: "V-3", image: "images/t-50.jpg" },
  { name: "FCM 36", country: "France", year: 1938, type: "Light tank", crew: 2, armament: "37 mm SA 18", weight: 12.4, speed: 24, engine: "Berliet", image: "images/fcm-36.jpg" },
  { name: "M2 Medium", country: "USA", year: 1939, type: "Medium tank", crew: 6, armament: "37 mm M6", weight: 17.2, speed: 42, engine: "Continental R975", image: "images/m2-medium.jpg" },
  { name: "Tetrarch", country: "UK", year: 1940, type: "Light tank", crew: 3, armament: "2-pounder (40 mm)", weight: 7.6, speed: 64, engine: "Meadows", image: "images/tetrarch.jpg" },
  { name: "Covenanter", country: "UK", year: 1940, type: "Cruiser tank", crew: 4, armament: "2-pounder (40 mm)", weight: 18, speed: 50, engine: "Meadows flat-12", image: "images/covenanter.jpg" },
  { name: "Fiat M11/39", country: "Italy", year: 1939, type: "Medium tank", crew: 3, armament: "37 mm + 8 mm MGs", weight: 11, speed: 32, engine: "Fiat SPA 8T", image: "images/fiat-m11-39.jpg" },
  { name: "Type 1 Chi-He", country: "Japan", year: 1941, type: "Medium tank", crew: 5, armament: "47 mm Type 1", weight: 17.2, speed: 44, engine: "Mitsubishi Type 100", image: "images/type-1-chi-he.jpg" },
  { name: "Turán I", country: "Hungary", year: 1941, type: "Medium tank", crew: 5, armament: "40 mm 41M", weight: 18.2, speed: 47, engine: "Manfréd Weiss V-4", image: "images/turan-i.jpg" },
 
  // ===== Дополнение: 1950-е =====
  { name: "M103", country: "USA", year: 1957, type: "Heavy tank", crew: 5, armament: "120 mm M58", weight: 56.7, speed: 34, engine: "Continental AV-1790-5B", image: "images/m103.jpg" },
  { name: "Object 279", country: "USSR", year: 1959, type: "Heavy tank (prototype)", crew: 4, armament: "130 mm M-65", weight: 60, speed: 55, engine: "2DG-8M", image: "images/object-279.jpg" },
  { name: "Panzer 58", country: "Switzerland", year: 1958, type: "Main battle tank", crew: 4, armament: "105 mm L7", weight: 39, speed: 50, engine: "MTU MB 837", image: "images/panzer-58.jpg" },
  { name: "Charioteer", country: "UK", year: 1954, type: "Medium tank", crew: 4, armament: "20-pounder (84 mm)", weight: 29, speed: 32, engine: "Rolls-Royce Meteor", image: "images/charioteer.jpg" },
  { name: "M56 Scorpion", country: "USA", year: 1953, type: "Tank destroyer", crew: 4, armament: "90 mm M54", weight: 7, speed: 45, engine: "Continental AOI-402", image: "images/m56-scorpion.jpg" },
  { name: "BTR-50", country: "USSR", year: 1954, type: "Amphibious APC", crew: 2, armament: "7.62 mm SGMB", weight: 14.2, speed: 44, engine: "V-6", image: "images/btr-50.jpg" },
  { name: "M4A3E8 Sherman", country: "USA", year: 1944, type: "Medium tank", crew: 5, armament: "76 mm M1A2", weight: 33.6, speed: 40, engine: "Ford GAA", image: "images/m4a3e8-sherman.jpg" },
 
  // ===== Дополнение: 1980-е =====
  { name: "T-72B", country: "USSR", year: 1985, type: "Main battle tank", crew: 3, armament: "125 mm 2A46M", weight: 44.5, speed: 60, engine: "V-84", image: "images/t-72b.jpg" },
  { name: "T-80U", country: "USSR", year: 1985, type: "Main battle tank", crew: 3, armament: "125 mm 2A46M-1", weight: 46, speed: 70, engine: "GTD-1250", image: "images/t-80u.jpg" },
  { name: "BMP-3", country: "USSR", year: 1987, type: "IFV", crew: 3, armament: "100 mm 2A70 + 30 mm 2A72", weight: 18.7, speed: 70, engine: "UTD-29", image: "images/bmp-3.jpg" },
  { name: "BMD-2", country: "USSR", year: 1985, type: "Airborne IFV", crew: 3, armament: "30 mm 2A42", weight: 8.2, speed: 60, engine: "5D20", image: "images/bmd-2.jpg" },
  { name: "2S19 Msta-S", country: "USSR", year: 1989, type: "Self-propelled howitzer", crew: 5, armament: "152 mm 2A64", weight: 42, speed: 60, engine: "V-84A", image: "images/2s19-msta-s.jpg" },
  { name: "2S9 Nona", country: "USSR", year: 1981, type: "Self-propelled mortar", crew: 4, armament: "120 mm 2A51", weight: 8.7, speed: 60, engine: "5D20", image: "images/2s9-nona.jpg" },
  { name: "M1A1 Abrams", country: "USA", year: 1985, type: "Main battle tank", crew: 4, armament: "120 mm M256", weight: 57.2, speed: 67, engine: "Lycoming AGT1500", image: "images/m1a1-abrams.jpg" },
  { name: "Leopard 2A4", country: "West Germany", year: 1985, type: "Main battle tank", crew: 4, armament: "120 mm Rh-120 L/44", weight: 55.2, speed: 68, engine: "MTU MB 873 Ka-501", image: "images/leopard-2a4.jpg" },
  { name: "M3 Bradley CFV", country: "USA", year: 1983, type: "Cavalry fighting vehicle", crew: 5, armament: "25 mm M242 + TOW", weight: 22.6, speed: 66, engine: "Cummins VTA-903T", image: "images/m3-bradley-cfv.jpg" },
  { name: "TR-85", country: "Romania", year: 1985, type: "Main battle tank", crew: 4, armament: "100 mm", weight: 50, speed: 60, engine: "830 hp diesel", image: "images/tr-85.jpg" },
  { name: "Type 88", country: "China", year: 1988, type: "Main battle tank", crew: 4, armament: "105 mm Type 83", weight: 38, speed: 57, engine: "12150L-7BW", image: "images/type-88.jpg" },
  { name: "Rooikat", country: "South Africa", year: 1990, type: "Armored car", crew: 4, armament: "76 mm GT4", weight: 28, speed: 120, engine: "Deutz BF12L 413 FC", image: "images/rooikat.jpg" },
  { name: "Wiesel 1", country: "West Germany", year: 1990, type: "Light armored vehicle", crew: 3, armament: "20 mm Rh 202", weight: 2.8, speed: 80, engine: "VW Audi 2.1 L", image: "images/wiesel-1.jpg" },
];
 

const vehiclesContainer = document.querySelector("#vehicles-container");
const resultsCount = document.querySelector("#results-count"); 
const yearSort = document.querySelector("#year-sort"); 
const vehicleModal = document.querySelector("#vehicle-modal");
const modalBody = document.querySelector("#modal-body");
const modalClose = document.querySelector("#modal-close"); 
const searchInput = document.querySelector("#search");
const countryFilter = document.querySelector("#country-filter"); 
const typeFilter = document.querySelector("#type-filter"); 

modalClose.addEventListener("click", () => {
    vehicleModal.classList.remove("active");
});

vehicleModal.addEventListener("click", (event) => {
    if (event.target === vehicleModal) {
        vehicleModal.classList.remove("active");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        vehicleModal.classList.remove("active");
    }
});

function renderVehicles(vehicleList) { 
    vehiclesContainer.innerHTML = ""; 
    
     resultsCount.textContent =
            `Showing ${vehicleList.length} of ${vehicles.length} vehicles`;  
    
    if (vehicleList.length === 0) { 
        vehiclesContainer.innerHTML = "<p>No vehicles found.</p>";
        return;
    }
    
    vehicleList.forEach((vehicle) => {
    const card = document.createElement("div");

    card.innerHTML = ` 
    <h2>${vehicle.name}</h2> 
    <img src="${vehicle.image}" alt="${vehicle.name}" loading="lazy">
    <p><strong>Country: </strong> ${vehicle.country}</p> 
    <p><strong>Year: </strong> ${vehicle.year}</p> 
    <p><strong>Type: </strong> ${vehicle.type}</p> 
    <p><strong>Crew: </strong> ${vehicle.crew}</p>
    <button type="button" class="details-button" aria-label="Show details about ${vehicle.name}">Show details</button>
    `; 
  const detailsButton = card.querySelector(".details-button");
          detailsButton.addEventListener("click", () => {

          modalBody.innerHTML = `
          <h2>${vehicle.name}</h2> 
          
          <img class="modal-image" src="${vehicle.image}" alt="${vehicle.name}"> 
          
          <div class="modal-specs"> 
            <div> 
               <p><span>Country: </span>${vehicle.country}</p>  
               <p><span>Year: </span>${vehicle.year || "Data unavailable"}</p> 
               <p><span>Type: </span>${vehicle.type}</p> 
               <p><span>Crew: </span>${vehicle.crew || "Data unavailable"}</p> 
            </div> 

            <div> 
               <p><span>Armament: </span>${vehicle.armament || "Data unavailable"}</p> 
               <p><span>Weight: </span>${vehicle.weight ? vehicle.weight + " tons" : "Data unavailable"}</p> 
               <p><span>Speed: </span>${vehicle.speed ? vehicle.speed + " km/h" : "Data unavailable"}</p> 
               <p><span>Engine: </span>${vehicle.engine || "Data unavailable"}</p> 
            </div> 
        </div>
    `; 

    vehicleModal.classList.add("active");
});
  
   vehiclesContainer.appendChild(card);
}); 
}
renderVehicles(vehicles); 

function filterVehicles() { 
const searchText = searchInput.value.toLowerCase().trim(); 
const selectedCountry = countryFilter.value;
const selectedType = typeFilter.value;
const selectedSort = yearSort.value


const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch = (vehicle.name || "").toLowerCase().includes(searchText) || 
                          (vehicle.country || "").toLowerCase().includes(searchText) || 
                          (vehicle.type || "").toLowerCase().includes(searchText);

    const matchesCountry =
        selectedCountry === "all" ||
        vehicle.country === selectedCountry; 

    const matchesType =
    selectedType === "all" ||
    vehicle.type === selectedType;

    return matchesSearch && matchesCountry && matchesType;
});
if (selectedSort === "newest") {
    filteredVehicles.sort((a, b) => (b.year || 0) - (a.year || 0));
}

if (selectedSort === "oldest") {
    filteredVehicles.sort((a, b) => (a.year || 0) - (b.year || 0));
}

if (selectedSort === "name-asc") {
    filteredVehicles.sort((a, b) =>
        (a.name || "").localeCompare(b.name || "")
    );
}

if (selectedSort === "name-desc") {
    filteredVehicles.sort((a, b) =>
        (b.name || "").localeCompare(a.name || "")
    );
}

renderVehicles(filteredVehicles);
}
searchInput.addEventListener("input", filterVehicles);
countryFilter.addEventListener("change", filterVehicles);
typeFilter.addEventListener("change", filterVehicles);
yearSort.addEventListener("change", filterVehicles); 

const countries = [...new Set( vehicles.map((vehicle) => vehicle.country) )];
countries.sort();
countries.forEach((country) => { const option = document.createElement("option");
option.value = country;
option.textContent = country;

countryFilter.appendChild(option);
}); 

const types = [...new Set(vehicles.map((vehicle) => vehicle.type))];
types.sort();
types.forEach((type) => { const option = document.createElement("option");
option.value = type;
option.textContent = type;

typeFilter.appendChild(option);
});