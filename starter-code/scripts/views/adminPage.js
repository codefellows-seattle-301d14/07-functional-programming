articleView.renderAdminPage = function() {
  var statsRender = Handlebars.compile($('#stats-template').html());
  $('#blog-stats .articles').text(Article.allArticles.length);


  $('#blog-stats .words').text(Article.numWordsAll());


  /* TODO: uncomment when ready to test:
  Article.numWordsByAuthor().forEach(function(numWordsObj) {
    $('.author-stats').append(statsRender(numWordsObj));
  });
  */

};

Article.fetchAll(articleView.renderAdminPage);
Article.numWordsAll();
