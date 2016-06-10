(function($){

	$.fn.PidgeTab=function(options){

		var Data=$.extend({

			columns:null,
			
			dataSet:null,
			
			tableStyle:null,
			
			bgColor:null,
			
			textColor:"white"

		},options);
		
		
		var content="<div class='table-responsive' ng-init=person="+Data.dataSet+">";
		
		content+="<div class='pull-right'><input class='form-control' data-toggle='tooltip' data-trigger='hover' title='Enter the data to be searched' data-placement='right' data-container='body' style='opacity:0.5;width:150px;' id='searchInput' placeholder='search'></div>";
		
		content+="<table id='searchTable' cellspacing='0' cellpadding='0' class='table sortable "+Data.tableStyle+"' style='background-image:linear-gradient(rgba("+Data.bgColor+",0.5)0%,rgba("+Data.bgColor+",0.5)100%);'>";
		
		content+="<thead style='color:"+Data.textColor+";'>";
		
		content+="<tr>";
		
		var headers= eval("(" + Data.columns + ")");
		
		for(var i=0;i<headers.length;i++)
		{
		
			content+="<th>"+headers[i]+"</th>";
			
		}
		
		content+="</tr>";
		
		content+="</thead>";
		
		content+="<tbody style='color:"+Data.textColor+";'>";
		
		var rows= eval("(" + Data.dataSet + ")");
			
			for(var i=0;i<rows.length;i++)
			{
				
				content+="<tr>";
				
				for(var j=0;j<rows[i].length;j++)
				{
				
					if(j==0 && i==0)
					{
					content+="<td data-toggle='tooltip' data-title='<table><tbody><tr><td>a34d</td></tr></tbody></table>' data-trigger='hover' data-html='true' data-container='body'>"+rows[i][j]+"</td>";
					}
					else{
					content+="<td>"+rows[i][j]+"</td>";
					}
				
				}
				
				content+="</tr>";
			
			} 
			
		content+="</tbody>";
		
		content+="</table>";
		
		content+="</div>";
		
		this.append(content);
		
		$("#searchInput").keyup(function() {
		
			 $("#searchTable tbody tr").each(function (i) {

				var rowContent = $(this).text().replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "");

				var searchFor = $("#searchInput").val();

				if (rowContent.toLowerCase().indexOf(searchFor.toLowerCase()) == -1) {
				
					$(this).hide();
					
				} 
				
				else {
				
					$(this).show();
					
				}


			});

		});
		
		$("#searchInput").focus(function(){
		
			$(this).css("opacity","1");
			
		});
		
		$("#searchInput").blur(function(){
		
			$(this).css("opacity",".5");
		
		});
		
		$("[data-toggle='tooltip']").tooltip('show');
		
		return this;
		
	}
	
}(jQuery));

