package com.cloudsherpas.employeetool.service;


import com.cloudsherpas.employeetool.util.Email;
import com.cloudsherpas.employeetool.util.SMTPUtil;

public class MailService {

    public void send(final String link, final String emailAddress, final String name) {
        final Email email = new Email();
        email.setToEmail(emailAddress);
        email.setToName(name);
        email.setSubject("Assessment Report");
        final String messageBody = "Hi " + name + ", \n\n" +
                "Here's a report of the assessment: \n\n" + link +
                "\n\n Click the link to view form.\n\n" +
                "This is a system generated email. Please don't reply";
        email.setBody(messageBody);
        SMTPUtil.send(email);
    }
}

