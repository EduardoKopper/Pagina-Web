document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');


    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, canvas.width, canvas.height);


    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = '#FF0000';
    context.fill();
});
