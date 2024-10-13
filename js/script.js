document.addEventListener('DOMContentLoaded', () => {
    let skills = document.querySelector('.skills')
    let myWorks = document.querySelector('.my-projects')
    let send = document.querySelector('.connect')
    let btn = document.querySelector('.download-btn')
    let nameInp = document.querySelector('.name-inp')
    let emailInp = document.querySelector('.email-inp')
    let mesaInp = document.getElementById('message')
    let menu_bar = document.querySelector('.menu_bar')
    let mobile_nav = document.querySelector('.mobile_nav')
    let lis = document.querySelectorAll('.mobile_nav .nav-ul li')

    imgs.forEach((item, index) => {
        let skill_child = document.createElement('div')
        console.log(item);
        skill_child.innerHTML = `${item.src}`
        skills.appendChild(skill_child)
    })

    projects.forEach((item, index) => {
        let project_child = document.createElement('div')
        project_child.setAttribute('class', 'project_box')
        console.log(project_child);
        project_child.innerHTML += `
    <img src=${item.img_src}  class="project_img" alt=${item.title}/>
        <div>
            <span class="title">${item.title}</span>
            <span class="stack">Tech stack : ${item.tech_stack}</span>
        </div>
        <div class="project_footer">
            <span class="flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2867 8.7133C10.6041 8.031 9.67846 7.64771 8.71334 7.64771C7.74821 7.64771 6.82259 8.031 6.14 8.7133L3.56584 11.2866C2.88324 11.9692 2.49976 12.895 2.49976 13.8604C2.49976 14.8257 2.88324 15.7515 3.56584 16.4341C4.24844 17.1167 5.17424 17.5002 6.13959 17.5002C7.10493 17.5002 8.03074 17.1167 8.71334 16.4341L10 15.1475" stroke="#FCFCFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.71338 11.2867C9.39597 11.969 10.3216 12.3523 11.2867 12.3523C12.2518 12.3523 13.1775 11.969 13.86 11.2867L16.4342 8.71334C17.1168 8.03074 17.5003 7.10493 17.5003 6.13959C17.5003 5.17424 17.1168 4.24844 16.4342 3.56584C15.7516 2.88324 14.8258 2.49976 13.8605 2.49976C12.8951 2.49976 11.9693 2.88324 11.2867 3.56584L10 4.8525" stroke="#FCFCFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <a href=${item.link_netlify} target="_blank">Live Preview</a>
            </span>
            <span class="flex">
                <svg width="20" height="20" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44 0C19.69 0 0 19.69 0 44C0 63.47 12.595 79.915 30.085 85.745C32.285 86.13 33.11 84.81 33.11 83.655C33.11 82.61 33.055 79.145 33.055 75.46C22 77.495 19.14 72.765 18.26 70.29C17.765 69.025 15.62 65.12 13.75 64.075C12.21 63.25 10.01 61.215 13.695 61.16C17.16 61.105 19.635 64.35 20.46 65.67C24.42 72.325 30.745 70.455 33.275 69.3C33.66 66.44 34.815 64.515 36.08 63.415C26.29 62.315 16.06 58.52 16.06 41.69C16.06 36.905 17.765 32.945 20.57 29.865C20.13 28.765 18.59 24.255 21.01 18.205C21.01 18.205 24.695 17.05 33.11 22.715C36.63 21.725 40.37 21.23 44.11 21.23C47.85 21.23 51.59 21.725 55.11 22.715C63.525 16.995 67.21 18.205 67.21 18.205C69.63 24.255 68.09 28.765 67.65 29.865C70.455 32.945 72.16 36.85 72.16 41.69C72.16 58.575 61.875 62.315 52.085 63.415C53.68 64.79 55.055 67.43 55.055 71.555C55.055 77.44 55 82.17 55 83.655C55 84.81 55.825 86.185 58.025 85.745C66.7597 82.796 74.3497 77.1822 79.7268 69.6937C85.1039 62.2052 87.9974 53.219 88 44C88 19.69 68.31 0 44 0Z" fill="#FFFEFE"/>
                    </svg>
                    <a href=${item.link_code} target="_blank">View Code</a>
            </span>
        </div>
    `
        myWorks.appendChild(project_child)
    })

    send.addEventListener('submit', (e) => {
        e.preventDefault()
        nameInp.setAttribute('disabled', 'true')
        emailInp.setAttribute('disabled', 'true')
        mesaInp.setAttribute('disabled', 'true')
        btn.setAttribute('disabled', 'true')
        btn.innerText = 'Loading...'
        const params = {
            name: nameInp.value,
            email: emailInp.value,
            message: mesaInp.value,
        };

        const service_ID = 'service_phgz363'
        const templete_id = 'template_jcktmbq'

        emailjs.send(service_ID, templete_id, params)
            .then(
                res => {

                    document.querySelector('.name-inp').value = ''
                    document.querySelector('.email-inp').value = ''
                    document.getElementById('message').value = ''
                    alert(`Hurmatli ${params.name} sizning habaringiz muvaffaqiyatli jo'natildi.`);
                    nameInp.removeAttribute('disabled', 'false')
                    emailInp.removeAttribute('disabled', 'false')
                    mesaInp.removeAttribute('disabled', 'false')
                    btn.removeAttribute('disabled', 'false')

                    btn.innerText = 'Send'

                }
            )
            .catch(error => {
                nameInp.removeAttribute('disabled', 'false')
                emailInp.removeAttribute('disabled', 'false')
                mesaInp.removeAttribute('disabled', 'false')
                btn.removeAttribute('disabled', 'false')
                btn.innerText = 'Send'
                alert(`Internet bog'lanishni tekshiring!`)
            })

    })
    menu_bar.addEventListener('click', (e) => {
        e.preventDefault()
        mobile_nav.classList.toggle('mob_flexd')
        document.body.classList.toggle('hide')
    })

    lis.forEach(item => {
        item.addEventListener('click', () => {
            document.body.classList.toggle('hide')
            mobile_nav.classList.toggle('mob_flexd')

        })
    })

    /////animatsiya
    let i_about= document.getElementById('i-about')
let my_skills = document.getElementById('my-skills')
let my_works = document.getElementById('my-works')
let contact=document.getElementById('contact')



const options = {
    rootMargin: '100px',
    threshold: 0.2
}

let observer = new IntersectionObserver(
    callbackFunction,
    options
)
function callbackFunction(enteries) {
    enteries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry);
          
            if (entry.target.id === 'i-about') {
                entry.target.classList.add('loaded')
            }

            if (entry.target.id === 'my-skills') {
                entry.target.classList.add('loaded')
            }

            if (entry.target.id === 'my-works') {
                entry.target.classList.add('loaded')
            }

            if (entry.target.id === 'contact') {
                entry.target.classList.add('loaded')
            }
            observer.unobserve(entry.target)
        }
    })
}


observer.observe(i_about)
observer.observe(my_skills)
observer.observe(my_works)
observer.observe(contact)
})


