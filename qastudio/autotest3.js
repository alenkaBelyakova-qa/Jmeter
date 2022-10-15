describe('Тестирование для формы и логина qa studio', function () {
   it('Важно: у поля пароль есть требования к валидации:', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type(' iLov2');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click() ;


    })
})