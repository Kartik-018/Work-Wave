package com.ninja.repository;

import com.ninja.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription,Long> {

    Subscription findByUserId(Long userId);

}
