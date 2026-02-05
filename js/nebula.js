const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

let w, h;
let zoom = 1, targetZoom = 1;

function resize() {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
}
addEventListener("resize", resize);
resize();

const stars = Array.from({ length: 900 }, () => ({
  x: Math.random(),
  y: Math.random(),
  z: Math.random(),
  c: Math.random()
}));

export function setZoom(level) {
  targetZoom = 1 + level * 0.25;
}

function draw() {
  zoom += (targetZoom - zoom) * 0.04;

  ctx.setTransform(
    zoom, 0, 0, zoom,
    w / 2 * (1 - zoom),
    h / 2 * (1 - zoom)
  );

  ctx.fillStyle = "rgba(4,6,17,0.25)";
  ctx.fillRect(0, 0, w, h);

  stars.forEach(s => {
    const x = s.x * w;
    const y = s.y * h;
    const size = s.z * 2.2;

    let color =
      s.c < 0.33 ? "#2a6cf5" :
      s.c < 0.66 ? "#ffd36a" :
      "#3cffb0";

    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
  });

  requestAnimationFrame(draw);
}

draw();
