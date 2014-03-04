$(document).ready(function() {

	var	$form = $("#addform"),
		$list = $("#itemlist"),
		$add = $("#add-item"),
		$edit = $("#edit-item"),
		$remove = $("#remove-item"),
		$item = $("#new-item"),
		$checked = $("input:checked"),
		$error = $("#error");

	$form.on("submit", function(e){
		e.preventDefault();
		
		var itemName = $.trim($item.val());
		var itemNameLowerCase = itemName.toLowerCase();
	
		if (itemName.length) {
			$list.append("<span class='item'><input type='checkbox' name='item' value='" + itemNameLowerCase + "' /><span>" + itemName + "</span></span>");
			$item.val("");
			$error.hide();
		}
		else {
			$error.show();
			$item.val("");
		}
	});
	
	$add.on("click", function(e){
			e.preventDefault();
			$form.submit();
		});
		
	$remove.on("click", function(e){
			e.preventDefault();
			$(".checked-item").each(function() {
				$(this).parent().remove();
			});
		});
		
	$edit.on("click", function(e){
			e.preventDefault();
			if ($(this).text() == "Edit") {
				$(this).text("Done");
				$(".item").each(function() {
					$(this).removeClass("item").addClass("item-editing");
					var itemtext = $(this).find("span").text();
					$(this).find("span").hide();
					$(this).append('<input type="text" class="newitemtext" value="' + itemtext + '" required>');
				});
			}
			else {
				$(this).text("Edit");
				$(".item-editing").each(function() {
					$(this).removeClass("item-editing").addClass("item");
					var itemtext = $(this).find(".newitemtext").val();
						$(this).find(".newitemtext").remove();
						$(this).find("span").text(itemtext).show();
				});
			}
	});

	$("#itemlist").on("click", "input[type=checkbox]", function(e) {
		e.preventDefault();
		console.log(e);
	});

	$("#itemlist").on("click", ".item", function(e) {
		var input = $(this).find("input");
		if (input.is(":checked")) {
			input.prop("checked", false);
			console.log("test");
		} else {
			input.prop("checked", true);
		}
		$(this).find("span").toggleClass("checked-item");
		$edit.prop("disabled", true);										/* 	when item is checked, disable button
																				when no items are checked, enable button */
		});

})