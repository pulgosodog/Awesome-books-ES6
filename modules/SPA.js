
const addNew = () => {
  document.getElementById('add-new').style.display = 'flex';
  document.getElementById('library').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.querySelectorAll('.menu-item').forEach((n) => { n.style.color = 'black'; });
  document.querySelector('a.menu-item.add-new').style.color = '#5c7c99';
  };

const list = () => {
  document.getElementById('library').style.display = 'flex';
  document.getElementById('add-new').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.querySelectorAll('.menu-item').forEach((n) => { n.style.color = 'black'; });
  document.querySelector('a.menu-item.first.list').style.color = '#5c7c99';
  };

const contact = () => {
  document.getElementById('contact').style.display = 'flex';
  document.getElementById('library').style.display = 'none';
  document.getElementById('add-new').style.display = 'none';
  document.querySelectorAll('.menu-item').forEach((n) => { n.style.color = 'black'; });
  document.querySelector('a.menu-item.contact').style.color = '#5c7c99';
  };

export { addNew, list, contact };
