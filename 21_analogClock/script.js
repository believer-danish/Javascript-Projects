
setInterval(() => {
    const date = new Date();
    const htime = date.getHours();
    const mtime = date.getMinutes();
    const stime = date.getSeconds();
    
    
    const hrotation = htime * 30 +mtime/60;
    const mroatation = mtime * 6;
    const srotation = stime*6;
    // console.log(hrotation,mroatation,srotation);

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mroatation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

},1000)