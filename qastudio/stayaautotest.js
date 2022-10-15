describe('Тестирование для формы и логина staya', function () {
   it('Позитивный кейс при авторизации и после входа на странице есть Мои заказы:', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('alenkabelyakova@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('iLoveqastudio1');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
    })
})

