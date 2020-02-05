describe('User can view articles on landing page', () => {
  beforeEach(() => {
    cy.server()
    cy.visit('http://localhost:3001')
  })

  it('successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:articles.json'
    })

    cy.get('#article-1')
    .within(() => {
      cy.get('#title-1').should('contain', 'Leonardo da Vinci')
      cy.get('#content-1').should('contain', 'The Louvre museum in Paris,')
      cy.get('#author-1').should('contain', 'Lauren Lion')
      cy.get('#publish_date-1').should('contain', '20 October 2019')
    })
  })

  it('unsuccessfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:articles-error.json',
      status: 400
    })

    cy.get('#error').should('contain', 'There are no articles available')
  });
})
