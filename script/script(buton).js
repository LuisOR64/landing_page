window.onload = function(){
    var buton = document.getElementById('buton');
    var section3 = document.getElementById('section3');
    buton.style.transition = '0.2s';
    section3.style.transition = '0.2s';
    // section3.setAttribute('display', 'none');
    section3.style.display = 'none';

    buton.onclick = function(event){
        // event.preventDefault();

        if(section3.style.display=='flex'){
            // section3.removeAttribute('display');
            // section3.setAttribute('display', 'block');
            section3.style.display = 'none';
            console.log('kimi1');
        }else{
            section3.style.display = 'flex';
            console.log('kimi2');
        }

        console.log(section3.style.display);
    }
    
}