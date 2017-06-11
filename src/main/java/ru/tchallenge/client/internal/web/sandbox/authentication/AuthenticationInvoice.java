package ru.tchallenge.client.internal.web.sandbox.authentication;

public class AuthenticationInvoice {

    private String login;
    private String secret;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }
}
