export const metadata = {
  title: 'Terms of Service - Tempest eSports',
  description: 'Terms of service for Tempest eSports website and services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-4">TERMS OF SERVICE</h1>
          <p className="text-gray-500 mb-12">Last updated: January 1, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing and using the Tempest eSports website (tempestesports.com), 
                you accept and agree to be bound by these Terms of Service. If you do not 
                agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Use of Website</h2>
              <p className="text-gray-400 leading-relaxed">
                You agree to use this website only for lawful purposes and in a way that 
                does not infringe the rights of, restrict, or inhibit anyone else&apos;s use 
                and enjoyment of the website. You must not:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>Use the website in any way that breaches any applicable local, national, or international law</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Introduce viruses, trojans, or other malicious material</li>
                <li>Reproduce, duplicate, or copy any part of our website without permission</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, 
                images, and software, is the property of Tempest eSports or its content suppliers 
                and is protected by international copyright laws. The Tempest eSports name, logo, 
                and all related marks are trademarks of Tempest eSports.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Merchandise</h2>
              <p className="text-gray-400 leading-relaxed">
                All merchandise purchases are subject to availability. Prices are subject to 
                change without notice. We reserve the right to refuse any order. Shipping times 
                and costs may vary depending on your location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                Tempest eSports shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising out of your use of or inability 
                to use the website or any content therein.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Changes to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be 
                effective immediately upon posting to the website. Your continued use of the 
                website after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Governing Law</h2>
              <p className="text-gray-400 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws 
                of the Federal Republic of Germany. Any disputes shall be subject to the 
                exclusive jurisdiction of the courts of Berlin, Germany.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. Contact</h2>
              <p className="text-gray-400 leading-relaxed">
                For any questions about these Terms of Service, please contact us at:<br />
                Email: legal@tempestesports.com<br />
                Address: Tempest eSports GmbH, Berlin, Germany
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
