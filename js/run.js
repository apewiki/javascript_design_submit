var run = function(){
	var randomeValue = Math.floor((1 + Math.random()) * 0x10000);
	Offline.options = {
	    checks: {
	    	image: {
	    		url: 'https://developers.google.com/_static/images/v2/startups.png' + '?rand=' + randomeValue
	    	},
	    	active: 'image'
		},
	    chekOnLoad: true,
	    interceptRequest: true,
	    reconnect: true,
	    requests: true,
	    game: false
	};
	if (Offline.state === 'up')
	{
		$('#mapErr').html('');
		$('mapErrDetails').html('');
		Offline.check();
	}
};

setInterval(run, 5000);