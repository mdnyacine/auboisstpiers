var tl;

function initObjects() {
    tl = new TimelineLite({paused: true});

	tl
	.set('#text_logo, #text_logo2', {opacity:0})
	.set('#menu, .container_opacity', {opacity:0})
	.set('.full-screen-image img', {opacity:1})
	.set('#logo', {y:120, scale: 1.2})
    .to('#text_logo', 1.4, {opacity:1, transformOrigin:'50% 50%', ease: Expo.easein}, 0.3)
    .to('#text_logo2', 1.2, {opacity:1, transformOrigin:'50% 50%', ease: Expo.easein}, 1)
	.to('#logo', 0.8, {y:0, scale:1 , transformOrigin:'50% 50%', ease: Expo.easein, delay:1}, 1)
	.to('.full-screen-image img', 1.2, {opacity:0.35, transformOrigin:'50% 50%', ease: Expo.easein, delay:0.1})
    .to('.container_opacity, #menu', 1.5, {opacity:1, transformOrigin:'50% 50%', ease: Expo.easein}, '-=0.4');

}

function launch() {
  tl.play()
}
initObjects();
launch();



function changeLang(lang){

	var item = document.getElementsByClassName('active')[0];
	if( item )
		item.classList.remove('active');

	document.getElementById(lang).classList.add('active');


	if(lang == "fr"){
		document.getElementById('myText').innerHTML = 'Notre site sera bientôt disponible';
		document.getElementById('myText3').innerHTML = 'NOUS CONTACTER';
		document.getElementById('pop-up-txt').innerHTML = 'Mail : info@auboisstpiers.be <br/>GSM: 0471/54.29.18 | Fixe: 02 242 25 94 <br/>Adresse : Rue au bois 364, 1150 Bruxelles<br/> Horaires : Du Lundi au vendredi de 9:00 - 16:00';
		document.getElementById('myText4').innerHTML = 'À propos';
		document.getElementById('myText5').innerHTML = 'À propos';
		document.getElementById('myText2').innerHTML =
		'Le site web est actuellement en construction. <br>En attendant, suivez&#8209;nous sur les réseaux sociaux et n&apos;hésitez pas à nous contacter par mail!';
		window.sessionStorage.setItem('lang', 'fr');

	}else{
		document.getElementById('myText').innerHTML = 'Our site will be available soon';
		document.getElementById('myText3').innerHTML = 'CONTACT US';
		document.getElementById('myText4').innerHTML = 'About';
		document.getElementById('myText5').innerHTML = 'About';
		document.getElementById('pop-up-txt').innerHTML = 'Mail : info@auboisstpiers.be <br/>GSM: 0471/54.29.18 | Fixe: 02 242 25 94	<br/>Adress : Rue au Bois 364, 1150 Woluwe-Saint-Pierre<br/> Schedule : Monday to friday from 9:00 - 16:00';
		document.getElementById('myText2').innerHTML =
		'The website is currently under construction.<br> Meanwhile, follow us on social media and feel free to contact us by email!';

		window.sessionStorage.setItem('lang', 'en');
	}
}


if(window.sessionStorage.getItem('lang')){
	changeLang(window.sessionStorage.getItem('lang'))
}else{
	changeLang('fr');
}
