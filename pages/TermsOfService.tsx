import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-textLight">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-accentCyan mb-8 font-medium">Ristic Ai Solution</p>
      
      <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-300 bg-surface/30 p-8 rounded-3xl border border-white/5">
        <section>
          <p className="mb-4">
            <strong>Website:</strong> <a href="https://www.risticaisolution.in" className="text-accentCyan hover:underline">www.risticaisolution.in</a>
          </p>
          <p>
            By using the services of Ristic Ai Solution (“we”, “our”, “us”), available at <a href="https://www.risticaisolution.in" className="text-accentCyan hover:underline">www.risticaisolution.in</a>, you agree to the following Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">1. Use of Platform</h2>
          <p className="mb-2">You must use the website legally and responsibly. You must not:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentPink">
            <li>Misuse AI tools</li>
            <li>Violate copyright policies</li>
            <li>Harm the platform</li>
            <li>Attempt hacking or unauthorized access</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">2. User Accounts</h2>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentCyan">
            <li>You are responsible for maintaining the confidentiality of your login information.</li>
            <li>We may suspend accounts that violate rules or misuse services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">3. Payments & Refund Policy</h2>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentPink">
            <li>Payments for courses, services, or subscriptions are final unless stated otherwise.</li>
            <li>Refund eligibility depends on the specific course/service refund rules.</li>
            <li>Auto-renew subscriptions must be canceled before the renewal date.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">4. Course & Service Access</h2>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentCyan">
            <li>Purchase grants non-transferable, limited access.</li>
            <li>We may modify, update, or remove course content to improve learning quality.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">5. AI Tools & Generated Content</h2>
          <p className="mb-2">AI responses may contain inaccuracies. You agree to verify AI-generated information before use.</p>
          <p className="mb-2">We do not guarantee:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentPink">
            <li>Accuracy</li>
            <li>Completeness</li>
            <li>Commercial suitability</li>
          </ul>
          <p className="mt-2 text-white/80 italic">AI is used at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">6. Intellectual Property</h2>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentCyan">
            <li>All logos, designs, content, videos, documents, and platform materials belong to Ristic Ai Solution.</li>
            <li>You may not copy, resell, or distribute without permission.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">7. Limitation of Liability</h2>
          <p className="mb-2">Ristic Ai Solution is not liable for:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentPink">
            <li>AI-generated errors</li>
            <li>Loss of data, revenue, or business</li>
            <li>Interruptions, bugs, downtime</li>
          </ul>
          <p className="mt-2">Use of our website is at your own responsibility.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">8. Termination</h2>
          <p>We may suspend or terminate accounts for violation of Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">9. Governing Law</h2>
          <p>These Terms are governed by Indian law.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">10. Contact</h2>
          <p><strong>Email:</strong> <a href="mailto:support@risticaisolution.in" className="text-accentCyan hover:underline">support@risticaisolution.in</a></p>
          <p><strong>Phone:</strong> <a href="tel:+918178360147" className="text-accentCyan hover:underline">+91 81783 60147</a></p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;