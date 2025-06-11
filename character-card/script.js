const character = {
  name: "Squirtle-Squad-Squirtle",
  class: "Water Type",
  level: 5,
  health: 100,
  image: 'https://miro.medium.com/v2/resize:fit:750/format:webp/1*W_ITBT0_dDNGyy_yPRQO3g.jpeg',
  attacked() {
    if (this.health >= 20) {
      this.level -= 1;
      this.health -= 20;
    } else {
      alert('Squirtle Died!');
    }
    updateDisplay();
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
    updateDisplay();
  }
};

const healthEl = document.querySelector('#health');
const levelEl = document.querySelector('#level');
const classEl = document.querySelector('#class');
const nameEl = document.querySelector('.name');
const imgEl = document.querySelector('.image');

function updateDisplay() {
  healthEl.textContent = character.health;
  levelEl.textContent = character.level;
  classEl.textContent = character.class;
  nameEl.textContent = character.name;
  imgEl.src = character.image;
  imgEl.alt = character.name;
}

document.querySelector('#attacked').addEventListener('click', () => {
  character.attacked();
});

document.querySelector('#levelup').addEventListener('click', () => {
  character.levelUp();
});

updateDisplay();