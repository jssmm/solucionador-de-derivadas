document.forms.formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Don't send form
    var expr = this.elements.func.value,
        diff = nerdamer.getCore().Calculus.diff(nerdamer(expr).symbol).text();
    document.getElementById('text').textContent = diff;
  });