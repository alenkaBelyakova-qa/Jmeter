describe('Тестирование для формы и логина qa studio', function () {
   it('Проверка, логики восстановления пароля:', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#forgotEmailButton").click() ; 
        cy.get('#mailForgot').type('alenkabelyakova@mail.ru');
        cy.get('#restoreEmailButton').click() ; 
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click() ;

    })
})


