//Script start
function Calculate_age(Birth) {
    const Birthdate = new Date(Birth);
    const Current_date = new Date();
    const Age_in_milliseconds = Current_date - Birthdate;
    const Age_in_years = Age_in_milliseconds / (1000 * 60 * 60 * 24 * 365.25);

    return Math.floor(Age_in_years);

}

function Update_age() {
    const Birth = new Date('2005-04-24');
    const Age_element = document.getElementById('Age');
    const Age = Calculate_age(Birth);
    Age_element.textContent = Age + ' years old';
}

function Games() {
    const Game_icon = document.querySelector('.fa-gamepad');
    const Game_list = document.querySelector('.Games');
    Game_icon.addEventListener('click', () => {
        Game_list.classList.toggle('is-active');
    });
}

function Mangas() {
    const Manga_icon = document.querySelector('.fa-book-open-reader');
    const Manga_list = document.querySelector('.Mangas');
    Manga_icon.addEventListener('click', () => {
        Manga_list.classList.toggle('is-active');
    });
}

function Go_to() {
    const About_me_section = document.querySelector('.About_me_section');
    const Education_section = document.querySelector('.Education_section');
    const Skills_section = document.querySelector('.Skills_section');
    const Footer = document.querySelector('.Footer');
    const Top = document.querySelector('.Top');
    document.querySelector('.See_more').addEventListener('click', () => {
        About_me_section.scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.Go_to_about_me').addEventListener('click', () => {
        About_me_section.scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.Go_to_education').addEventListener('click', () => {
        Education_section.scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.Go_to_skills').addEventListener('click', () => {
        Skills_section.scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.Go_to_contacts').addEventListener('click', () => {
        Footer.scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.Title').addEventListener('click', () => {
        Top.scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.To_the_top').addEventListener('click', () => {
        Top.scrollIntoView({ behavior: 'smooth' });
    });
}

function Toggle_scroll_to_top() {
    const To_the_top = document.querySelector('.To_the_top');

    if (document.documentElement.scrollTop > 300) {
        To_the_top.classList.remove('Display_to_the_top');
    } else {
        To_the_top.classList.add('Display_to_the_top')
    }

}

Update_age();

setInterval(Update_age, 60000);

Games();

Mangas();

Go_to();

window.addEventListener('scroll', function () {

    Toggle_scroll_to_top();

});
//Script end

//Animation start
const Timeline = gsap.timeline({ defaults: { duration: 2 } })
Timeline
    .from('.navbar', { y: '-100%' })
    .from('.navbar-brand', { opacity: 0 }, '<.3')
    .from('.Menu', { opacity: 0, stagger: 0.3 }, '<.3')
    .from('.Landing_page_picture_column', { x: '-100vw' }, '<.3')
    .from('.Landing_page_content_column', { x: '100vw' }, '<.3')
//Animation end