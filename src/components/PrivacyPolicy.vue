<template>
    <section class="relative min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">

        <div class="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
            <RouterLink id="top" to="/" class="absolute top-4 left-4 text-purple-600 hover:underline">
                ← Back to Home
            </RouterLink>
            <h1 class="text-3xl font-bold mb-6">KIDAYA PRIVACY POLICY</h1>
            <p class="text-sm mb-6">Effective Date: 1st June 2025</p>

            <section class="space-y-6">
                <p>
                    Kidaya Technologies Limited (“Kidaya”, “we”, “our”, or “us”) respects your privacy and is committed
                    to safeguarding your personal and business information. This Privacy Policy outlines how we collect,
                    use, disclose, and protect the information you provide to us while using the Kidaya mobile
                    application and related services (collectively, the “Services”).
                </p>
                <p>
                    We are committed to complying with the provisions of the Kenya Data Protection Act, 2019, and
                    ensuring transparency in how we handle your data.
                </p>

                <div>
                    <h2 class="text-xl font-semibold mb-2">1. Information We Collect</h2>
                    <p>We collect information about you only if it is necessary for legitimate business purposes, to
                        provide our Services, or to comply with legal obligations.</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                        <li><strong>a) Information You Provide to Us</strong>
                            <ul class="list-disc list-inside ml-6 mt-2">
                                <li><strong>i. Account Registration:</strong> Name, mobile number, email (if provided),
                                    password, optional business details</li>
                                <li><strong>ii. App Usage:</strong> Sales, expenses, notes, tags, customer records</li>
                                <li><strong>iii. Communication:</strong> Support requests, feedback forms</li>
                                <li><strong>iv. Payment Information:</strong> Collected via third-party processor; we
                                    don’t store card details</li>
                            </ul>
                        </li>
                        <li><strong>b) Information We Collect Automatically:</strong> Device info, IP, usage behavior,
                            error logs</li>
                        <li><strong>c) Information from Third Parties:</strong> Referral programs, federated login
                            providers (with your permission)</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Deliver financial tracking features</li>
                        <li>Generate summaries, reports, and insights</li>
                        <li>Provide support and service updates</li>
                        <li>Comply with legal obligations</li>
                        <li>Improve and enhance Services</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-2">3. Data Ownership and Access</h2>
                    <p>You retain full ownership of your data. We do not sell your data or use it for marketing without
                        consent. Upon account deletion, we purge your data from active systems within 6 months and
                        backups within 9 months unless legally required to retain it.</p>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-2">4. Lawful Grounds for Processing</h2>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Consent</li>
                        <li>Contractual necessity</li>
                        <li>Legal obligation</li>
                        <li>Legitimate interest (without infringing your rights)</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-2">5. Data Sharing and Disclosure</h2>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Service providers under strict confidentiality</li>
                        <li>Legal authorities when required by law</li>
                        <li>Partners only with your consent</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-2">6. Your Rights Under Kenyan Law</h2>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Right to access, rectification, and erasure</li>
                        <li>Right to withdraw consent</li>
                        <li>Right to object and to data portability</li>
                    </ul>
                    <p>Contact: <a href="mailto:support@kidaya.app"
                            class="text-blue-600 underline">support@kidaya.app</a></p>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-2">7. Data Security</h2>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Encrypted storage and secure transmission</li>
                        <li>Access controls and regular security audits</li>
                        <li>We encourage strong passwords and immediate reporting of suspicious activity</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-2">8. Data Retention</h2>
                    <p>We retain your data only as long as necessary for legal, contractual, or service purposes.
                        Requests for deletion will be honored within legal limits.</p>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-2">9. Children’s Privacy</h2>
                    <p>Kidaya is for users aged 18+. If we inadvertently collect data from a minor, we will delete it
                        immediately upon notice.</p>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-2">10. Changes to This Privacy Policy</h2>
                    <p>We may update this policy occasionally. Significant changes will be communicated via the app or
                        your contact details.</p>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-2">11. Contact Us</h2>
                    <p>For any privacy concerns, reach us at: <a href="mailto:hello@kidaya.app"
                            class="text-blue-600 underline">hello@kidaya.app</a></p>
                </div>
            </section>
        </div>
        <RouterLink to="#top" class="block mt-12 text-left text-purple-600 hover:underline"
            @click.prevent="window.scrollTo({ top: 0, behavior: 'smooth' })">
            ↑ Back to Top
        </RouterLink>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
