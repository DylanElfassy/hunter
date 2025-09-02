"use client";
import React from 'react';
import PageLayout from '@/components/PageLayout';
import {Header} from '@/components/Header'; // your existing header component
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Hunterz Privacy Policy"    >
         {/* Header */}
                      <Header />
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy for Hunters Mobile App and Website</h1>
       <p className="text-lg italic  mb-4">
Last Updated: August 12, 2025</p>
        <p className="mb-6 text-justify">
          This Privacy Policy describes how the HunterZ mobile application (the “App”) and the Hunters website at hunters.app (the “Site”) collect, use, share, and protect personal information. It also explains users’ rights under U.S. privacy laws. By using the App or Site (collectively, the “Service”), you agree to the practices described in this Policy. We are committed to protecting your privacy and complying with applicable U.S. privacy laws, including the California Consumer Privacy Act (CCPA), where relevant.
        </p>

        {/* Section 1 */}
        <section>
          <h3 className="text-2xl font-bold mb-4">1. Information We Collect</h3>
          <p className="mb-2">
            We collect information from and about users in a few different ways. The types of data collected through our mobile App and website may differ, as described below.
          </p>

         <h2 className="text-2xl font-bold mt-6 mb-2">1.1 Information You Provide to Us (Account and Profile Data)</h2>
<ul className="list-disc ml-6 space-y-2">
  <li>
    <strong>Account Registration:</strong> When you create an account on HunterZ (whether via email sign-up or using third-party login methods like Facebook, Google, Apple, or other providers), we collect personal information you provide. This may include your name, email address, username, and password. If you sign up via a third-party account, you authorize that provider to share certain information with us (such as your name and email), which we use to set up your Hunters profile. We do not receive your third-party account password or any information beyond what you consent to share. Your use of third-party sign-on features is also governed by those providers’ privacy policies.
  </li>
  <li>
    <strong>Profile and Content:</strong> You may also provide additional information as part of your user profile or when using the Service (for example, a profile photo, contact information, or other details). Any information you choose to submit through the Service (such as in-app postings or communications) will be collected and stored by us in accordance with this Policy.
  </li>
  <li>
    <strong>Communications:</strong> If you contact us (for example, for support or inquiries), we will collect your name, contact information (like email or phone number), and the contents of your message.
  </li>
</ul>

        <h3 className="text-2xl font-bold mt-6 mb-2">1.2 Location Data</h3>
<p className="mb-2">Because Hunters offers geolocation-based functionality, we collect precise location information from your device with your permission. For example, we may collect GPS coordinates or similar location identifiers from your smartphone to provide location-based features of the Service. We use various technologies to determine location, including GPS, Wi-Fi access points, and cell tower data.</p>
<ul className="list-disc ml-6 space-y-2">
  <li>
    <strong>In the App:</strong> If you allow the App to access location services, we collect your real-time geographic location to enable features such as displaying nearby content, matching you with location-specific opportunities, or facilitating geolocation-based games or experiences. We may collect location data while you are using the App and, if you grant background location permissions, even when the App is closed or not in use. We will make it clear why we need your location and obtain your consent, especially if location data will be collected in the background. You can always adjust your device settings to disable or limit location sharing. However, note that certain features of the App may not function properly without location access.
  </li>
  <li>
    <strong>On the Website:</strong> We generally do not collect precise GPS location via the website. However, when you visit the Site, we might infer your general location (e.g., city or region) from your IP address for analytics or customization purposes.
  </li>
 
</ul>
 <p className="mt-2">
    <strong>Your Choices:</strong> You can control the App’s access to location data through your device’s privacy settings. If you initially consent to location collection but later change your mind, you can revoke location permissions at any time in your device settings. Disabling location sharing will not prevent you from using the Service, but certain geolocation features will be limited.
  </p>
      <h3 className="text-2xl font-bold mt-6 mb-2">1.3 Device and Usage Information</h3>
<p className="mb-2">We and our third-party analytics providers collect technical information about how you access and use the Service, both in the App and on the Site. This data helps us understand performance and improve our offerings. The information we collect includes:</p>
<ul className="list-disc ml-6 space-y-2">
  <li>
    <strong>Device Identifiers:</strong> When you use the App, we automatically collect certain device information such as your device type and model, operating system version, unique device identifiers (like device ID or advertising ID), and mobile network information. For example, the App may record a Firebase Installation ID or similar unique identifier for analytics purposes. On the website, we collect data like your browser type, device type, and operating system.
  </li>
  <li>
    <strong>Log Data:</strong> Our servers and analytics tools log information about your usage. This includes Internet Protocol (IP) address, device name, the pages or screens viewed, features used, access times and dates, and other statistics. For instance, if the App encounters an error or crash, we may collect log data (through third-party SDKs like Firebase Crashlytics) including your IP address, device name, app settings at the time of error, and timestamps. These logs help us debug issues and improve stability.
  </li>
  <li>
    <strong>Usage Analytics:</strong> We use third-party analytics services (described in Section 3 below) that employ technologies to collect data about how users interact with our Service. This includes information such as the features you use, content you view, taps and navigation within the App, and the referring webpage or app that led you to our Site. For example, Google Analytics on our website may use cookies to track page views and clicks, while Firebase Analytics in our App uses mobile identifiers to measure in-app activities. This data is generally collected in aggregate form, but may be associated with your account or device identifier.
  </li>
  <li>
    <strong>Cookies and Similar Technologies:</strong> On the Hunters website, we use cookies and similar tracking technologies. Cookies are small text files that websites send to your browser, which are stored on your device and often include an anonymous unique identifier. We use cookies on our Site to remember user preferences, authenticate users, and analyze Site traffic and usage patterns. For example, when you visit hunters.app, our analytics providers may set cookies in your browser to collect information about your visit. You have the ability to accept or reject cookies through your browser settings. If you choose to disable cookies, some features of our Site might not function optimally. (Note: The App itself does not use cookies, but it may incorporate third-party code that uses cookie-like mechanisms for analytics.)
  </li>
  <li>
    <strong>Web Beacons and SDKs:</strong> We may also use web beacons (pixel tags) on our Site or incorporate software development kits (SDKs) in our App provided by third parties. These technologies function similarly to cookies and help us and our partners collect usage statistics and other data (for example, an SDK from a social media provider might enable a social login feature and collect information in that process).
  </li>
