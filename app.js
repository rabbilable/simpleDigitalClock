const clock = document.querySelector('.clock');


const tick = ()=>{
    let now = new Date();

    let h = now.getDate();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // console.log(h, m , s);

    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>  
    `;

    clock.innerHTML = html;

}

setInterval(tick, 1000)

