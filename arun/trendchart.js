		
			$(document).ready(function(){
			
				$("#tip0").hide();
				
				$("#tip1").hide();
				
				$("#tip2").hide();
				
				$("#tip3").hide();
				
				$("#tip4").hide();
				
				$("#zero").hover(function(){
				
					$(this).css("cursor","pointer");
				
					$("#tip0").show();
				
				});
				
				$("#zero").mouseout(function(){
				
					$("#tip0").hide();
				
				});
				$("#first").hover(function(){
				
					$(this).css("cursor","pointer");
				
					$("#tip1").show();
				
				});
				
				$("#first").mouseout(function(){
				
					$("#tip1").hide();
				
				});
				
				$("#second").hover(function(){
				
					$(this).css("cursor","pointer");
				
					$("#tip2").show();
				
				});
				
				$("#second").mouseout(function(){
				
					$("#tip2").hide();
				
				});
				
				$("#third").hover(function(){
				
					$(this).css("cursor","pointer");
				
					$("#tip3").show();
				
				});
				
				$("#third").mouseout(function(){
				
					$("#tip3").hide();
				
				});
				
				$("#fourth").hover(function(){
				
					$(this).css("cursor","pointer");
				
					$("#tip4").show();
				
				});
				
				$("#fourth").mouseout(function(){
				
					$("#tip4").hide();
				
				});
			
			});
		