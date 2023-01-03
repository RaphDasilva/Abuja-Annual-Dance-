const hamBuggerBtn = document.querySelector(".ham-bugger");
const closeMenu = document.querySelector(".close");
const aboutUs = document.querySelector("#about-us");
const program = document.querySelector("#program");
const speakers = document.querySelector("#speakers");
const sponsor = document.querySelector("#sponsor");
const concert = document. querySelector("#concert");

function showMenu(){
    document.querySelector(".hambugger-menu").style.display = 'flex';
}

hamBuggerBtn.addEventListener('click', () => {
    showMenu();
  });

  function menuClose(){
    document.querySelector(".hambugger-menu").style.display = 'none';
  }

  closeMenu.addEventListener('click', () => {
    menuClose();
  })

  aboutUs.addEventListener('click', () => {
    menuClose();
  });

  program.addEventListener('click', () => {
    menuClose();
  });

  speakers.addEventListener('click', () => {
    menuClose();
  });

  sponsor.addEventListener('click', () => {
    menuClose();
  });
  concert.addEventListener('click', () => {
    menuClose();
  })