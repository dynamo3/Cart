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



$(function() {

	$('body').on('click', 'div', function() {
		$('body').append('<div>this div was created by js</div>');
	});

});

