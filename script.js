// Function to switch between DCS ONLY view and Onboarding Status view
document.getElementById('dcsOnlyBtn').addEventListener('click', function() {
    document.getElementById('dcsView').style.display = 'grid';
    document.getElementById('onboardingView').style.display = 'none';
    document.getElementById('dcsOnlyBtn').classList.add('active');
    document.getElementById('onboardingStatusBtn').classList.remove('active');
});

document.getElementById('onboardingStatusBtn').addEventListener('click', function() {
    document.getElementById('dcsView').style.display = 'none';
    document.getElementById('onboardingView').style.display = 'block';
    document.getElementById('onboardingStatusBtn').classList.add('active');
    document.getElementById('dcsOnlyBtn').classList.remove('active');
});

function goToURL(url) {
    window.location.href = url;
}

// Mobile Navigation Toggle
document.getElementById('navToggle').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
});
