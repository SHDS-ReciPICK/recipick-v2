function zoom(f) {
  var t = f.currentTarget;
  (offsetX = f.offsetX || f.touches[0].pageX),
    f.offsetY ? (offsetY = f.offsetY) : (offsetX = f.touches[0].pageX),
    (x = (offsetX / t.offsetWidth) * 100),
    (y = (offsetY / t.offsetHeight) * 100),
    (t.style.backgroundPosition = x + "% " + y + "%");
}
