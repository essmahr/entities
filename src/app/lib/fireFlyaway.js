import styles from '../style/flyaway.scss';

function fireFlyaway({position}) {
  const animationDuration = 1500;
  const flyaway = document.createElement('div');

  flyaway.innerText = 'copied!';
  flyaway.style.top = `${position.y}px`;
  flyaway.style.left = `${position.x}px`;
  flyaway.className = styles.flyaway;

  document.body.appendChild(flyaway);

  setTimeout(() => {
    document.body.removeChild(flyaway);
  }, animationDuration);
}

export default fireFlyaway;
