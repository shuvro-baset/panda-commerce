console.log("Yes dom js connected");

// change all h1 tag color.
var h1Elements = document.getElementsByTagName("h1");
for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "lightblue ";
}
// change the background color of backpack id section 
document.getElementById('backpack').style.backgroundColor = 'tomato';

// change the radius of card class 
var cardClass = document.getElementsByClassName('card');
for (var i = 0; i < cardClass.length; i++) {
    cardClass[i].style.borderRadius = '30px';
}

// write a function that will console something when click a button. 
function clickConsole(){
    console.log('clicked');
}
//add a even handler when click a buy now button that will remove from the website
const items = document.getElementsByClassName('btn-danger');
    for (const item of items) {
        item.addEventListener('click', function (event) {
            event.target.parentNode.removeChild(event.target); // event.target is the actual item where i clicked;
        });
    }


// subscribe button disabled. when type email then enable it.
document.getElementById('subscribe-input').addEventListener('keyup', function (event) {
    const disableBtn = document.getElementById('btn-disable');
    if(event.target.value == 'email') {
        disableBtn.removeAttribute('disabled');
    }
    else {
        disableBtn.setAttribute('disabled', true);
    }
})

// change the image when mouseenter
document.getElementById('image-change').addEventListener('mouseenter', function(e) {
    e.target.src = 'images/bags/bag-1.png'
});

// on double click change tha background color
var subscribe = document.getElementById('subscribe')
subscribe.ondblclick=Background_change_color_dbl;
function Background_change_color_dbl ()
{subscribe.style.backgroundColor="lightgreen"}
