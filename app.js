$(Document).ready(function() {
  $(".pic1").mouseenter(function() {
    $(".txt1").show(2000);
  });
  $(".pic1").mouseleave(function() {
    $(".txt1").hide(1000);
  });

  $(".pic2").mouseenter(function() {
    $(".txt2").show(2000);
  });
  $(".pic2").mouseleave(function() {
    $(".txt2").hide(1000);
  });

  $(".pic3").mouseenter(function() {
    $(".txt3").show(2000);
  });

  $(".pic3").mouseleave(function() {
    $(".txt3").hide(1000);
  });

  $(".pic4").mouseenter(function() {
    $(".txt4").show(2000);
  });
  $(".pic4").mouseleave(function() {
    $(".txt4").hide(1000);
  });

  $(".pic5").mouseenter(function() {
    $(".txt5").show(2000);
  });
  $(".pic5").mouseleave(function() {
    $(".txt5").hide(1000);
  });

  $(".pic6").mouseenter(function() {
    $(".txt6").show(2000);
  });
  $(".pic6").mouseleave(function() {
    $(".txt6").hide(1000);
  });

  $(".pic7").mouseenter(function() {
    $(".txt7").show(2000);
  });
  $(".pic7").mouseleave(function() {
    $(".txt7").hide(1000);
  });
  $(".pic8").mouseenter(function() {
    $(".txt8").show(2000);
  });
  $(".pic8").mouseleave(function() {
    $(".txt8").hide(1000);
  });

  $(".pic9").mouseleave(function() {
    $(".txt9").hide(1000);
  });

  $(".pic9").mouseleave(function() {
    $(".txt9").hide(1000);
  });
});

//BEGIN Booking form (Bior)
$("input[name='delivery']").on("click", function() {
  $(".deladdress").toggle(this.value == "50" && this.checked);
});

var price = function(time) {
  return time;
};

var amount = function checkTotal() {
  document.orderform.total.value = "";
  var sum = 0;
  for (i = 0; i < document.orderform.time.length; i++) {
    if (document.orderform.time[i].checked) {
      sum = sum + parseInt(document.orderform.time[i].value);
    }
  }
  document.orderform.total.value = sum;
};

function totalprice(form) {
  var fname = document.forms["orderform"]["fname"].value;
  if (fname == "") {
    alert("First Name must be filled out");
    return false;
  }
  var lname = document.forms["orderform"]["lname"].value;
  if (lname == "") {
    alert("Last Name must be filled out");
    return false;
  }

  var time = parseInt(document.getElementById("total").value);
  if (time == "") {
    alert("You must tick the time");
    return false;
  }
  var mailsend = document.getElementById("formEmail").value;
  var nme = document.getElementById("frstn").value;
  var result = price(time);
  alert(
    `Thank you  for ${nme} booking with us, your ticket will be send to you through ${mailsend} once you make payment of Ksh ${result}`
  );

  var fullName = fname + " " + lname;
  document.getElementById("custname").innerHTML = "Name: " + fullName;
  document.getElementById("output").innerHTML = "Amount = " + result + " Ksh";

  $("body, html").animate(
    {
      scrollBottom: $("#summary").offset().bottom
    },
    1000
  );
}

//END Booking form (Bior)
