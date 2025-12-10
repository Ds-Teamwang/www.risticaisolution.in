import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-textLight">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-accentCyan mb-8 font-medium">Ristic Ai Solution</p>
      
      <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-300 bg-surface/30 p-8 rounded-3xl border border-white/5">
        <section>
          <p className="mb-4">
            <strong>Website:</strong> <a href="https://www.risticaisolution.in" className="text-accentCyan hover:underline">www.risticaisolution.in</a>
          </p>
          <p>
            Ristic Ai Solution (“Company”, “we”, “us”, “our”), accessible from www.risticaisolution.in, provides AI tools, automation services, online courses, digital development services, and booking/consultation services. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website, PWA, mobile interface, or any of our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">1. Information We Collect</h2>
          
          <h3 className="text-white font-semibold mt-4 mb-2">A. Information You Provide Directly</h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentPink">
            <li>Full name, email, phone number</li>
            <li>Account login details</li>
            <li>Payment information (processed securely by third-party gateways)</li>
            <li>Course progress, notes, uploads</li>
            <li>Service requirements, documents, and business details</li>
            <li>Consultation/appointment details</li>
          </ul>

          <h3 className="text-white font-semibold mt-4 mb-2">B. Information Collected Automatically</h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentPink">
            <li>IP address, device info, browser type</li>
            <li>Usage analytics & interaction logs</li>
            <li>Cookies and tracking technologies</li>
            <li>AI chat logs for service improvement</li>
          </ul>

          <h3 className="text-white font-semibold mt-4 mb-2">C. Information From Third-Party Integrations</h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentPink">
            <li>Google / Facebook login data (if used)</li>
            <li>Payment processors</li>
            <li>Analytics services</li>
          </ul>
          <p className="mt-4 text-accentCyan font-medium">We never sell your personal data.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">2. How We Use Your Information</h2>
          <p className="mb-2">We use your information to:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentCyan">
            <li>Provide courses, AI automation, app/website development, and related services</li>
            <li>Process payments and subscriptions</li>
            <li>Improve website experience and AI performance</li>
            <li>Personalize course recommendations</li>
            <li>Provide customer support and service updates</li>
            <li>Prevent fraud and ensure platform security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">3. How We Share Your Information</h2>
          <p className="mb-2">We may share data with:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentPink">
            <li>Service providers: hosting, analytics, payment gateways, customer support tools</li>
            <li>AI Providers (such as OpenAI or others, depending on features used)</li>
            <li>Legal authorities if required by law</li>
          </ul>
          <p className="mt-4 text-white/80">We do not sell or rent user data to any third party.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">4. Data Storage & Security</h2>
          <p>
            We use industry-standard security measures to protect your data. However, no method is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">5. Your Rights</h2>
          <p className="mb-2">You may request:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentCyan">
            <li>Data access</li>
            <li>Data correction</li>
            <li>Data deletion</li>
            <li>Withdrawal of consent</li>
            <li>Export of your information</li>
          </ul>
          <p className="mt-4">
            <strong>Email:</strong> <a href="mailto:support@risticaisolution.in" className="text-accentPink hover:underline">support@risticaisolution.in</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">6. Children’s Privacy</h2>
          <p>Our services are not intended for individuals under 13.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">7. Changes to Policy</h2>
          <p>We may update this Privacy Policy anytime. Updated date will be shown above.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">8. Contact Us</h2>
          <p className="font-bold text-white mb-1">Ristic Ai Solution</p>
          <p>Website: <a href="https://www.risticaisolution.in" className="text-accentCyan hover:underline">www.risticaisolution.in</a></p>
          <p>Phone: <a href="tel:+918178360147" className="text-accentPink hover:underline">+91 81783 60147</a></p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;