describe('Rendering and navigation', () => {
  it('should navigate between pages without crashing', () => {
    cy.visit('http://localhost:3000');
    cy.findByText(/hello/i).should('exist');
    cy.findByText(/style guide/i).click();
    cy.findByText(/color palette/i).should('exist');
    cy.findByText(/home/i).click();
    cy.findByText(/hello/i).should('exist');
  });
});
