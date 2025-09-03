"use client";
import React from 'react';
import PageLayout from '@/components/PageLayout';
import {Header} from '@/components/Header'; // your existing header component
import Footer from "@/components/Footer";


export default function FAQPage() {
  return (
    <PageLayout title="Hunterz FAQ" >
          {/* Header */}
              <Header />
        
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Hunterz – Frequently Asked Questions (FAQ)</h1>

        {/* Gameplay & Winning */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center mt-20">Gameplay & Winning</h2>

          <div className="mb-4">
            <p className="font-semibold">Q: How do I win a prize?</p>
            <p>
              Every day, Hunterz drops virtual money boxes around your city using AR (augmented reality). Open the map, follow the drop zone, and be the first to reach it. Activate AR, capture the box, and the prize is yours!
            </p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Q: How many prizes drop each day?</p>
            <ul className="list-disc pl-6">
              <li>One prize for all users (freemium access).</li>
              <li>One bigger, exclusive prize for Premium members only.</li>
              <li>On top of that, you’ll also find XP hunts scattered around the map every day to help you level up and climb the leaderboard.</li>
            </ul>
          </div>
        </section>

        {/* Claiming & Payouts */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center mt-10">Claiming & Payouts</h2>

          <div className="mb-4">
            <p className="font-semibold">Q: How do I claim my prize?</p>
            <p>
              Once you capture a drop in AR, the prize is instantly added to your in-app wallet. From there, you can request payout to your chosen method.
            </p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Q: How do I get paid?</p>
            <ul className="list-disc pl-6">
              <li>Direct to Credit or Debit Card</li>
              <li>Zelle</li>
              <li>Venmo</li>
              <li>Wire Transfer</li>
            </ul>
            <p>
              Simply open your wallet, tap &apos;Withdraw,&apos; select your preferred option, and confirm.
            </p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Q: How long does it take to receive payment?</p>
            <p>
              Most payouts are instant to your card, Zelle, or Venmo. Wire transfers may take 1–2 business days depending on your bank.
            </p>
          </div>
        </section>

        {/* XP Hunts & Leaderboards */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center mt-10">XP Hunts & Leaderboards</h2>

          <div className="mb-4">
            <p className="font-semibold">Q: What is XP and how does it work?</p>
            <ul className="list-disc pl-6">
              <li>Use XP to unlock hints for prize locations.</li>
              <li>Earn XP to climb the Leaderboard.</li>
              <li>At the end of each month, the top XP earner wins the MEGA PRIZE.</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Q: What are XP hunts?</p>
            <p>
              Alongside daily money drops, we release XP hunts — scattered points across the map that anyone can capture. They’re quick to grab and help you build up XP fast.
            </p>
          </div>
        </section>

        {/* Premium Plan */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center mt-10">Premium Plan</h2>

          <div className="mb-4">
            <p className="font-semibold">Q: What does the Premium Plan include?</p>
            <ul className="list-disc pl-6">
              <li>Exclusive Bigger Daily Prize – only Premium members can compete for it.</li>
              <li>Exclusive Daily Hunts – additional drops with higher rewards.</li>
              <li>Smaller Drop Zone Radius – capture prizes more easily.</li>
              <li>500 Bonus XP every month – jump ahead on the leaderboard.</li>
              <li>VIP Badge – show your elite status.</li>
              <li>10% Discount on every in-app purchase.</li>
              <li>Access to the Monthly MEGA PRIZE – only for Premium hunters.</li>
            </ul>
            <p>Premium = more hunts, bigger prizes, and faster progress.</p>
          </div>
        </section>

        {/* Security & Trust */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center mt-10">Security & Trust</h2>

          <div className="mb-4">
            <p className="font-semibold">Q: Is Hunterz safe and fair?</p>
            <ul className="list-disc pl-6">
              <li>Verified Users Only – all players pass ID and age verification.</li>
              <li>Geolocation Protection – captures only work when you’re really at the drop zone (no cheating with GPS spoofing).</li>
              <li>Secure Payments – instant payouts are processed through trusted providers (Zelle, Venmo, banks).</li>
              <li>Anti-Fraud & Monitoring – we continuously monitor for duplicate accounts or suspicious activity to keep the game fair.</li>
              <li>Compliance Ready – Hunterz follows U.S. financial regulations (KYC/AML/OFAC). Your prizes are real, instant, and safe.</li>
            </ul>
          </div>
        </section>
      </div>
        <Footer />
    </PageLayout>

    
  );
}