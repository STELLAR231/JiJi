const fog = document.getElementById("fog");
const ftx = fog.getContext("2d");

fog.width = innerWidth;
fog.height = innerHeight;

let t = 0;

function drawMist() {
  t += 0.002;
  ftx.clearRect(0,0,fog.width,fog.height);

  for (let i = 0; i < 5; i++) {
    const x = fog.width/2 + Math.sin(t+i) * 250;
    const y = fog.height/2 + Math.cos(t+i) * 180;

    const g = ftx.createRadialGradient(x,y,0,x,y,360);
    g.addColorStop(0,"rgba(255,255,255,0.05)");
    g.addColorStop(1,"transparent");

    ftx.fillStyle = g;
    ftx.fillRect(0,0,fog.width,fog.height);
  }

  requestAnimationFrame(drawMist);
}

drawMist();
