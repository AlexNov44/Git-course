<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Пряничная мастерская сайт находится в разработке</title>
	<link  href="<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700;900&display=swap" rel="stylesheet">">
	<style type="text/css">
	html, body {height: 80%;
		font-family: Roboto;
	}	
	h2 { 
		color: royalblue;}
	h3 { 
		color: green;
 	}
 	body {
 		display: flex;
 		flex-direction: column;
 		align-items: center;
 		justify-content: center;
 	}
 </style>
 
<script>
// Set the date we're counting down to
var countDownDate = new Date("Oct 29, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + " дней " + hours + " часов "
  + minutes + " минут " + seconds + " секунд ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
</script>
</head>
console.log ('test 2!!!!!!!!!!!!!!!!!!!!!!')
<body>
    <h1>Пряничная мастерская</h1>
    <h2>Сайт будет доступен через <span id="countdown"></span></h2>
    <h3>Вы можете связаться с нами:</h3>
    <div>Телефон +7 953 655 59 35 </div>
    <div>В контакте: <a href="https://vk.com/pryaniki44" target="_blank">@Лапка</div>
</body>
</html>

