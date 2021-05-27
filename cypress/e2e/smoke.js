describe('Site', () => {
  it('Runs', () => {
    cy.visit('/');
    cy.findByText(/hello world/i);
    cy.should('exist');
  });
});