</ul>
         <h3 className="text-2xl font-bold mt-6 mb-2">1.4 Information from Third Parties</h3>
<p className="mb-2">In addition to data you provide directly, we may receive information about you from third parties in connection with your use of the Service:</p>
<ul className="list-disc ml-6 space-y-2">
  <li>
    <strong>Social Login Providers:</strong> If you register or log into Hunters using a third-party account (e.g., “Sign in with Facebook,” “Sign in with Google,” or “Sign in with Apple”), we receive personal information from that third party such as your name, email address, and any other information you have authorized them to share. We use this information solely to create and manage your Hunters account. We do not receive or store your third-party login credentials. Please review the privacy policies of your chosen login provider for details on their data practices.
  </li>
  <li>
    <strong>Analytics and Advertising Partners:</strong> Our analytics partners (like Google Analytics and Firebase) may provide us with aggregated demographic or interest data about our user base, which they derive from your interactions with our Service or other sites/apps over time. This helps us understand our audience in a general way. We do not combine this data with personally identifying information, and it is used in compliance with applicable privacy laws and the partners’ policies.
  </li>
  <li>
    <strong>Service Providers:</strong> If you make purchases or transactions through the Service (for example, buying in-app content or subscribing to premium features), we may work with third-party payment processors who collect payment information on our behalf. We will receive confirmation of payment and basic transaction details but not your full payment card number. Similarly, if the Service integrates any third-party features (such as a maps API for location services or push notification service), those providers may send us certain data or we may share certain data with them as needed to operate that functionality (see Section 3).
  </li>
</ul>
<p className="mt-2">We will only collect and use third-party source information as explained in this Policy or at the time of data collection.</p>

        </section>

        {/* Section 2 */}
        <section>
       <h2 className="text-2xl font-bold mt-6 mb-2">2. How We Use Your Information</h2>
<p className="mb-2">We use the collected information for the following purposes:</p>
<ul className="list-disc ml-6 space-y-2">
  <li>
    <strong>To Provide and Maintain the Service:</strong> We process data to allow you to register and log in, maintain your profile, enable core App features (including geolocation-based features), and generally deliver the functionality you expect. For example, we use your location to show relevant content or features in your vicinity, and use your account info to personalize your experience.
  </li>
  <li>
    <strong>To Improve and Customize the Service:</strong> The information helps us understand how users interact with our App and Site so we can improve the design, content, and overall user experience. We analyze usage data and feedback to debug issues, develop new features, and refine existing ones. For instance, analytics data may tell us which features are most popular or if certain app screens cause confusion, guiding our product development.
  </li>
  <li>
    <strong>Personalization:</strong> We may use information to tailor the Service to you. This can include showing you content, recommendations, or promotions based on your usage history or location. For example, knowing your general location allows us to display location-specific offers or events that might interest you.
  </li>
  <li>
    <strong>Communications:</strong> We use contact information (like your email) to send you service-related communications. This includes verifying your account, sending important announcements or updates about the Service, responding to your inquiries, and providing customer support. If you opt in to receive marketing communications, we may send you newsletters, offers, or promotions about Hunters or our affiliates. You can opt out of marketing emails at any time by using the unsubscribe link or contacting us. (We will still send essential transactional or account messages, such as password reset emails or terms updates, as these are not promotional.)
  </li>
  <li>
    <strong>Geolocation Features:</strong> With respect to location data, we use it to enable the geolocation-based functionality of the Hunters App. For example, if the Service involves finding “hunts” or items near you, we use your real-time GPS location to show those nearby opportunities. Location data might also be used to improve location accuracy or to provide localized content (like language or region-specific material).
  </li>
  <li>
    <strong>Safety and Trust:</strong> Information is also used to maintain the security and integrity of our Service. For example, we might monitor and investigate fraudulent or suspicious activity (such as hacking attempts or violations of our Terms of Service) and use personal data to mitigate and prevent security threats.
  </li>
  <li>
    <strong>Compliance and Legal:</strong> We may use your information as necessary to comply with applicable legal obligations, such as responding to lawful requests by public authorities, or to enforce our terms and protect our legal rights. If we ever need to use your data for a purpose not described in this Policy, we will obtain your consent or provide the appropriate notice as required by law.
  </li>
</ul>
<p className="mt-2">We will not use personal information for materially different, unrelated, or incompatible purposes without updating this Policy or obtaining your consent.</p>

        </section>

        {/* Section 3 */}
        <section>
        <h2 className="text-2xl font-bold mt-6 mb-2">3. How We Share or Disclose Information</h2>
