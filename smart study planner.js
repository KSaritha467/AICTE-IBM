<script>
// Show modal on Login click
document.querySelector('.login-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('loginModal').style.display = 'block';
});

// Hide modal on close click or outside click
document.querySelector('.close').onclick = function() {
  document.getElementById('loginModal').style.display = 'none';
};
window.onclick = function(event) {
  if (event.target == document.getElementById('loginModal')) {
    document.getElementById('loginModal').style.display = 'none';
  }
};
</script>
