describe('browse', () => {
  it('filtering articles works', () => {
    cy.visit('/articles');
    cy.contains(/articles on developer experience/i);
    cy.get('input').type('dummy')
    cy.get('[data-cy=articlePreview]').each((item) => {
      cy.wrap(item).contains(/dummy/i)
    });
  });

  it('articles pagination works', () => {
    cy.visit('/articles');
    cy.contains(/articles on developer experience/i);
    // Max 9 items on a page
    cy.get('[data-cy=articlePreview]').should('have.length', 9)
    // Go to second page
    cy.get('[data-cy=nextPageButton]').click()
    cy.get('[data-cy=articlePreview]').should('not.have.length', 9)

  });
});