<p className="mb-2">We understand the importance of keeping your personal information private. We do not sell your personal information to third parties for profit, and we only share information in the following circumstances:</p>
<ul className="list-disc ml-6 space-y-2">
  <li>
    <strong>Service Providers:</strong> We employ trusted third-party companies and individuals to perform services on our behalf and help us operate the Service or process data. These service providers assist with various tasks, including but not limited to: hosting our servers/infrastructure, data analytics, crash reporting, sending push notifications or emails, payment processing, user authentication, and customer support. We share information with these providers only to the extent necessary for them to perform their functions, and we contractually bind them to protect your information and use it only for our purposes. For example, we may share user and device data with:
    <ul className="list-disc ml-6 space-y-1">
      <li>Firebase and Google Analytics: We use Google’s Firebase platform (including Firebase Analytics) in our App and Google Analytics on our Site to understand how users engage with the Service. These analytics services may receive identifiers and usage data from our App or Site to provide aggregated insights. Google may also set and read cookies or collect device identifiers in the process. We have configured these services to not share any personally identifying information about you with Google beyond what is needed for analytics. (See Section 4 for more on your choices and Google’s privacy features.)</li>
      <li>OneSignal or Similar (Push Notifications): If our App uses OneSignal (or a similar push notification service) to send you push notifications or alerts, we provide that service with certain data such as a device token or identifier needed to deliver messages. This allows us to notify you about updates or relevant content in the App. OneSignal may process this data under its own privacy policy, but is not permitted to use your information for any purpose other than delivering our messages to you.</li>
      <li>Authentication Partners: If you log in through Facebook, Google, Apple, or another platform, we share and receive data as needed for authentication. For instance, to facilitate the login, we may redirect you to the provider and receive confirmation of your identity and basic profile info. We do not provide those platforms with any more of your data than necessary; the data exchange is primarily between you and the platform (with your consent) to verify your identity.</li>
      <li>Cloud Hosting and Infrastructure: Our databases and servers may be hosted by reputable third-party cloud providers (such as Amazon Web Services or Google Cloud). These providers technically have access to the data stored on their equipment, but we implement safeguards (like encryption and access controls) to ensure your data is protected. They also are obligated to secure the data and not use it for any other purpose.</li>
    </ul>
  </li>
  <li>
    <strong>Affiliates:</strong> We may share your information with our affiliated companies – for example, a parent company, subsidiaries, joint ventures, or other companies under common control with Hunters. Any affiliate who receives your information will treat it in accordance with this Privacy Policy. If, in the future, Hunters is acquired by or merged with another company, your information may be transferred to that successor entity as part of the transaction, and that company will assume the rights and obligations regarding your information as described in this Policy.
  </li>
  <li>
    <strong>Legal Compliance and Protection:</strong> We may disclose personal information to third parties if we believe in good faith that such disclosure is required to: comply with a legal obligation or request (e.g., a court order, subpoena, or law enforcement request); protect and defend the rights, property, or safety of Hunters, our users, or the public; investigate or assist in preventing any violation of law or our Terms of Service; or detect and address fraud, security, or technical issues.
  </li>
  <li>
    <strong>Business Transfers:</strong> As mentioned, if we engage in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, sale of company assets, or transition of Service to another provider, your information may be sold or transferred as part of such a transaction as permitted by law. We will ensure the acquiring organization agrees to protect personal data consistent with this Policy.
  </li>
  <li>
    <strong>With Your Consent:</strong> We will share your personal information with other parties if you direct us to or expressly consent to such sharing. For example, if the Service includes an option to share certain information with other users (such as in a social feature or leaderboard), we will do so only with your consent or at your direction.
  </li>
  <li>
    <strong>Firebase and Google Analytics:</strong> We use Google’s Firebase platform (including Firebase Analytics) in our App and Google Analytics on our Site to understand how users engage with the Service. These analytics services may receive identifiers and usage data from our App or Site to provide aggregated insights. Google may also set and read cookies or collect device identifiers in the process. We have configured these services to not share any personally identifying information about you with Google beyond what is needed for analytics. (See Section 4 for more on your choices and Google’s privacy features.)
  </li>
  <li>
    <strong>OneSignal or Similar (Push Notifications):</strong> If our App uses OneSignal (or a similar push notification service) to send you push notifications or alerts, we provide that service with certain data such as a device token or identifier needed to deliver messages. This allows us to notify you about updates or relevant content in the App. OneSignal may process this data under its own privacy policy, but is not permitted to use your information for any purpose other than delivering our messages to you.
  </li>
  <li>
    <strong>Authentication Partners:</strong> If you log in through Facebook, Google, Apple, or another platform, we share and receive data as needed for authentication. For instance, to facilitate the login, we may redirect you to the provider and receive confirmation of your identity and basic profile info. We do not provide those platforms with any more of your data than necessary; the data exchange is primarily between you and the platform (with your consent) to verify your identity.
  </li>
  <li>
    <strong>Cloud Hosting and Infrastructure:</strong> Our databases and servers may be hosted by reputable third-party cloud providers (such as Amazon Web Services or Google Cloud). These providers technically have access to the data stored on their equipment, but we implement safeguards (like encryption and access controls) to ensure your data is protected. They also are obligated to secure the data and not use it for any other purpose.
  </li>
  
</ul>

<p className="mt-2">
    <strong>No Third-Party Marketing Disclosure:</strong> We do not share your personal information with unaffiliated third parties for their own direct marketing purposes unless you have given us consent to do so. Hunters does not rent or sell customer lists to other companies for marketing. In the event this policy changes, California residents would have the right to request information about such practices under the "Shine the Light" law, as described in Section 5, but as of now we engage in no such sharing.
  </p>

        </section>

        {/* Section 4 */}
        <section>
        <h2 className="text-2xl font-bold mt-6 mb-2">4. Data Retention</h2>
