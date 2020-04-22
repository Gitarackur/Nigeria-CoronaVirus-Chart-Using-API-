let url = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/173";
fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then(data => data.json())
	.then(data => {
		
		const Latest= data.location.latest;
		console.log(data);
		CoronaChart(Latest.confirmed, Latest.deaths);
		document.querySelector(".C-A").innerHTML= Latest.confirmed;
		document.querySelector(".Dths").innerHTML= Latest.deaths;
	})
	.catch(err => {
		console.error(err);
	});





// THE GRAPH CANVAS FIELD FOR THE Doughnut CHART

const canvas = document.getElementById('Chart');
const ctx= canvas.getContext('2d');
canvas.style.display="block";






CoronaChart= (confirmed, deaths)=>{

	
	
	var myChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
    labels: ['CONFIRMED', 'DEATHS'],
    datasets: [{
      label: 'CORONA VIRUS PANDEMIC STATISTICS NIGERIA',
      data: [confirmed, deaths],
      backgroundColor: [
		'rgba(255, 255, 0, 0.5)',
		'rgba(255, 0, 0, 0.5)'
      ],
      borderColor: [
        'rgba(255,255,255,1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
	// maintainAspectRatio: true,
  }

});
    
}
