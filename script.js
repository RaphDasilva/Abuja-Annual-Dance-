const hamBuggerBtn = document.querySelector('.ham-bugger');
const closeMenu = document.querySelector('.close');
const aboutUs = document.querySelector('#about-us');
const program = document.querySelector('#program');
const speakers = document.querySelector('#speakers');
const sponsor = document.querySelector('#sponsor');
const concert = document.querySelector('#concert');
const everySpeaker = document.querySelector('.speakers');

function showMenu() {
  document.querySelector('.hambugger-menu').style.display = 'flex';
}

hamBuggerBtn.addEventListener('click', () => {
  showMenu();
});

function menuClose() {
  document.querySelector('.hambugger-menu').style.display = 'none';
}

closeMenu.addEventListener('click', () => {
  menuClose();
});

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
});

const presenters = [
  {
    id: 1,
    name: 'Iweh Odinaka',
    title: 'Nigerian dancer and hypeman',
    description: 'Iweh Pascal Odinaka who is popularly known as Poco Lee is a professional Nigerian dancer, hypeman, and MC.',
    image: 'img/poco.jpg',
    imageAlt: 'Poco Lee',
  },
  {
    id: 2,
    name: 'Omoniyi Temidayo',
    title: 'CEO and Founder of Zanku Records',
    description: 'Omoniyi Temidayo Raphael, known professionally as Zlatan Ibile, is a Nigerian rapper and singer.',
    image: 'img/5d8df3d6-zlatan-ibile.jpg',
    imageAlt: 'Zlatan',
  },
  {
    id: 3,
    name: 'Kafayat Shafau',
    title: 'Founder and owner of Imagneto Dance',
    description: 'Kafayat Oluwatoyin Shafau, popularly known by her stage name Kaffy, is a Nigerian dancer, choreographer, dance instructor and fitness coach.',
    image: 'img/Kaffy2.jpg',
    imageAlt: 'Kaffy',
  },
  {
    id: 4,
    name: 'Nneka Irobunda',
    title: 'Nigerian-born dance',
    description: 'Delacyn with the full name Nneka Irobunda is a Nigerian-born dancer, choreographer, and creative director.',
    image: 'img/dell.jpg',
    imageAlt: 'Delacyn',
  },
  {
    id: 5,
    name: 'Sarah Olaniran',
    title: 'Nigerian dancer based in the United States',
    description: 'Sayrachips is also a choreographer and fitness coach who was tutored by Kaffy before she finally left Nigeria.',
    image: 'img/Sayrahchips-bio.jpg',
    imageAlt: 'Sayrachips',
  },
  {
    id: 6,
    name: 'Anita Obidi',
    title: 'Nigerian dancer, singer-songwriter and model',
    description: 'Korra Obidi is one of the most flexible and best dancers in Nigeria. She is a Nigerian-born dancer, choreographer and singer who resides in the United States.',
    image: 'img/obb.jpeg',
    imageAlt: 'Korra',
  },
];

window.addEventListener('load', () => {
  presenters.forEach((element) => {
    const speaker = `<div class="speaker-card">
      <div class="speaker-img"><img src="${element.image}" alt="${element.imageAlt}"></div>
      <div class="about-speaker">
          <div class="Speaker-name">
              <h4>${element.name}</h4>
          </div>
          <div class="speaker-info">
              <p>${element.title}</p>
          </div>
          <div class="under-line"></div>
          <div class="speaker-discription">
              <p>${element.description}</p>
          </div>
      </div>
  </div>`;
    everySpeaker.innerHTML += speaker;
  });
});
