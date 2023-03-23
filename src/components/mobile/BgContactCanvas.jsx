import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

export const BgContactCanvas = () => {
  const mobile_canvas = useRef();
  useEffect(() => {
    const canvas = mobile_canvas.current;
    const ctx = canvas.getContext('2d');

    let particlesArr;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      update() {
        if (this.size + this.x >= canvas.width || this.x <= 0) {
          this.directionX = -this.directionX;
        }
        if (this.size + this.y >= canvas.height || this.y - this.size <= 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    function init() {
      particlesArr = [];
      for (let i = 0; i < 100; i++) {
        let size = Math.random() * 4;
        let x = Math.random() * (innerWidth - size * 2);
        let y = Math.random() * (innerHeight - size * 2);
        let directionX = Math.random() * 2 - 1;
        let directionY = Math.random() * 2 - 1;
        let color = 'white';
        particlesArr.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = 0; i < particlesArr.length; i++) {
        particlesArr[i].update();
      }
    }
    init();
    animate();
    return () => {
      window.removeEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      });
    };
  }, []);
  return (
    <Box w='full' h='auto' pos='absolute' inset={0} zIndex={-1}>
      <canvas ref={mobile_canvas} id='canvas_mobile'></canvas>
    </Box>
  );
};
