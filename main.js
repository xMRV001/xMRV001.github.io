window.onload = function() {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
      box.style.transition = 'all 0.4s ease-in-out';
      box.addEventListener('mouseover', () => {
          box.style.backgroundColor = 'rgb(47, 47, 47)';
      });
      box.addEventListener('mouseout', () => {
          box.style.backgroundColor = 'rgb(16, 16, 16)';
          box.style.transform = 'translate3d(0,0,0)';
      });
      box.addEventListener('mousemove', e => {
          let x = e.clientX / window.innerWidth;
          let y = e.clientY / window.innerHeight;
          box.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0)`;
      });
  });  
}