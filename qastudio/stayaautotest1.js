describe('Ввод некорректного пароля staya', function () {
    it('Проверка, некорректного логина', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('alenkabelyakova8@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('iLoveqastudio1');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})
