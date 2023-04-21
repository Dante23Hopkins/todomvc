describe('Example test suite', () => {
    it('passes the first test', () => {
      expect(true).to.equal(true);
    });
  
    it('passes the second test', () => {
      expect(2 + 2).to.equal(4);
    });
  
    it('passes the third test', () => {
      const array = [1, 2, 3];
      expect(array).to.have.lengthOf(3);
    });
  
    it('passes the fourth test', () => {
      const obj = { foo: 'bar' };
      expect(obj).to.have.property('foo').and.equal('bar');
    });
  });
//   Save the file and close it.
//   Open the Cypress Test Runner by running the following command in the terminal: npx cypress open
//   In the Test Runner, click on "example.spec.js" to run the tests.
//   Verify that all four tests pass.
//   That's it! You've successfully created a new file and wrote four passing tests for your Cypress application.
  
  
  
  
  
  
  