<p className="mb-2">
We will retain your personal information only for as long as necessary to fulfill the purposes for
which we collected it, or to comply with legal and contractual obligations. This means:
</p>
<ul className="list-disc ml-6 space-y-2">
  <li>
    We keep your profile information and account data while your account is active. If you maintain an account with us, we will retain the information you provided for as long as you are a user of the Service.
  </li>
  <li>
    If you choose to delete your account or if your account becomes inactive, we will initiate the process to delete or anonymize your personal data. In most cases, we will delete or de- identify information within a reasonable time after the account deletion request or after a prolonged period of inactivity, unless we are required to keep it longer by law (for example, some transaction records may need to be kept for financial reporting or audit obligations).
  </li>
  <li>
    We may retain certain minimal information even after account deletion to fulfill legal obligations (such as maintaining records of consent, payment transactions for accounting/ tax purposes, or records needed for dispute resolution), to prevent fraud, or to enforce our agreements. If we do retain data for such purposes, we ensure it is only used for those limited reasons.
  </li>
  <li>
    Information that has been aggregated or anonymized such that it is no longer personally identifiable may be retained indefinitely for analytics, research, and Service improvement purposes.
  </li>
  <li>
    Location data that we collect is retained in identifiable form only as long as reasonably necessary for the purpose of providing the location-based Service and then deleted or anonymized. (For example, we might store your recent location check-ins for a short period to support a feature, but we do not keep a continuous history of your precise movements indefinitely, unless this is disclosed and consented to as part of the Service’s core functionality.)
  </li>
</ul>
<p className="mt-2">
In summary, we implement retention timeframes that meet our operational needs and legal requirements, and we securely delete or anonymize data once retention periods expire. If you have questions about our data retention practices for specific data types, you can contact us as described in Section 8.
</p>

        </section>

        {/* Section 5 */}
        <section>
        <h2 className="text-2xl font-bold mt-6 mb-2">5. Your Privacy Rights and Choices</h2>
<p className="mb-2">
Depending on your residency and applicable U.S. law, you may have certain rights regarding your personal information. We are committed to honoring your rights and providing you with control over your data. This section describes those rights and how to exercise them.
</p>
<p className="mb-2">
Rights for U.S. Residents (California and Other States): If you are a resident of California, you have specific privacy rights under the California Consumer Privacy Act (CCPA) (as amended by the CPRA). Other states (such as Colorado, Virginia, Connecticut, and Utah) have also enacted privacy laws that provide similar rights to their residents. While the exact scope and exemptions can vary by state, we will afford you the following core rights (consistent with applicable law):
</p>
<ul className="list-disc ml-6 space-y-2">
  <li>
    Right to Know/Access: You have the right to request that we disclose the personal information we have collected, used, or disclosed about you in the 12-month period preceding your request. This includes the categories of personal information collected, the categories of sources, our business purposes for collecting the information, the categories of third parties with whom we shared the information, and the specific pieces of personal information we hold about you. Upon verification of your identity, we will provide the requested information in a portable and readily usable format, free of charge up to twice per year as required by law.
  </li>
  <li>
    Right to Delete: You have the right to request deletion of the personal information we have collected from you and retained, subject to certain exceptions. Once we receive and confirm a verifiable deletion request, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies. Please note that we may deny deletion requests if retaining the information is necessary for us or our service providers to complete transactions you have requested, detect security incidents, comply with legal obligations, or other limited purposes permitted by law.
  </li>
  <li>
    Right to Opt-Out of Sale/Sharing: The CCPA gives California residents the right to opt- out of the “sale” of their personal information. However, we do not sell personal information to third parties for monetary or other valuable consideration. Similarly, we do not share personal information for cross-context behavioral advertising in a manner that would trigger opt-out rights under the CCPA. Because we do not engage in data sales or sharing as defined by applicable law, we do not provide a “Do Not Sell or Share My Personal Information” link at this time. If this practice changes, we will update this Policy and provide appropriate opt-out mechanisms.
  </li>
  <li>
    Right to Non-Discrimination: We will not discriminate against you for exercising any of your privacy rights. This means we will not deny you goods or services, charge you a different price, or provide a different level of quality of service just because you exercised your rights under the CCPA or other privacy law. (However, please note that if you request deletion of certain data or opt out of certain processing, it may affect our ability to personalize the Service or provide certain features you enjoy. Any such effects will be a natural consequence of the data deletion or restriction, not a punitive action.)
  </li>
  <li>
    Shine the Light (California’s “Direct Marketing” Disclosure): California’s “Shine the Light” law (Civil Code § 1798.83) allows users who are California residents to request information once a year regarding our disclosures, if any, of personal information to third parties for their own direct marketing purposes. As noted above, we do not share your personal information with unaffiliated third parties for their direct marketing without your consent. If you have questions about our practices in this regard, you may contact us as provided below.
  </li>
</ul>
<p className="mb-2 mt-2">
Exercising Your Rights: If you are a U.S. resident and wish to exercise any of the rights described above, you (or your authorized agent) can submit a request to us by emailing us at privacy@hunters.app. Please include “Privacy Rights Request” in the subject line and specify which right you seek to exercise (access, deletion, etc.). We will need to verify your identity before processing certain requests, which may involve asking you to provide additional information or to log into your existing Hunters account (if applicable) so we can match you to our records. For requests made by an authorized agent on your behalf, we may require proof of the agent’s registration or written permission from you.
</p>
<ul className="list-disc ml-6 space-y-2">
  <li>
    Response Time: We will confirm receipt of your request within 10 days and endeavor to substantively respond within 45 days of receiving a verifiable request. If we need more time (up to an additional 45 days, for a total of 90 days), we will inform you of the reason and extension in writing.
  </li>
  <li>
    Verification: The level of verification needed may depend on the sensitivity of the request. For example, a request for specific pieces of information may require more verification steps. We will use information you have already provided us to verify identity when possible, and any additional information requested will be used only for verification purposes.
  </li>
  <li>
    Limitations: These rights are not absolute. In certain cases, we may decline your request as permitted by law. For example, if releasing certain information to you would infringe on another user’s privacy, or if you request deletion of data that we are legally required to keep, we may deny those aspects of the request with an explanation. We will not provide certain sensitive information in response to an access request (such as passwords or government ID numbers), but will indicate if we hold that type of data. If we deny a request, we will explain the basis for denial.
  </li>
