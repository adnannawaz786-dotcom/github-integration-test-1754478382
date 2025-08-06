console.log('GitHub Integration Test - JavaScript loaded successfully!');

function showMessage() {
    alert('🎉 JavaScript is working! GitHub integration test successful!');
    console.log('Button clicked - all systems working');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - GitHub integration test project ready');
    
    // Add timestamp to page
    const container = document.querySelector('.container');
    const timestamp = document.createElement('p');
    timestamp.innerHTML = `<strong>Created:</strong> ${new Date().toLocaleString()}`;
    timestamp.style.textAlign = 'center';
    timestamp.style.color = '#7f8c8d';
    timestamp.style.marginTop = '30px';
    container.appendChild(timestamp);
});