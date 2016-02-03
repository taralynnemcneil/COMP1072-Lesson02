"use strict";

(function () {

    var myFunction = function () {
        var myNameString = "Anju";
        var myAge = 32;
        var myAgeString = "32";

        console.log(myNameString + "'s App started...");
        console.log(myNameString + " is " + myAge);

        if (myAge >= 40) {
            console.log("You are old and wise!");
        }
        else {
            console.log("You are young and strong");
        }

        if (myNameString === "Tom") {
            console.log("Hello Tom");
        } else if (myNameString === "Anju") {
            console.log("Hello Anju!");
        }
        else {
            console.log("Hello Stranger!");
        }
    }

    myFunction();

})();