</ul>
<p className="mt-2">
Note for Non-U.S. or International Users: This Policy is focused on U.S. privacy rights. If you are not a U.S. resident but happen to use our Service while visiting the United States (for example, international tourists signing up during travel), please be aware that the specific state law rights described above (such as CCPA rights) may only apply to U.S. residents and not to you. However, regardless of your residency, we want you to have control over your data. Thus, all users worldwide can request access to or deletion of their data by contacting us, and we will make good faith efforts to honor such requests in accordance with our legal obligations and this Policy. Additionally, if you reside outside the U.S., you may have rights under your local laws (e.g., GDPR in Europe); while this Policy is not explicitly drafted for those laws, we will still safeguard your data as described and you can contact us with any privacy concerns.
</p>
<p className="mt-2">
Do Not Track: The Site currently does not respond to “Do Not Track” (DNT) signals or similar browser settings. DNT is a feature offered by some browsers that sends a signal to websites to request that your browsing not be tracked. Given that there is not yet a consensus or standardized way that DNT signals are interpreted, we treat DNT signals like other general web requests at this time. However, we want to reassure you that we do not track your activities across third-party websites to provide targeted advertising, nor do we allow third parties to do so on our Site beyond the analytics described. We will update this section if our practices change in the future or if a standard for responding to DNT is established.
</p>

        </section>

        {/* Section 6 */}
        <section>
         <h2 className="text-2xl font-bold mt-6 mb-2">6. Children’s Privacy</h2>
<p className="mb-2">
No Users Under 18. Hunters is intended for adults and users over the age of 18. Our Service is not directed to, and we do not knowingly allow access or use by, anyone under the age of 18. If you are under 18, you are not permitted to create an account or use the Hunters Service. Please do not submit any personal information to us.
</p>
<p className="mb-2">
No Collection from Children Under 13. We especially do not knowingly collect any personal information from children under the age of 13, in compliance with the U.S. Children’s Online Privacy Protection Act (COPPA). The Service is designed for a general audience and is not intended for children. In the unlikely event we discover that we have collected personal information from a child under 13, we will promptly delete such information from our records.
</p>
<p className="mb-2">
If you are a parent or legal guardian and you believe that your child under 13 (or under 18, contrary to our policy) has provided us with any personal information, please contact us immediately (see Section 8, Contact Us). We will take steps to investigate and delete the information as soon as possible. We encourage parents and guardians to monitor their children’s online activities and help enforce this Privacy Policy by instructing their children never to provide personal data on the Service without permission.
</p>

        </section>

        {/* Section 7 */}
        <section>
         <h2 className="text-2xl font-bold mt-6 mb-2">7. Data Security</h2>
<p className="mb-2">
We take security measures seriously and implement commercially reasonable safeguards to protect your personal information against loss, theft, misuse, and unauthorized access, disclosure, alteration, or destruction. These measures include:
</p>
<ul className="list-disc list-inside ml-4">
  <li>
    <strong>Encryption:</strong> We use encryption in transit (HTTPS/TLS) for our App and Site to secure data as it travels over the internet. In other words, when you enter information into the Service, that data is encrypted during transmission to our servers to prevent eavesdropping.
  </li>
  <li>
    <strong>Access Controls:</strong> We restrict access to personal data to authorized personnel who need it to operate, develop, or improve our Service. Our staff are bound by confidentiality obligations. We also ensure that our service providers and partners have appropriate security and confidentiality standards in place.
  </li>
  <li>
    <strong>Authentication and Account Security:</strong> Where applicable, user accounts are protected by passwords. We urge you to choose a strong password and keep it confidential. We will never ask you for your password via email or unsolicited communication. If you use third-party login (e.g., via Google/Apple), those accounts have their own security measures like two-factor authentication which we encourage you to maintain.
  </li>
  <li>
    <strong>Monitoring and Testing:</strong> We regularly monitor our systems for possible vulnerabilities and attacks, and we periodically review our information collection, storage, and processing practices to update our physical, technical, and organizational security measures.
  </li>
</ul>
<p className="mt-2">
Despite our efforts, please be aware that no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data. While we strive to protect your information, there is always some risk of a security incident. In the event of a data breach or security incident, we will notify affected users and authorities as required by law and take appropriate steps to mitigate any harm.
</p>
<p className="mt-2">
<strong>User Responsibility:</strong> You also play a role in protecting your information. Please maintain the security of your account credentials and notify us immediately if you suspect any unauthorized access to your account. Avoid sharing personal information in public areas of the Service (like public forums) since we cannot control how others might use information you publicly post.
</p>

        </section>

        {/* Section 8 */}
        <section>
        <h2 className="text-2xl font-bold mt-6 mb-2">8. International Data Transfers</h2>
<p className="mb-2">
Our Service is operated from and hosted in the United States. If you are using the Service from outside the U.S., be aware that your information will likely be transferred to, stored, and processed in the United States or other locations where our servers and central database are located. The data protection laws of these jurisdictions may differ from those in your country of residence. By using the Service or providing us with information, you consent to the transfer of your personal information to the U.S. (or other countries in which we or our service providers maintain facilities) and the use and disclosure of your information as described in this Privacy Policy.
</p>
<p className="mb-2">
We will take steps to ensure that appropriate safeguards are in place to protect your data in transit and at rest, in compliance with applicable data protection law. For example, if we transfer personal data from the European Economic Area (EEA) or UK, we will rely on approved mechanisms such as Standard Contractual Clauses or your consent. If you have questions about international data practices, you can contact us.
</p>

        </section>

        {/* Section 9 */}
        <section>
         <h2 className="text-2xl font-bold mt-6 mb-2">9. Updates to this Privacy Policy</h2>
