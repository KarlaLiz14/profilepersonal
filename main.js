let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(1000)
  .typeString('Ingeniera Mecatrónica y cofundadora de Rincón Verde')
  .pauseFor(200)
  .deleteChars(5)
  .start();
