const [fire, ...otherFire] = document.querySelectorAll('.fire');
const title = document.querySelector('.title');

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
  return tempfire;
};

const animate_fire = (element) => {
  const rect = element.getBoundingClientRect();
  const left_position = rect.right - 15 - Math.floor(Math.random() * Math.floor(rect.width));
  const top_position = rect.bottom - 15 - Math.floor(Math.random() * Math.floor(rect.height));
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
