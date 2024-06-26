package com.ninja.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService{

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendEmailWithToken(String userEmail, String link) throws MessagingException {
        MimeMessage mimeMessage=javaMailSender.createMimeMessage();
        MimeMessageHelper helper=new MimeMessageHelper(mimeMessage,"UTF-8");

        String subject="About Joining Project Team";
        String text="Click The Link To Join Project Team: "+link;

        helper.setSubject(subject);
        helper.setText(text);
        helper.setTo(userEmail);

        try {
            javaMailSender.send(mimeMessage);
        }
        catch (MailSendException e){
            throw  new MailSendException("Failed to send the email");
        }
    }
}
