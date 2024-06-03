package com.ninja.controller;

import com.ninja.model.PlanType;
import com.ninja.model.User;
import com.ninja.response.PaymentLinkResponse;
import com.ninja.service.UserService;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.secret}")
    private String apiSecret;

    @Autowired
    private UserService userService;

    @PostMapping("/{planType}")
    public ResponseEntity<PaymentLinkResponse>createPaymentLink(
            @PathVariable PlanType planType,
            @RequestHeader("Authorization") String jwt
    )throws Exception
    {
        User user=userService.findUserProfileByJwt(jwt);
        int amount=799*100;
        if(planType.equals(PlanType.ANNUALLY)){
            amount=amount*12;
            amount=(int)(amount*0.7);
        }

            RazorpayClient razorpayClient=new RazorpayClient(apiKey,apiSecret);

            JSONObject paymentLinkRequest=new JSONObject();
            paymentLinkRequest.put("amount",amount);
            paymentLinkRequest.put("currency","INR");

            JSONObject customer=new JSONObject();
            customer.put("name",user.getFullName());
            customer.put("email",user.getEmail());

            paymentLinkRequest.put("customer",customer);

            JSONObject notify=new JSONObject();
            notify.put("email",true);
            paymentLinkRequest.put("notify",notify);

            paymentLinkRequest.put("callback_url","http://localhost:5173/upgrade_plan/success?planType="+planType);

            PaymentLink paymentLink=razorpayClient.paymentLink.create(paymentLinkRequest);

            String paymentLinkId=paymentLink.get("id");
            String paymentLinkUrl=paymentLink.get("short_url");

            PaymentLinkResponse response=new PaymentLinkResponse();
            response.setPayment_link_id(paymentLinkId);
            response.setPayment_link_url(paymentLinkUrl);

            return new ResponseEntity<>(response, HttpStatus.CREATED);


    }
}
