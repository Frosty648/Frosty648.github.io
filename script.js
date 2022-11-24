const [fire, ...otherFire] = document.querySelectorAll('.fire');
const title = document.querySelector('.title');
const navbar = document.querySelector('.navbar');
const expand_button = document.querySelector('.nav-btn');
const invert_button = document.querySelector('#invert-btn');

title.addEventListener('mouseover', () => {
  fire.innerHTML = 'Beautiful';
});

title.addEventListener('mouseout', () => {
  fire.innerHTML = 'Magical';
});

const self_destruct = (element) => {
  element.remove();
};

const create_fire = () => {
  const tempfire = document.createElement('div');
  tempfire.innerHTML = "✨";
  tempfire.style.fontSize = '28px';
  tempfire.style.textAlign = 'center';
  tempfire.style.position = 'absolute';
  tempfire.style.zIndex = '1';
  tempfire.style.color = 'white';
  tempfire.style.userSelect = 'none';
  return tempfire;
};

const animate_fire = (element) => {
  const rect = element.getBoundingClientRect();
  const left_position = Math.floor(Math.random() * rect.width + 1) - 15;
  const top_position = Math.floor(Math.random() * rect.height + 1) - 20;
  const fire_div = create_fire();
  fire_div.style.left = `${left_position}px`;
  fire_div.style.top = `${top_position}px`;
  fire_div.style.animation = '1s ease-in-out 0s fire_anim forwards';
  element.appendChild(fire_div);
  setTimeout(self_destruct, 1000, fire_div);
};

otherFire.forEach(f => {
  setTimeout(
    () => setInterval(
      () => {
        animate_fire(f);
      },
      500
    ),
    Math.floor(Math.random() * 201)
  );
});

expand_button.addEventListener('click', () => {
  navbar.dataset.expanded = navbar.dataset.expanded == 'true' ? 'false' : 'true';
});

let inverted = false;
invert_button.addEventListener('click', () => {
  if (!inverted) {
    document.documentElement.style.filter = 'invert()';
    inverted = !inverted;
  } else {
    document.documentElement.style.filter = 'none';
    inverted = !inverted;
  }
});