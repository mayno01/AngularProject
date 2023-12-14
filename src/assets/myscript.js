function toggleForms() {
  var form1 = document.getElementById('form1');
  var form2 = document.getElementById('form2');

  if (form1.style.display === 'none') {
    form1.style.display = 'block';
    form2.style.display = 'none';
  } else {
    form1.style.display = 'none';
    form2.style.display = 'block';
  }
}
