package ru.tchallenge.client.internal.web.sandbox.account;

public class AccountInfo {

    private String email;
    private String login;
    private EmployeeInfo employee;
    private PersonInfo person;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public EmployeeInfo getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeInfo employee) {
        this.employee = employee;
    }

    public PersonInfo getPerson() {
        return person;
    }

    public void setPerson(PersonInfo person) {
        this.person = person;
    }
}
