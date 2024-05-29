package com.ninja.service;

import com.ninja.model.PlanType;
import com.ninja.model.Subscription;
import com.ninja.model.User;

public interface SubscriptionService {
    Subscription createSubscription(User user)  throws  Exception;

    Subscription getUsersSubscription(Long userId)throws Exception;

    Subscription upgradeSubscription(Long userId, PlanType planType)throws Exception;

    boolean isValid(Subscription subscription);
}
