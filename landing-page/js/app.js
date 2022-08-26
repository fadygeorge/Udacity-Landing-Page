/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const ul = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/* Start Creating Fourth Section in the HTML Page */
const sec4 = document.createElement("section");
const div4 = document.createElement("div");
const title4 = document.createElement("h2");
const p4 = document.createElement("p");
const mainn = document.querySelector("main");
sec4.id = "section4";
sec4.dataset.nav = "Section 4";

div4.classList.add("landing__container");

title4.textContent = "Section 4";

p4.textContent = "This is FWD New Section Added Dynamically By JavaScipt. Following is Random Paragraph: The Argentine real was the currency of Argentina between 1813 and 1881. From 1822, it was subdivided into ten décimos. The sol was also issued during this period and was equal to the real, while the peso was worth eight reales and the escudo was worth sixteen reales. This 1836 eight-escudo gold coin was issued by the Argentine Confederation, a predecessor state of modern Argentina, featuring a portrait of the Argentine politician and general Juan Manuel de Rosas on the obverse, and a depiction of a mountain with crossed flags and cannons on the reverse. Only six of these coins are known to exist; this one forms part of the National Numismatic Collection at the Smithsonian Institution. ";
div4.appendChild(title4);
div4.appendChild(p4);
sec4.appendChild(div4);

mainn.appendChild(sec4);


/* End Creating Fourth Section in the HTML Page */


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const sections = document.querySelectorAll("section");
sections.forEach(function(section){
    const section_Id = section.id;
    const section_Head = section.dataset.nav;
    const li = document.createElement("li");
    li.classList.add(section_Id);
    const a = document.createElement("a");
    a.href = "${section_Id}";
    a.textContent = section_Head;
    a.classList.add("nav_link");
    a.addEventListener('click', (e) => {
        e.preventDefault();
        section.scrollIntoView({
            "behavior" : "smooth",
        });
    });
    li.appendChild(a);
    fragment.appendChild(li);
});
ul.appendChild(fragment);




// Add class 'active' to section when near top of viewport

const nav_Li = document.querySelectorAll('ul li');

window.addEventListener("scroll", () => {

    let cur_sec = "";
    
    sections.forEach( section =>{
        const secTop = section.offsetTop;
        const secHeight = section.clientHeight;
        const sectionOffset = secTop+secHeight ;

        // removing (your-active-class) class from all the sections first
        section.classList.remove("your-active-class");
        
        // checking which section the window is showing by using offsets
        if(sectionOffset-300 >= pageYOffset && pageYOffset >= secTop-300){

            // Adding the (your-active-class) class to this section and markup the current section
            cur_sec = section.getAttribute("id");
            section.classList.add("your-active-class");
        }
    });

    
    
    // adding active status to the navbar using the current section marked before
    nav_Li.forEach(li => {
        // removing active class from all li in navbar first
        li.classList.remove("active");
        if(li.classList.contains(cur_sec)){
            // add active class to the current li using the marked up section
            li.classList.add('active');
        }
    });
    
});


