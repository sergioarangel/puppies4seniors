


       function updateReason() {
            var idReason = document.getElementById("inputState");
            var idNameLabel = document.getElementById("idLabel");
            var idNameBox = document.getElementById("productID");
           
           var opts = idReason.options;
           var si = idReason.selectedIndex;
            var sel = opts[si];


            if (sel.index == 2) {
                idNameLabel.className = "visible"
                idNameBox.className = "textbox visible"
            } else {
                idNameLabel.className = "hidden"
                idNameBox.className = "textbox hidden"
            }
        }

           function isLetter (code) {
                if (code >= 65 && code <= 90) {
                    // Capital letter.
                    return true;
                } else if (code >= 97 && code <= 122) {
                    // Lowercase letter.
                    return true;
                } else {
                    return false;
                }
            }

          function checkName () {
                var inputBox = document.getElementById("name");
                var input = inputBox.value;
                
                var status = true;
                
                for (var i = 0; i < input.length; i++) {
                    var c = input.charCodeAt(i);
                    if (isLetter(c) == false) {
                        status = false;
                    }
                }
                
                if (status == true && input.length >= 4) {
                    // Valid name.
                    inputBox.style.borderColor = "green";
                } else {
                    // Invalid name.
                    inputBox.style.borderColor = "red";
                }
            }
            


/* function allLetter(inputtxt)
  {
   var nameBox = document.getElementById("name");
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
        letterBox.style.borderColor = "green";
     }
   else
     {
        letterBox.style.borderColor = "red";
     }
  */


        function isNumber (code) {
                if (code >= 48 && code <= 57) {
                    return true;
                } else {
                    return false;
                }
            }



    function checkPhone () {
        var phoneBox = document.getElementById("phone");
        var phone=phoneBox.value;
        var pattern= /^(\d){3}\s(\d){3}\s(\d){4}$/;
        
        if (pattern.test(phone)) {
            phoneBox.style.borderColor="green";
        }
        else{
            phoneBox.style.borderColor="red";
        }
    }


function checkProductID () {
    var productIDbox = document.getElementById("productID");
    var productID=productIDbox.value;
    if (productID == "BB00"||productID == ""||productID == "BB01"||productID == "TT00"||productID == "MB00"||productID == "BB02"||productID == "PP00") {
        productIDbox.style.borderColor="green";
        }
    else{
        productIDbox.style.borderColor="red";
        }
}

function checkMessage () {
    
        var messageBox = document.getElementById("message");
        var message = messageBox.value;

    if (message.length > 29 || message.length < 11) {
            messageBox.style.borderColor = "red";
    } else {
            messageBox.style.borderColor = "green";
}

}



        function scrollFunction () {
            var x = window.scrollY;
            var m = -0.5;
            var b = 0;
            var b2 = 1100;
            var b3 = 1800;
            var b4 = 2200;
            var b5 = 2700;
            var msg = document.getElementById("msg");



            var y = m*x+b;
            var y2 = m*x+b2;
            var y3 = m*x+b3;
            var y4 = m*x+b4;
            var y5 = m*x+b5;

            document.getElementById("para").style.backgroundPositionY = y + "px";
            document.getElementById("para2").style.backgroundPositionY = y2 + "px";
            document.getElementById("para3").style.backgroundPositionY = y3 + "px";
            document.getElementById("para4").style.backgroundPositionY = y4 + "px";
            document.getElementById("para5").style.backgroundPositionY = y5 + "px";

                if (x > 3200){
        msg.style.marginLeft = "350px";
}
        }





			function scrollFunction() {
				var scroll = window.scrollY;
				
				var msg = document.getElementById("message");
				var newimg = document.getElementById("newimg");

				if (scroll > 2700) {
					msg.style.transform = "scale(1.5, 1.5)";
				}
				if (scroll > 3000) {
					newimg.style.opacity = "1";
				}
			}
