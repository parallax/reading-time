$(document).ready(function(){
	
	var text = $('.entry-content').text();
	var words = text.split(' ').length;
	
	var wpm = 200;
	var time = (words / wpm) * 60;
	
	var imageDataUri = 'data:image/png;base64,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';
	
	
	var content = '<span style="padding-left: 16px; background-image: url(' + imageDataUri + '); background-repeat: no-repeat;">' + formatTime(time) + '</span>';
	
	if($('#article-timestamp').length == 0) {
		console.log('Hidden');
		$('#rdb-article-meta').append('<time id="article-timestamp">' + content + '</time>');
		
	} else {
		$('#article-timestamp').html($('#article-timestamp').html() + content);
		
	}
	
	
})


function formatTime(time) {
	var minutes = Math.floor(time / 60);
	var seconds = Math.floor(time - minutes * 60);
	
	
	return minutes + ' mins ' + seconds + ' secs';
}