<p className="mb-2">
We may update or revise this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make changes, we will update the “Last Updated” date at the top of this Policy. If the changes are significant, we will provide a more prominent notice (for example, by placing a notice on our website or sending an in-app alert or email notification).
</p>
<p className="mb-2">
We encourage you to review this Policy periodically to stay informed about how we are protecting your information. Any changes will become effective when we post the revised Privacy Policy. Your continued use of the Service after a new Privacy Policy has become effective indicates that you have read, understood, and agreed to the current version of the Policy.
</p>

        </section>

        {/* Section 10 */}
        <section>
         <h2 className="text-2xl font-bold mt-6 mb-2">10. Contact Us</h2>
<p className="mb-2">
If you have any questions, concerns, or comments about this Privacy Policy or our privacy practices, or if you wish to exercise your rights and choices as described above, please contact us:
</p>
<ul className="list-disc ml-6">
  <li>Email: amsellemadam@hunterz.app</li>
  <li>Postal Mail: Hunterz Privacy Team, 131 Continental Drive, Newark, DE, USA</li>
</ul>
<p className="mt-2">
We will respond to your inquiries as soon as reasonably possible. Your privacy is important to us, and we welcome feedback on any aspects of this Policy or our implementation of it.
</p>
<p className="mt-2">
Thank you for reading our Privacy Policy. By using Hunters, you trust us with your information, and we take that responsibility to heart. We are dedicated to protecting your data and providing a safe, transparent user experience.
</p>

        </section>

        <p className="mt-6">
          Thank you for reading our Privacy Policy. By using Hunters, you trust us with your information, and we take that responsibility seriously.
        </p>
      </div>

<div className="max-w-4xl mx-auto p-6 space-y-8">
     <p className="mb-6 text-justify">
    Privacy Policy for Hunterz App (U.S.-Based)
        </p>

        <h1 className="text-3xl font-bold mb-6">Privacy Policy </h1>
     
        <p className="mb-6 text-justify">
Hunterz (“we,” “us,” or “our”) operates the Hunterz mobile treasure-hunt app (the “App”) in New York City. This Privacy Policy explains what information we collect when you use the App, why we collect it, how we use and share it, and your rights. We comply with all applicable U.S. data privacy laws (including COPPA and, where relevant, CCPA/CPRA) and industry best practices. By using Hunterz, you consent to the practices described here.
        </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Types of Data Collected</h2>
<p className="mb-2">
We limit collection to the information necessary for the App’s functionality. This includes:
</p>
<ul className="list-disc ml-6">
  <li>Personal Identification: Government-issued ID or date of birth (for age verification and eligibility), and basic contact info (e.g. name, email). We do not collect Social Security numbers or financial account numbers.</li>
  <li>Profile Photos (Optional): You may upload a photo for your user profile. This is optional and used only within the App for identification purposes.</li>
  <li>Location Data: We collect precise GPS location while you play the game (to guide hunts and map your progress) and at the moment of prize scanning (to verify you are physically at the correct location and prevent spoofing/fraud).</li>
  <li>Usage and Device Data: We collect analytics and crash reports (via Firebase) to improve the App’s performance. This may include device ID, operating system version, app usage statistics, and error logs. No personal content (e.g. messages, photos outside your profile) is collected without consent.</li>
  <li>In-App Purchase Data: If you make in-app purchases (e.g. entry fees or hints), payment processing is handled by the Apple App Store or Google Play; we do not directly collect your credit card details. We may collect non-sensitive billing contact info needed to process the transaction.</li>
</ul>

<h2 className="text-2xl font-bold mt-6 mb-2">How and Why Data is Collected</h2>
<ul className="list-disc ml-6">
  <li>
    Location: We use your GPS location to enable location-based gameplay. Real-time tracking is necessary to register visits to hunt locations and to verify prize finds. Location access is only active during gameplay and prize scans. At prize redemption, we compare your device’s GPS to the prize location to ensure players are truly on-site, which helps prevent fraud. We do not share your exact location with third parties except as described below (e.g. Mapbox for maps).
  </li>
  <li>
    Personal and Age Information: We collect your date of birth or ID to verify you meet the App’s age requirement (typically 18+ for cash prizes). Age verification is mandatory by law and contest rules. We use only the minimum information needed (for example, only the DOB or the front of an ID) and store it securely. Once age is confirmed, sensitive ID images are deleted or anonymized as soon as practicable.
  </li>
  <li>
    Usage Analytics: With your permission, we collect aggregated analytics (through Firebase Analytics) and crash reports (via Firebase Crashlytics) to understand app performance and usage patterns. This information (device type, app version, error traces, etc.) helps us fix bugs and improve features. We do not tie analytics data to your real identity, and it is used only in aggregate form.
  </li>
</ul>
<p className="mt-2">
Collecting only necessary data and retaining it only as long as needed are core principles for us. We do not sell or rent your personal information. Any data we do collect is used strictly for the purposes described above and to comply with legal obligations.
</p>

<h2 className="text-2xl font-bold mt-6 mb-2">Use of ID Documents for Age Verification</h2>
<p className="mb-2">
When you submit a government-issued ID or date of birth, it is used solely to confirm your age and eligibility (for example, ensuring you are over 18). We do not use this information for any other purpose. ID images are stored securely and encrypted, and are deleted or redacted once verification is complete (except for a cached date-of-birth value used to ensure you remain eligible). We follow best practices by disposing of personal information when it is no longer needed. If you later request deletion of your account, we will delete or fully anonymize these records unless we are legally required to retain them.
</p>

