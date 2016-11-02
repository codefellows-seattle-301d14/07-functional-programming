articleView.renderAdminPage = function() {
  var statsRender = Handlebars.compile($('#stats-template').html());
  $('#blog-stats .articles').text(Article.allArticles.length);

  /* DONE: uncomment when complete:*/
  $('#blog-stats .words').text(Article.numWordsAll());

  /* DONE: uncomment when ready to test:*/
  Article.numWordsByAuthor().forEach(function(numWordsObj) {
    $('.author-stats').append(statsRender(numWordsObj));
  });

};

Article.fetchAll(articleView.renderAdminPage);
