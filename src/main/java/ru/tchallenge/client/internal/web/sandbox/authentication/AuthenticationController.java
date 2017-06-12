package ru.tchallenge.client.internal.web.sandbox.authentication;

import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;

import javax.annotation.PostConstruct;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Sets;
import ru.tchallenge.client.internal.web.sandbox.account.AccountInfo;
import ru.tchallenge.client.internal.web.sandbox.account.EmployeeInfo;
import ru.tchallenge.client.internal.web.sandbox.account.PersonInfo;

@RestController
@RequestMapping(path = "/sandbox/authentication")
public class AuthenticationController {

    private Collection<AccountInfo> accounts = new ArrayList<>();

    @RequestMapping(method = RequestMethod.POST)
    public AuthenticationInfo create(@RequestBody AuthenticationInvoice invoice) {
        return accounts
                .stream()
                .filter(accountInfo -> accountInfo.getLogin().equals(invoice.getLogin()))
                .map(this::authentication)
                .findFirst()
                .orElseThrow(this::notAuthenticated);
    }

    private AuthenticationInfo authentication(AccountInfo accountInfo) {
        AuthenticationInfo authentication = new AuthenticationInfo();
        authentication.setAccount(accountInfo);
        authentication.setToken(UUID.randomUUID().toString());
        return authentication;
    }

    private RuntimeException notAuthenticated() {
        return new RuntimeException("not authenticated");
    }

    @PostConstruct
    private void onConstructed() {
        accounts.add(ivanov());
    }

    private AccountInfo ivanov() {
        AccountInfo account = new AccountInfo();
        account.setEmail("ivan.ivanov@mail.net");
        account.setLogin("ivan.ivanov@mail.net");
        PersonInfo person = new PersonInfo();
        person.setFirstname("Иван");
        person.setLastname("Иванов");
        person.setQuickname("Вано");
        account.setPerson(person);
        EmployeeInfo employee = new EmployeeInfo();
        employee.setRoles(Sets.newHashSet("ADMIN", "TASK_MODERATOR"));
        account.setEmployee(employee);
        return account;
    }
}
