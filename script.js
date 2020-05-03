//function expression to get select all elements
const selectElement = (s) => document.querySelector(s);
//open
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});
//close
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

