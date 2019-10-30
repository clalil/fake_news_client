describe('User can view full article', () => {

  it('View available articles on landing page', () => {
    cy.server()
    cy.route({
      method: "GET",
      url: "http://localhost:3000/v1/articles",
      response: "fixture:list_articles.json"
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/v1/articles/1",
      response: "fixture:successfully_view_article.json"
    });
    cy.visit('http://localhost:3001')

    // cy.get('.list-top-articles')
    //   .within(() => {
    cy.get("#article_1")
      .within(() => {
        cy.get('#read-specific-article')
          .click()
      })
    // });
    cy.get('#single-article')
      .within(() => {
        cy.get('#article-title')
          .should('contain', 'Which drugs can kill you?')
        cy.get('#article-content')
          .should('contain', 'Researches have recently found out that...')
      })
  })
})