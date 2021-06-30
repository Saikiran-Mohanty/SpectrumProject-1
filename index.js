// alert('java script attached succesfully');
function hideDiv(){
    document.getElementById("banner").style.opacity=0;
}
setTimeout("hideDiv()",11000);

// ___________Mouse-Tracker_______________________
document.querySelector("html").addEventListener("mousemove" , eyeball);
function eyeball(){
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        // var event = Event;
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 0;
        eye.style.transform = "rotate("+ rot +"deg)"

    });
}