document.getElementById('joinNowBtn').addEventListener('click', function() {
    // Hide all sections except the form
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('quoteSection').style.display = 'none';
    document.getElementById('growthSection').style.display = 'none';
    document.getElementById('teamSection').style.display = 'none';
    
    // Show the form section
    document.getElementById('formSection').style.display = 'block';
});
