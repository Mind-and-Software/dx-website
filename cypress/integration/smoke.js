describe('Site', () => {
  it('Runs', () => {
    cy.visit('/');
    cy.findAllByText(/developer/i);
    cy.should('exist');
  });
});
