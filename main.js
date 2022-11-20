
class User {
    constructor(src, alt, title, descr) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
    }

    render() {
        const grid = document.querySelector('.row__grid');
        grid.insertAdjacentHTML('beforeend', `
        <div class="row__flex-item">
            <figure>
                <img src=${this.src} alt=${this.alt}>
                <figcaption>${this.title}</figcaption>
                <figcaption>${this.descr}</figcaption>
            </figure>
        </div>
        `);
    }
}

new User(
    "img/Filipp.PNG",
    "Fil",
    "Культурный отдых",
    "Копыль"
).render();

new User(
    "img/meTwo.jpg",
    "Fil",
    "Университет",
    "Выступление"
).render();

new User(
    "img/photome.jpg",
    "Fil",
    "Фотосет",
    "Финал ЖЛФЛ"
).render();

new User(
    "img/me.jpg",
    "Fil",
    "Отдых",
    "Египет"
).render();

new User(
    "img/FilippNight.jpg",
    "Fil",
    "Жодино-Южное",
    "Футбол"
).render();

new User(
    "img/meAndyou.jpg",
    "Fil",
    "Семейное фото",
    "Тоже на футболе"
).render();





