var quote = $('#quoteText');
var author = $('#quoteAuthor');
var tweet = "";

/* ==== randon quotes ====*/
$('.quote-btn').click(function(event){
    event.preventDefault();
    getQuote(quote, author);
    //getQuote function
    function getQuote(quote, author) {
      var api = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
      // get JSON from API
      $.getJSON(api, function(data){
        var tweet = 'https://twitter.com/intent/tweet?text=' + data.quoteText + '- ' + data.quoteAuthor + ' @uluawebdev';
        quote.html(data.quoteText);
      
        if(data.quoteAuthor) {
          author.html(data.quoteAuthor);
        }
        else {
          author.html("<p>Anonymous</p>");
        }
        $(".twitter-share-button").attr("href", tweet);
      });// End getJSON
    }// End getQuote function
}); /* ==== End randon quotes ====*/




