function updateSelected(e) {
  e.preventDefault();

  document.getElementById('Nav1').className = '';
  document.getElementById('Nav2').className = '';
  document.getElementById('Nav3').className = '';
  document.getElementById(e.target.id).className = 'selected';
}
