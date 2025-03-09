const fs = require('fs');
const path = require('path');

// Read the package.json file
const packagePath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Get today's date components
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;  // using number (no leading zero) for valid semver
const day = today.getDate();

// Get hours and minutes in 24-hour format with leading zeros
const hour = String(today.getHours()).padStart(2, '0');
const minute = String(today.getMinutes()).padStart(2, '0');

// Construct a new version string
// This will be in the format: YEAR.MONTH.SECONDHOURMINUTE
// For example, "2025.3.91520" for March 9, 2025 at 15:20.
const newVersion = `${year}.${month}.${day}${hour}${minute}`;

console.log(`Updating version to ${newVersion}`);

// Update the version field and write it back
packageJson.version = newVersion;
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
