// Sample page data
let pageContent = `Welcome to My Wiki!`;

// Display initial page content
document.getElementById('page-content').innerHTML = pageContent;

// Edit button functionality
document.getElementById('edit-btn').addEventListener('click', function() {
    document.getElementById('page-content').style.display = 'none';
    document.getElementById('edit-content').style.display = 'block';
    document.getElementById('edit-content').value = pageContent;
    document.getElementById('save-btn').style.display = 'block';
});

// Save button functionality
document.getElementById('save-btn').addEventListener('click', function() {
    pageContent = document.getElementById('edit-content').value;
    document.getElementById('page-content').innerHTML = pageContent;
    document.getElementById('page-content').style.display = 'block';
    document.getElementById('edit-content').style.display = 'none';
    document.getElementById('save-btn').style.display = 'none';
});

