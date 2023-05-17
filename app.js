window.addEventListener('scroll', () =>{
    const scrolled = window.scrollY
    console.log(scrolled)
    if(scrolled > 280){
        document.getElementById('homevid').style.opacity = 1 - (scrolled-280)*0.007
        document.getElementsByTagName('h1')[0].style.opacity = 1 - (scrolled-280)*0.01;
    }
    if( scrolled > 740){
        console.log(scrolled);
        if(scrolled < 1154){
            document.getElementsByTagName('h1')[1].style.opacity = (scrolled-740)*0.25 + '%';
        }
        if( document.getElementsByTagName('h1')[1].style.top >= '30%'){
            document.getElementsByTagName('h1')[1].style.top = (35 - (scrolled-740)) + '%';
        }
        if( scrolled > 1154){
            document.getElementsByTagName('h1')[1].style.left = -(scrolled - 1154 + 40)*0.1 + '%';
            document.getElementsByTagName('h1')[1].style.position = 'fixed';
            document.getElementsByTagName('h1')[1].style.top = -(scrolled - 1200)*0.13 + '%';
            document.getElementsByTagName('h1')[1].style.right = '40px';
            document.getElementsByTagName('h1')[1].style.opacity = 1 - (scrolled - 1154)/200;
            document.getElementsByTagName('h1')[1].style.letterSpacing = (scrolled - 1154)*0.3 + 'px';
        }
        else{
            document.getElementsByTagName('h1')[1].style.position = 'relative';
            document.getElementsByTagName('h1')[1].style.top = '35%';
            document.getElementsByTagName('h1')[1].style.right = '40px';
        }

    }
    else{
        document.getElementsByTagName('h1')[1].style.opacity = '0%';
    }
    if(scrolled>1435){
        document.getElementById('abouttext').style.opacity = (scrolled - 1435)*0.005;
        document.getElementById('scroll2').style.opacity = 1 - (scrolled - 1435)*0.01;
        document.getElementById('scroll2').style.animation = 'none';
        document.getElementById('scroll1').style.opacity = 1 - (scrolled - 1435)*0.01;
        document.getElementById('scroll1').style.animation = 'none';
    }
    else{
        document.getElementById('abouttext').style.opacity = 0;
        document.getElementById('scroll2').style.animation = 'fadeinout 1.8s infinite';
        document.getElementById('scroll1').style.animation = 'fadeinout 1.8s infinite';
    }

    if(scrolled>1678){
        document.getElementById('right2').style.opacity = (scrolled - 1678)*0.03;
        document.getElementById('right1').style.opacity = (scrolled - 1678)*0.03;
        document.getElementById('left1').style.opacity = (scrolled - 1678)*0.03;
        document.getElementById('left2').style.opacity = (scrolled - 1678)*0.03;
        document.getElementById('right2').style.top = (277 - (scrolled - 1678)*0.4) + 'vh';
        document.getElementById('right1').style.top = (277 - (scrolled - 1678)*0.4) + 'vh';
        document.getElementById('left1').style.top = (277 - (scrolled - 1678)*0.4) + 'vh';
        document.getElementById('left2').style.top = (277 - (scrolled - 1678)*0.4) + 'vh';
    }
    else{
        document.getElementById('right2').style.opacity = 0;
        document.getElementById('right1').style.opacity = 0;
        document.getElementById('left1').style.opacity = 0;
        document.getElementById('left2').style.opacity = 0;
    }
    if(scrolled>1738){
        document.getElementById('right2').style.top = '247.7vh';
        document.getElementById('right1').style.top = '247.7vh';
        document.getElementById('left1').style.top = '247.7vh';
        document.getElementById('left2').style.top = '247.7vh';
    }

    if(scrolled>1796){
        document.getElementById('right2').style.position = 'fixed';
        document.getElementById('right2').style.top = '-3.8vh';
        document.getElementById('left2').style.position = 'fixed';
        document.getElementById('left2').style.top = '-3.8vh';
        document.getElementById('left1').style.position = 'fixed';
        document.getElementById('left1').style.top = '-3.8vh';
        document.getElementById('right1').style.position = 'fixed';
        document.getElementById('right1').style.top = '-3.8vh';
        document.getElementById('avatar').style.position = 'fixed'; 
        document.getElementById('avatar').style.height = '150vh'; 
        document.getElementById('avatar').style.top = '-28vh';
        document.getElementById('avatar').style.left = '55%';
    }
    else{
        document.getElementById('avatar').style.left = '57.8%';  
        document.getElementById('avatar').style.top = '0vh'; 
        document.getElementById('avatar').style.position = 'absolute'; 
        document.getElementById('right2').style.position = 'absolute';
        document.getElementById('left2').style.position = 'absolute';
        document.getElementById('left1').style.position = 'absolute';
        document.getElementById('right1').style.position = 'absolute';
    }
    if(scrolled>2100){
        document.getElementById('left1').style.opacity = (1 - (scrolled-2100)*0.01);
        document.getElementById('left2').style.opacity = (1 - (scrolled-2100)*0.01);
        document.getElementById('right1').style.opacity = (1 - (scrolled-2100)*0.01);
        document.getElementById('right2').style.opacity = (1 - (scrolled-2100)*0.01);
        document.getElementById('avatar').style.opacity = (1 - (scrolled-2100)*0.004); 
        document.getElementById('left1').style.left = -((scrolled-2100)*0.1) + 'vh'; 
        document.getElementById('left2').style.left = -((scrolled-2100)*0.1) + 'vh';  
        document.getElementById('right1').style.left = ((scrolled-2100)*0.1) + 'vh';  
        document.getElementById('right2').style.left = ((scrolled-2100)*0.1) + 'vh';  
    }

    if(scrolled>2399){
        document.getElementById('projects').style.position = 'fixed';
        document.getElementById('projects').style.top = 0;
        document.getElementById('projects').style.opacity = (scrolled-2399)*0.01;
    }
    else{
        document.getElementById('projects').style.opacity = 0;
        document.getElementById('projects').style.position = 'absolute';
        document.getElementById('projects').style.top = '336vh';
    }

    if(scrolled>2626){
        console.log('opacity:' + (1-(scrolled-2626)*0.001));
        document.getElementsByTagName('h2')[0].style.opacity = (scrolled-2626)*0.005;
        document.getElementsByTagName('h2')[0].style.left = (scrolled-2626)*0.01 + 'vh';
    }else{
        document.getElementsByTagName('h2')[0].style.opacity = '0';
    }
    if(scrolled>3000){
        document.getElementsByTagName('h2')[0].style.opacity = 1 - (scrolled-3000)*0.005;
        document.getElementsByTagName('h2')[0].style.right = (scrolled-3050)*0.1  + 'vh';
    }
})