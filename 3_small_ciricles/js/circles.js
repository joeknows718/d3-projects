

var svg = d3.select("svg");

var circle = svg.selectAll("circle");

//circle.style("fill", "steelblue");
//circle.attr("r", 30)
//circle.data([32, 57, 112]);
//circle.attr("r", function(d) { 
	//return Math.sqrt(d); 
//});

//circle.attr("cx", function(d, i) { return i * 100 + 30 });


circle.data([32, 57, 293], function(d) {return d;})
		.style("fill", "steelblue")
	.enter().append("circle")
		.attr("cy", 60)
		.attr("cx", function(d, i) { 
			return i * 100 + 30 
		})
		.attr("r", function(d) { return Math.sqrt(d); })
		.style("fill", "steelblue");
