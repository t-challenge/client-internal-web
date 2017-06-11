package ru.tchallenge.client.internal.web.sandbox.authentication;

import ru.tchallenge.client.internal.web.sandbox.account.AccountInfo;

public class AuthenticationInfo {

    private AccountInfo account;
    private String token;

    public AccountInfo getAccount() {
        return account;
    }

    public void setAccount(AccountInfo account) {
        this.account = account;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
