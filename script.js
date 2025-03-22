function mostrarModelo(idModelo) {
  const modelo = document.getElementById('modelo3D');
  modelo.setAttribute('gltf-model', `#${idModelo}`);
}
