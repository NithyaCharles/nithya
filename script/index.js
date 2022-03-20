const animation = bodymovin.loadAnimation {(
  container: document.getElementsById('backgroundVid'),
  renderder: 'svg',
  loop: true,
  autoplay: true,
  path: 'script/data.json'
)}
