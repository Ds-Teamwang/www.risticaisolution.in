import React from 'react';

const CookiesPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-textLight">
      <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Cookies Policy</h1>
      <p className="text-accentCyan mb-8 font-medium">Ristic Ai Solution</p>
      
      <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-300 bg-surface/30 p-8 rounded-3xl border border-white/5">
        <section>
          <p className="mb-4">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <p>
            Ristic Ai Solution ("we", "us", or "our") uses cookies on the <a href="https://www.risticaisolution.in" className="text-accentCyan hover:underline">www.risticaisolution.in</a> website (the "Service"). By using the Service, you consent to the use of cookies.
          </p>
          <p className="mt-4">
            Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies, and further information about cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">1. What are cookies?</h2>
          <p>
            Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">2. How Ristic Ai Solution uses cookies</h2>
          <p className="mb-2">When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-accentPink">
            <li><strong>Essential Cookies:</strong> To enable certain functions of the Service (e.g., keeping you logged in).</li>
            <li><strong>Analytics Cookies:</strong> To provide analytics and understand how our site is used.</li>
            <li><strong>Preference Cookies:</strong> To store your preferences (e.g., language or theme).</li>
            <li><strong>Marketing Cookies:</strong> To enable advertisement delivery, including behavioral advertising.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">3. Third-party cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">4. What are your choices regarding cookies?</h2>
          <p className="mb-4">
            If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
          </p>
          <p>
            Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">5. Contact Us</h2>
          <p>If you have any questions about this Cookies Policy, please contact us:</p>
          <p className="mt-2"><strong>Email:</strong> <a href="mailto:support@risticaisolution.in" className="text-accentCyan hover:underline">support@risticaisolution.in</a></p>
        </section>
      </div>
    </div>
  );
};

export default CookiesPolicy;