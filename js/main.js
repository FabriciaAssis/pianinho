var tecla = document.querySelectorAll('.tc');
var somNota = document.getElementById('somNota');

tecla.forEach((t)=>{ //aqui percorre indivudualmente cada tecla
    t.addEventListener('click', ()=>{
        somNota.src = 'sons/'+ t.id +'.mp3';
        somNota.currentTime = 0; //com isso da pra fazer o som de duas teclas tocarem sem cortar o som da primeira
        somNota.onplay();
        console.log(t.id);
    }); //add um escutador de evento pra tecla t
});