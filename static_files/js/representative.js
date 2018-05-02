$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	//const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bebd5673446e40c0a0613cd3ea327a8d";
	const $articles = $('#articles');

	$('#refreshFeed').click(function(e) {
		e.preventDefault();
		console.log('button clicked');

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		  'api-key': "bebd5673446e40c0a0613cd3ea327a8d",
		  'q': "edwin, Lee, ed"
		});
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			success: function(articles) {
				$.each(articles.response.docs, function(i, article){
					$articles.append(`<li><b>NY Times: <b>${articles.response.docs[i].headline.main}</b></li>`);
					console.log(articles.response.docs[i]);
				});
			}
		});
		/*
		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4ee54ee8064c4fc4af6a51b03fe81d17',
			dataType: 'json',
			success: function(articles) {
				$.each(articles.articles, function(i, article){
					$articles.append(`<li><b>News API: ${articles.articles[i].title} </b>, image: <img id='articleImg' src='${articles.articles[i].urlToImage}'</li>`);
					console.log(articles.articles[i]);
				});
			}
		});
		*/
	});
	console.log('test');
	//$('.clickMe').click(gotData);

  $('#chatsend').find('.send').click(sendText);
  $("#chatbox").on('keydown', function(e){
    if(e.keyCode === 13)
      sendText(e);
  });
};


function sendText(e){
  e.stopImmediatePropagation();
  e.preventDefault();

  console.log(this);

  var text = document.getElementById('chatbox').value;
  if(text !== ''){
    var chatCont = document.createElement('div');
    var chat = document.createElement('div');
    var blank = document.createElement('div');
    chat.innerHTML = text;
    chat.className = 'chatText';
    chatCont.appendChild(chat);
    chatCont.className = 'textContainer';
    blank.className = 'blank';
    var container = document.getElementById('chatContainer');
    container.appendChild(chatCont);
    container.appendChild(blank);
    document.getElementById('chatbox').value = '';
  }
}





















