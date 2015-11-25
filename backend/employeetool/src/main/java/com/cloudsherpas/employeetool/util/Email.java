package com.cloudsherpas.employeetool.util;

/**
 * Created by jcaronan on 11/25/15.
 */
public class Email {

    private String fromEmail;
    private String fromName;
    private String toEmail;
    private String toName;
    private String subject;
    private String body;

    public Email() {
        this.fromEmail = "employee.assessment.messenger.noreply@gmail.com";
        this.fromName = "EmployeeAssessmentReport-NoReply";
    }

    public String getFromEmail() {
        return fromEmail;
    }

    public void setFromEmail(String fromEmail) {
        this.fromEmail = fromEmail;
    }

    public String getFromName() {
        return fromName;
    }

    public void setFromName(String fromName) {
        this.fromName = fromName;
    }

    public String getToEmail() {
        return toEmail;
    }

    public void setToEmail(String toEmail) {
        this.toEmail = toEmail;
    }

    public String getToName() {
        return toName;
    }

    public void setToName(String toName) {
        this.toName = toName;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Override
    public String toString() {
        return "Email{" +
                "fromEmail='" + fromEmail + '\'' +
                ", fromName='" + fromName + '\'' +
                ", toEmail='" + toEmail + '\'' +
                ", toName='" + toName + '\'' +
                ", subject='" + subject + '\'' +
                ", body='" + body + '\'' +
                '}';
    }
}