describe('login test spec', () => {
  it('login/out test', () => {
    cy.visit('https://pre-booking-test.lentongrp.com/')
    cy.get('input[name="username"]').type('itagenttest')
    cy.get('input[name="password"]').type('123qwe')
    cy.get('button[class="el-button el-button--primary el-button--default login-btn"]').click()
    cy.wait(1000)
  })
})