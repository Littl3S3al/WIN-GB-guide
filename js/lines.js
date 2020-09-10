const getLocation = el => {
    return el.getBoundingClientRect();
}

// line one
const lines = () => {
    let point1 = getLocation(openingScreens[5]);
    let point2 = getLocation(placeholders[0]);
    let point3 = getLocation(placeholders[1]);
    let point4 = getLocation(placeholders[2]);

    let blt = 'a10,10 0 0 0 10,10';
    let brt = 'a10,10 0 0 1 -10,10';
    let trt = 'a10,10 0 0 1 10,10';
    let tlt = 'a10,10 0 0 0 -10,10';


    // landing page
    linesDiv.querySelector('svg').innerHTML += `
        <path d="
            M ${point1.left + point1.width/2} ${point1.bottom - point1.height/2} 
            V ${window.innerHeight - 100} ${blt}
            H ${window.innerWidth -40} ${trt}
            V ${point2.top + point2.height/2} ${brt}
            H ${point2.right - point2.width/2}
            V ${window.innerHeight * 2} ${brt}
            H 500 ${tlt}
            V ${window.innerHeight * 2 + 200}
            " fill="transparent" stroke="#1f8da2" stroke-width="10"/>

            <circle cx="${500 + 10 - 21}" cy="${window.innerHeight * 2 + 200}" r="25" fill="#1f8da2"/>

            <circle cx="${point3.left + point3.width/2}" cy="${point3.bottom - 100}" r="25" fill="#1f8da2"/>

            <path d="
            M ${point3.left + point3.width/2} ${point3.bottom - 100}
            V ${window.innerHeight * 3} ${blt}
            H ${window.innerWidth -40} ${trt}
            V ${point4.top + point4.height/2} ${brt}
            H ${point4.right - 100}
            " fill="transparent" stroke="#1f8da2" stroke-width="10"/>


    `;
}

if(window.innerWidth >= 1200){
    setTimeout(() => {
        lines();
    }, 2000);
}