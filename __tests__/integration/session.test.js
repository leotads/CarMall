const { User } = require('../../src/app/models')

describe('Authentication', () => {
  /*it('should receive JWT token when authenticated with valid credentials', () => {
  
  });*/
  it('should sum two numbers', async () => {
    const user = await User.create({
      name: 'Leonardo Test',
      email: 'leonardo@test.com.br',
      password_hash: '123123'
    });

    console.log(user);

    expect(user.email).toBe('leonardo@test.com.br')
  });
})