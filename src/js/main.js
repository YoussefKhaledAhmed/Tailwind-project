let darkLightModeBtn = document.getElementById('darkLightMode');
let homeBtn = document.querySelector('#homeBtn');
let aboutBtn = document.querySelector('#aboutBtn');
let contactBtn = document.querySelector('#contactBtn');
let homeSection = document.querySelector('#home');
let aboutSection = document.querySelector('#about');
let contactSection = document.querySelector('#contact');
let title = document.querySelector('title');

/* if 'color-theme' doesn't exist */
if(!('color-theme' in localStorage)){
    localStorage.setItem('color-theme' , (window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');
}

/* checking if the local storage has 'dark' or 'light' */
if (localStorage.getItem('color-theme') === 'dark') {
    document.documentElement.classList.add('dark');
    darkLightModeBtn.innerHTML = "Light Mode";
} else {
    document.documentElement.classList.remove('dark');
    darkLightModeBtn.innerHTML = "Dark Mode";
}

darkLightModeBtn.addEventListener('click' , function(event){
    /* color-theme exists in local storage */
    if(localStorage.getItem('color-theme') === 'dark'){
        document.documentElement.classList.remove('dark');
        darkLightModeBtn.innerHTML = "Dark Mode";
        localStorage.setItem('color-theme' , 'light');
    } else{
        document.documentElement.classList.add('dark');
        darkLightModeBtn.innerHTML = "Light Mode";
        localStorage.setItem('color-theme' , 'dark');
    }
});

homeBtn.addEventListener('click' , function(){
    /* Set the title */
    title.innerHTML = 'Home';

    /* home btn */
    homeBtn.classList.remove('text-gray-900' , 'dark:text-gray-800' , 'dark:hover:text-gray-700');
    homeBtn.classList.add('text-blue-700' , 'dark:text-blue-700');
    homeSection.classList.remove('hidden');
    homeSection.classList.add('block');
    
    /* about btn */
    aboutBtn.classList.add('text-gray-900' , 'dark:text-gray-800' , 'dark:hover:text-gray-700');
    aboutBtn.classList.remove('text-blue-700' , 'dark:text-blue-700');
    aboutSection.classList.add('hidden');
    aboutSection.classList.remove('block');

    /* contact btn */
    contactBtn.classList.add('text-gray-900' , 'dark:text-gray-800' , 'dark:hover:text-gray-700');
    contactBtn.classList.remove('text-blue-700' , 'dark:text-blue-700');
    contactSection.classList.add('hidden');
    contactSection.classList.remove('block');

});

aboutBtn.addEventListener('click' , function(){
    /* Set the title */
    title.innerHTML = 'About';

    /* about btn */
    aboutBtn.classList.remove('text-gray-900' , 'dark:text-gray-800' , 'dark:hover:text-gray-700');
    aboutBtn.classList.add('text-blue-700' , 'dark:text-blue-700');
    aboutSection.classList.remove('hidden');
    aboutSection.classList.add('block');
    
    /* home btn */ 
    homeBtn.classList.add('text-gray-900' , 'dark:text-gray-800' , 'dark:hover:text-gray-700');
    homeBtn.classList.remove('text-blue-700' , 'dark:text-blue-700');
    homeSection.classList.add('hidden');
    homeSection.classList.remove('block');

    /* contact btn */
    contactBtn.classList.add('text-gray-900' , 'dark:text-gray-800' , 'dark:hover:text-gray-700');
    contactBtn.classList.remove('text-blue-700' , 'dark:text-blue-700');
    contactSection.classList.add('hidden');
    contactSection.classList.remove('block');    

});

contactBtn.addEventListener('click' , function(){
    /* Set the title */
    title.innerHTML = 'Contact';

    /* contact btn */
    contactBtn.classList.remove('text-gray-900' , 'dark:text-gray-800' , 'dark:hover:text-gray-700');
    contactBtn.classList.add('text-blue-700' , 'dark:text-blue-700');
    contactSection.classList.remove('hidden');
    contactSection.classList.add('block');

    /* about btn */
    aboutBtn.classList.add('text-gray-900' , 'dark:text-gray-800' , 'dark:hover:text-gray-700');
    aboutBtn.classList.remove('text-blue-700' , 'dark:text-blue-700');
    aboutSection.classList.add('hidden');
    aboutSection.classList.remove('block');

    /* home btn */
    homeBtn.classList.add('text-gray-900' , 'dark:text-gray-800' , 'dark:hover:text-gray-700');
    homeBtn.classList.remove('text-blue-700' , 'dark:text-blue-700');
    homeSection.classList.add('hidden');
    homeSection.classList.remove('block');
});