<h2 className="text-2xl font-bold mt-6 mb-2">Third-Party Services</h2>
<ul className="list-disc ml-6">
  <li>
    <strong>Firebase (Google):</strong> We use Firebase Authentication (for login), Firebase Analytics (for usage tracking), and Firebase Crashlytics (for crash reporting). As the app developer, we are the “data controller” of user information, and Google (Firebase) acts as a “data processor”. Google processes data on our behalf in accordance with their privacy policies. We do not share personal data with Google beyond what is needed for these services, and Google will not use it for their own purposes. (See Google’s Data Processing and Security Terms for details.)
  </li>
  <li>
    <strong>Mapbox:</strong> We use the Mapbox SDK for map display and geolocation features. Mapbox may receive location and device data (e.g., your latitude/longitude when map features are used) to render maps and provide navigation.mapbox.com. Mapbox handles this data as described in their product privacy policy. (For example, Mapbox is designed to receive GPS coordinates and session identifiers to support map functionality mapbox.com.) We do not send any additional personal information to Mapbox.
  </li>
  <li>
    <strong>In-App Purchases:</strong> All financial transactions are processed by the app stores (Apple App Store or Google Play). These platforms handle your payment data under their own privacy policies (for example, Stripe or other PCI-compliant processors for credit card data mapbox.com). We receive only confirmation of purchase and a token allowing us to unlock in-app content.
  </li>
  <li>
    <strong>Email Marketing Services:</strong> If you choose to sign up for newsletters or marketing emails, we will share your email address and name (with your consent) with our email service provider (e.g. Mailchimp or similar) to send promotional campaigns. These providers are also processors bound by their own policies. We comply with the CAN-SPAM Act by including clear unsubscribe instructions in every email ftc.gov.
  </li>
</ul>

<h2 className="text-2xl font-bold mt-6 mb-2">Data Storage, Retention, and User Rights</h2>
<ul className="list-disc ml-6">
  <li>
    <strong>Storage Location:</strong> All of your personal data is stored on secure servers in the United States. We use industry-standard protections: data in transit is encrypted using TLS/SSL, and sensitive information stored on our servers is encrypted at rest ftc.gov. Access to data is restricted to authorized employees and contractors who need it to perform their jobs, and we require strong passwords and other controls (e.g. authentication) to prevent unauthorized access ftc.gov.
  </li>
  <li>
    <strong>Retention:</strong> We retain personal information only as long as needed for the purposes described (for example, to run the contest and comply with laws) ftc.gov. After that, data is securely deleted or anonymized. This follows FTC guidance to dispose of data that is no longer required for business or legal reasons ftc.gov.
  </li>
  <li>
    <strong>Your Rights:</strong> Depending on your location and applicable law, you may have certain privacy rights. In particular, California residents have rights under the CCPA/CPRA. These include the right to know what personal information we have collected about you, why it was collected, and with whom it is shared; the right to correct or delete that information; and the right to opt out of any sale or sharing of sensitive data oag.ca.gov oag.ca.gov. (We do not sell personal data, but if that ever changes we would notify affected users and honor opt-out requests.) You may exercise these rights by contacting us (see below). We will respond to verifiable requests within the timeframes required by law. We will not discriminate against you for exercising any privacy right (e.g. by changing terms of service or pricing) oag.ca.gov.
  </li>
  <li>
    If you have questions or want to access or delete your data, you can email us at the address below. We will provide or delete your personal information as required by law. Note that some information (such as aggregated usage stats) may remain if it cannot be linked to you personally, to maintain App functionality or comply with legal obligations.
  </li>
</ul>

<h2 className="text-2xl font-bold mt-6 mb-2">Children’s Privacy</h2>
<p className="mb-2">
  The App is intended for adults and is not directed to children under 13. We require users to be at least 18 years old to play and claim prizes. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has registered, we will delete that account and any personal data immediately ftc.gov. We comply with the Children’s Online Privacy Protection Act (COPPA) by not permitting children under 13 to sign up. If a parent believes we have inadvertently collected their child’s information, they should contact us immediately and we will promptly remove that data.
</p>

<h2 className="text-2xl font-bold mt-6 mb-2">Email Marketing and Opt-Out</h2>
<p className="mb-2">
  By registering with the App, you may choose to receive marketing emails about promotions or new features. If you opt in, we will send emails in accordance with U.S. law. Each marketing email will include a clear method to unsubscribe (for example, an “unsubscribe” link) ftc.gov. You may opt out at any time by using that link or contacting us. We will honor all opt-out requests promptly (within the 10 business days required by law ftc.gov) and we will not send you marketing emails after you have unsubscribed.
</p>

<h2 className="text-2xl font-bold mt-6 mb-2">Security Measures</h2>
<p className="mb-2">
  Protecting your information is a priority. We follow industry-standard security practices and the FTC’s guidelines for protecting personal data ftc.gov. For example:
</p>
<ul className="list-disc ml-6">
  <li>
    <strong>Encryption:</strong> Sensitive data (like ID documents, contact details) is encrypted at rest, and all data transmitted between the App and our servers uses secure encryption (TLS) ftc.gov.
  </li>
  <li>
    <strong>Access Controls:</strong> Access to personal data is restricted to personnel who need it. Employees use strong passwords and multi-factor authentication, and we regularly update and patch our systems to guard against vulnerabilities.
  </li>
  <li>
    <strong>Network Security:</strong> Our servers are behind firewalls and intrusion detection systems. We regularly run anti-malware software and encrypt data transmissions to third parties (e.g. email or payment processors) over secure connections ftc.gov.
  </li>
  <li>
    <strong>Data Minimization:</strong> We follow the FTC’s recommendation to keep only what we need ftc.gov. Unneeded personal information is securely disposed of. We do not collect or retain excessive personal data.
  </li>
  <li>
    <strong>Incident Response:</strong> We maintain a plan to respond to any security incident. If a breach occurs, we will notify affected users and regulators as required by law.
  </li>
