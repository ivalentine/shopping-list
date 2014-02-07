$(document).ready(function() {

	var	$form = $("#addform"),
		$list = $("#list"),
		$add = $("#add-item"),
		$item = $("#new-item");

	$form.on("submit", function(e){
		e.preventDefault();
		
		var itemName = $.trim($item.val());
		var itemNameLowerCase = itemName.toLowerCase();
	
		if (itemName.length) {
			$list.append("<input type='checkbox' name='item' value='" + itemNameLowerCase + "' />" + itemName + "<br />");
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

	$("input[type=checkbox]").on("click", function() {
		$(this).toggleClass("checked-item");
		});

	/*		
	$list.on('click', 'li', function(){
   		$(this).toggleClass('checked-item');
	});
	*/
})