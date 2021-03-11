let screen=document.getElementById("screen");
let screenvalue='';
buttons=document.querySelectorAll("button");

for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        console.log('the button is',buttontext);

        if(buttontext=='X')
        {
            buttontext='*';
            screenvalue+=buttontext
            screen.value=screenvalue;

        }
        else if(buttontext=='C')
        {
            screenvalue='';
            screen.value=screenvalue;
        }
        else if(buttontext=="=")
        {
            screen.value=eval(screenvalue);
        }
        else if(buttontext=="ESC")
        {
            screenvalue=screenvalue.substr(0,(screenvalue.length)-1);
            screen.value=screenvalue;
        }
        else
        {
            screenvalue+=buttontext
            screen.value=screenvalue;
        }
    })
}