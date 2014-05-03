// $(function() {

// 	$('div').click(function() {
// 		console.log('yo! click that div');
// 		$('body').append('<div>this div was created by js</div>');
// 	});

// });



// $(function() {

// 	$('div').on('click', function() {
// 		$('body').append('<div>this div was created by js</div>');
// 	});

// });



// $(function() {

// 	$('body').on('click', 'div', function() {
// 		$('body').append('<div>this div was created by js</div>');
// 	});

// });



$(function() {

	var cart = {
		'fish': 0,
		'cow': 0
	}

	$('.products button').on('click', function() {
		var parentListItem = $(this).parent();
		var className = $(parentListItem).attr('class');
		cart[className]++;
		renderOutput(className);
	});

	var renderOutput = function(className) {
		


		if (!$('.cart .' + className).length) {
			$('.cart').append('<li class="' + className + '">' + className + ' ' + cart[className] + '</li>');
		} else {
			// select the thing you want to change
			// replace the label with the label again, but the new value
		}

	}

});


