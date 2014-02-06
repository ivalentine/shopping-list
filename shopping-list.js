$(document).ready(function() {

	var	$form = $("#addform"),
		$list = $("#list"),
		$add = $("#add-item"),
		$item = $("#new-item");

	$form.on("submit", function(e){
		e.preventDefault();
		
		var itemName = $.trim($item.val());
	
		if (itemName.length) {
			$list.append("<li>" + itemName + "</li>");
			$item.val("");
		}
		else {
			console.log("Please enter a valid item name.");
			$item.val("");
		}
	});
	
	$add.on('click', function(e){
			e.preventDefault();
			/*
			var itemName = $.trim($item.val());
	
			if (itemName.length) {
				$list.append("<li>" + itemName + "</li>");
				$item.val("");
			}
			else {
				console.log("Please enter a valid item name.");
				$item.val("");
			}
			*/
			$form.submit();
		});
		
	$list.on('click', 'li', function(){
   		$(this).toggleClass('checked-item');
	});
	
	/* Put some JavaScript here! */

	/* check for length > 0 -- not empty 

	jQuery - trim

	*/

})