const gb = document.querySelector('.gb');
const hb = document.querySelector('.hb');
const mb = document.querySelector('.mb');
const db = document.querySelector('.db');
const zsb = document.querySelector('.zsb');
const bb = document.querySelector('.bb');
const openg = document.querySelector('.openg');
const openh = document.querySelector('.openh');
const openm = document.querySelector('.openm');
const opend = document.querySelector('.opend');
const openzs = document.querySelector('.openzs');
const openb = document.querySelector('.openb');
const gclose = document.querySelector('.gclose');
const hclose = document.querySelector('.hclose');
const mclose = document.querySelector('.mclose');
const dclose = document.querySelector('.dclose');
const zsclose = document.querySelector('.zsclose');
const bclose = document.querySelector('.bclose');
const header2 = document.querySelector('.header2');
const restat = document.querySelector('.restat');
const restat2 = document.querySelector('.restat2');
const black = document.querySelector('.black');


function respat() {
	header2.classList.add('active-checkresp');
	restat.classList.add('active-checkresp');
	restat2.classList.add('active-checkresp');
}

function respat2() {
	restat.classList.remove('active-checkresp');
	restat2.classList.remove('active-checkresp');
	header2.classList.remove('active-checkresp');
}


openg.addEventListener('click', ()=> {gb.classList.add('active-popup'); black.classList.add('active');});
openh.addEventListener('click', ()=> {hb.classList.add('active-popup'); black.classList.add('active');});
openm.addEventListener('click', ()=> {mb.classList.add('active-popup'); black.classList.add('active');});
opend.addEventListener('click', ()=> {db.classList.add('active-popup'); black.classList.add('active');});
openzs.addEventListener('click', ()=> {zsb.classList.add('active-popup'); black.classList.add('active');});
openb.addEventListener('click', ()=> {bb.classList.add('active-popup'); black.classList.add('active');});
gclose.addEventListener('click', ()=> {gb.classList.remove('active-popup'); black.classList.remove('active');});
hclose.addEventListener('click', ()=> {hb.classList.remove('active-popup'); black.classList.remove('active');});
mclose.addEventListener('click', ()=> {mb.classList.remove('active-popup'); black.classList.remove('active');});
dclose.addEventListener('click', ()=> {db.classList.remove('active-popup'); black.classList.remove('active');});
zsclose.addEventListener('click', ()=> {zsb.classList.remove('active-popup'); black.classList.remove('active');});
bclose.addEventListener('click', ()=> {bb.classList.remove('active-popup'); black.classList.remove('active');});
