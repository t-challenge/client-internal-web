package ru.tchallenge.client.internal.web.sandbox.authentication;

import ru.tchallenge.client.internal.web.sandbox.account.AccountInfo;
import ru.tchallenge.client.internal.web.sandbox.token.TokenInfo;

public class AuthenticationInfo {

    private AccountInfo account;
    private TokenInfo token;

    public AccountInfo getAccount() {
        return account;
    }

    public void setAccount(AccountInfo account) {
        this.account = account;
    }

    public TokenInfo getToken() {
        return token;
    }

    public void setToken(TokenInfo token) {
        this.token = token;
    }
}
