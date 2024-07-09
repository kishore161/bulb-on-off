var bulb=0

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src = "bulb on.png"
        bulb=1;

    }
    else{
        document.getElementById("image").src = "bulb off.png"
        bulb=0;
    }

}
    