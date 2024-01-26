describe('API Reqres', () => {

  function randomName(){
      const randomString = Math.random().toString(36).substring(2, 10)
      const name = "User" + randomString
      return name
  }

  function randomEmail(){
      const randomString = Math.random().toString(36).substring(2, 10)
      const email = randomString+"@gmail.com"
      return email
  }

  let username = randomName()
  let useremail = randomEmail()
  let bodyData = {
      "name": useremail,
      "job":"QA"
  }
  it('Get List Users', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
  it('Create Users', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: bodyData
      }).then((response) => {
        expect(response.status).to.equal(201)
        cy.log(bodyData)
      })
    })
   
})


  
  