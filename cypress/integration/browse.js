describe('browse', () => {
  it('filtering articles works', () => {
    cy.visit('/articles');
    cy.contains(/articles on developer experience/i);
    cy.get('input').type('dummy')
    cy.get('[data-test-id=articlePreview]').each((item) => {
      cy.wrap(item).contains(/dummy/i)
    });
  });

  it('articles pagination works', () => {
    cy.visit('/articles');
    cy.contains(/articles on developer experience/i);
    // Max 9 items on a page
    cy.get('[data-test-id=articlePreview]').should('have.length', 9)
    // Go to second page
    cy.get('[data-test-id=nextPageButton]').click()
    cy.get('[data-test-id=articlePreview]').should('not.have.length', 9)

  });
});
