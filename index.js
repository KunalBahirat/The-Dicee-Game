
    var num1=Math.floor((Math.random() *6)+1);
    var num2=Math.floor((Math.random() *6)+1);
    var img1="images/dice"+num1+".png";
    var img2="images/dice"+num2+".png";
    document.querySelector("#k1").setAttribute("src",img1);
    document.querySelector("#k2").setAttribute("src",img2);
    if(num1>num2){
        document.querySelector("#text1").textContent="🚩Player 1 Wins!"
    }
    else if(num1<num2){
        document.querySelector("#text1").textContent="Player 2 Wins!🚩"
    }
    else{
        document.querySelector("#text1").textContent="Draw!"
    }


