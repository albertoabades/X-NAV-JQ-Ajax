jQuery(document).ready(function() {
	var ajx = $.ajax({type: "GET",
					   url: "text",
					   cache: false
	})
	ajx.done(function(text){
		$("#texto1").html(text)
	});

	$("#link").click(function(){
		var ajx2 = $.ajax({type: "GET",
						   url: "text2",
						   cache: false
		})
		ajx2.done(function(text){
			$("#texto2").html(text)
		});
	});

});