</ul>
<p className="mt-2">
  While no system is completely foolproof, we strive to use reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, and destruction, in line with industry best practices.
</p>

<h2 className="text-2xl font-bold mt-6 mb-2">Contact Information</h2>
<p className="mb-2">
  For questions about this Privacy Policy or to exercise your rights, please contact us:
</p>
<ul className="list-disc ml-6">
  <li><strong>Email:</strong> amsellemadam@hunterz.app</li>
  <li><strong>Mail:</strong> Hunterz, Attn: Privacy Officer, 123 Treasure Hunt Lane, New York, NY 10001</li>
  <li><strong>Phone:</strong> (555) 123-4567 (Privacy Inquiries)</li>
</ul>
<p className="mt-2">
  You may also contact our appointed U.S. Privacy Officer at the above email. We will address your inquiries as promptly as possible.
</p>
<p className="mt-2">
  <strong>Effective Date:</strong> This Privacy Policy is effective as of August 24, 2025. We may update it periodically to reflect changes in laws or our practices; we will notify users of any material changes.
</p>

</div>

<div className="max-w-4xl mx-auto p-6 space-y-8">
   
        <h1 className="text-3xl font-bold mb-6">Anti-Money Laundering (AML) Policy</h1>
     
        <p className="mb-6 text-justify">
Tamar Innovations LLC<br></br>
Effective Date: 29 July 2025<br></br>
Approved By: Adam Amsellem, Founder & Managing Member  </p>

<h2 className="text-2xl font-bold mt-6 mb-2">1. Purpose</h2>
<p>
  The purpose of this Anti-Money Laundering (AML) Policy is to establish robust procedures for detecting and preventing any attempt to use Tamar Innovations LLC's Hunters platform for money laundering, terrorist financing, or other illicit financial activities. This policy is designed to ensure compliance with applicable U.S. federal laws, including the Bank Secrecy Act (BSA) and the USA PATRIOT Act.
</p>

<h2 className="text-2xl font-bold mt-6 mb-2">2. Scope</h2>
<p>This policy applies to:</p>
<ul className="list-disc ml-6">
  <li>All customers and participants on the Hunters platform.</li>
  <li>All employees, contractors, and third-party partners who manage, monitor, or process payments, rewards, and subscriptions.</li>
</ul>

<h2 className="text-2xl font-bold mt-6 mb-2">3. AML Objectives</h2>
<ul className="list-disc ml-6">
  <li>Verify customer identity before granting access to financial transactions.</li>
  <li>Detect and report suspicious transactions to the appropriate authorities.</li>
  <li>Maintain accurate and up-to-date records for regulatory compliance.</li>
  <li>Train relevant staff on AML obligations and red flags.</li>
</ul>

<h2 className="text-2xl font-bold mt-6 mb-2">4. Know Your Customer (KYC) Procedures</h2>
<ul className="list-disc ml-6">
  <li>All customers must complete identity verification (name, DOB, address, government-issued ID) before they can participate in cash-reward activities.</li>
  <li>Age and location verification are integrated into the onboarding process (per separate policies).</li>
  <li>All high-volume users undergo Enhanced Due Diligence (EDD) per the Tiering & EDD Policy.</li>
</ul>

<h2 className="text-2xl font-bold mt-6 mb-2">5. Monitoring Transactions</h2>
<ul className="list-disc ml-6">
  <li>Automated systems flag suspicious behavior, including:
    <ul className="list-disc ml-6">
      <li>Unusual spikes in transaction volume.</li>
      <li>Multiple accounts controlled by the same device or IP.</li>
      <li>Rapid accumulation and withdrawal of winnings.</li>
      <li>Use of VPNs, proxies, or location spoofing tools.</li>
    </ul>
  </li>
  <li>All flagged transactions are manually reviewed by the Compliance Officer.</li>
</ul>

<h2 className="text-2xl font-bold mt-6 mb-2">6. Suspicious Activity Reporting (SAR)</h2>
<ul className="list-disc ml-6">
  <li>If activity is deemed suspicious, the Compliance Officer will prepare and file a Suspicious Activity Report (SAR) with the Financial Crimes Enforcement Network (FinCEN), where applicable.</li>
  <li>Reports will be filed confidentially and within required regulatory timelines.</li>
</ul>

<h2 className="text-2xl font-bold mt-6 mb-2">7. Recordkeeping</h2>
<ul className="list-disc ml-6">
  <li>All customer KYC, EDD, and transaction records will be retained for a minimum of five (5) years.</li>
  <li>SAR filings and related documentation are kept confidential and stored securely.</li>
</ul>

<h2 className="text-2xl font-bold mt-6 mb-2">8. Training</h2>
<ul className="list-disc ml-6">
  <li>All relevant staff will receive AML training at onboarding and annually thereafter.</li>
  <li>Training will include identifying suspicious patterns, compliance obligations, and proper escalation procedures.</li>
</ul>

<h2 className="text-2xl font-bold mt-6 mb-2">9. Roles and Responsibilities</h2>
<ul className="list-disc ml-6">
  <li><strong>Compliance Officer:</strong> Adam Amsellem (Founder & Managing Member) will serve as the primary AML Compliance Officer.</li>
  <li>Responsibilities include oversight of the AML program, reporting obligations, and liaison with regulatory authorities.</li>
</ul>
<h2 className="text-2xl font-bold mt-6 mb-2">Signed</h2>
<p>
  Adam Amsellem<br />
  Founder & Managing Member<br />
  Tamar Innovations LLC
</p>

        </div>
       <Footer />
    </PageLayout>
  );
}
