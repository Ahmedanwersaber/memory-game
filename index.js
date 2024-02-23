let imgs=[  
'./image/g1.jpeg',  
'./image/g2.jpg',  
 './image/g3.jpg', 
'./image/g4.jpg',  
'./image/g5.jpg', 
'./image/g6.jpg'];

let rightAudio= new Audio('./image/right.wav');
let wrongAudio= new Audio('./image/wrong.wav');
const canvas=document.querySelector('#confetti'); //animation
let arrimg = document.getElementById('main');
let allDiv=document.getElementsByTagName('div');
function drowImg(){
    for(let i=0; i<imgs.length; i++) {
        arrimg.innerHTML +='<div><img  src="'+imgs[i]+'"></div>'
     }
}
drowImg();
drowImg();

//function when i click into image the opacity =1
var flg=true;
var arr=[];
for(let i=0;i<allDiv.length;i++){
    allDiv[i].addEventListener('click',function(){
        if(flg){
            this.firstChild.style.opacity='1';
            if(arr.length==0){
                arr[0]=this;
            }else if(arr.length==1){
            arr[1]=this;
            }
            if(arr.length==2){
                flg=false;
                setTimeout(checkImg,300);
              
            }
        }else{
            
            return;
                
            
        }
    })
    //check this imags == them or no
    function checkImg(){
        if(arr[0].firstChild.getAttribute('src') == arr[1].firstChild.getAttribute('src')){
            rightAudio.play();
            const jsConfetti = new JSConfetti(); 
            jsConfetti.addConfetti({
                emojis: ['✨', '⚡️', '💥', '✨', '💫', '✨'],
                
            
            }).then(() => jsConfetti.addConfetti());

        }else{
            arr[0].firstChild.style.opacity=0;
            arr[1].firstChild.style.opacity=0;
            wrongAudio.play();
        }
        arr=[];
        flg=true;
    }
}


