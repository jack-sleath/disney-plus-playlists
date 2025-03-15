 // Initialize JSON array and index counter
 let jsonArray = [];
 let index = 0;

 // Toggle additional fields based on selection of "Episode"
 document.getElementById('type').addEventListener('change', function () {
   if (this.value === 'episode') {
     document.getElementById('episodeFields').style.display = 'block';
   } else {
     document.getElementById('episodeFields').style.display = 'none';
   }
 });

 // Add entry to JSON array when the button is clicked
 document.getElementById('addButton').addEventListener('click', function () {
   const name = document.getElementById('name').value;
   const platform = document.getElementById('platform').value;
   const type = document.getElementById('type').value;

   // Build entry object with the current index
   let entry = { index: index, name: name, platform: platform, type: type };

   // If episode is selected, add season and episode fields
   if (type === 'episode') {
     entry.season = document.getElementById('season').value;
     entry.episode = document.getElementById('episode').value;
   }

   // Add the entry to the array and increment the index
   jsonArray.push(entry);
   index++;

   //clean the form
   if (type === 'movie') {
     document.getElementById('name').value = "";
   } else {
     document.getElementById('season').value = "";
     document.getElementById('episode').value = "";
   }

   // Display the updated JSON array in a pretty format
   document.getElementById('contentOutput').textContent = JSON.stringify(jsonArray, null, 2);
 });