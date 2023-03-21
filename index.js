function scuberGreetingForFeet(ride){
if (ride <= 400){
    return 'This one is on me!';
    }if (ride > 2000 && ride < 2500){
    return 'I will gladly take your thirty bucks.';
    }else if(ride > 2500){
        return 'No can do.';
    }
    }

    function ternaryCheckCity(city) {
    let response = city === "NYC"? 'Ok, sounds good.': 'No go.';
    return response;
    }
    
function switchOnCharmFromTip(Tip){
  switch(Tip){
    case "generous":
        return "Thank you so much.";
    case "not as generous":
        return "Thank you.";
    default: 
        return "Bye.";
  }
}

    
        

