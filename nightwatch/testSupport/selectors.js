module.exports = {
    User:{
        loginScreen:{
            emailField:'input[id=email]',
            passwordField:'input[id=pass]',
            signInButton:'button[type=button]',
            createAccount:'a[id=signButton]',
        },
        createAccountScreen:{
            yesButton:{
                tag: 'button',
                text: 'Yes'
            },
            codeButton:{
                tag: 'button[class=button signup-button]',
                text: 'No, but I have a code',
            },
            workEmailScreen:{
                email:'input[id=sign_email]',
                nextButton:'div[id=backArrowRight]'
            },
            nameScreen:{
                firstNameLine:'input[id=first_name]',
                lastNameLine:'input[id=last_name]',
                passwordLine:'input[id=sign_pass]',
                nextButton:'div[id=backArrowRight]'
            },
            zipCodeScreen:{
                zipCode:'input[id=zip]',
                getPerks:'button[id=account-create]'
            },
        },
    },
}
