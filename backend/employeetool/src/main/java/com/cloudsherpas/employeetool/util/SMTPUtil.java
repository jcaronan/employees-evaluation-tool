package com.cloudsherpas.employeetool.util;

/**
 * Created by jcaronan on 11/25/15.
 */
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class SMTPUtil {

    public static void send(final Email email) {

        Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);

        try {
            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress(email.getFromEmail(), email.getFromName()));
            msg.addRecipient(Message.RecipientType.TO,
                    new InternetAddress(email.getToEmail(), email.getToName()));
            msg.setSubject(email.getSubject());
            msg.setText(email.getBody());

            Transport.send(msg);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}