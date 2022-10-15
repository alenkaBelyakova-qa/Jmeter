describe('Тестирование для формы и логина qa studio', function () {
   it('Негативный кейс авторизации:', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type(' iLoveqastudio22');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click() ;


    })
})