export const metadata = {
  title: 'Privacy Policy - Tempest eSports',
  description: 'Privacy policy for Tempest eSports website and services.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-4">PRIVACY POLICY</h1>
          <p className="text-gray-500 mb-12">Last updated: January 1, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                Tempest eSports (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website tempestesports.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
              <p className="text-gray-400 leading-relaxed">
                We may collect information about you in a variety of ways:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li><strong className="text-white">Personal Data:</strong> Name, email address, and other contact information you voluntarily provide when subscribing to our newsletter or contacting us.</li>
                <li><strong className="text-white">Usage Data:</strong> Information about your device, browser, IP address, and how you interact with our website, collected automatically through analytics tools.</li>
                <li><strong className="text-white">Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
              <ul className="space-y-2 text-gray-400">
                <li>To send you newsletters and updates you have subscribed to</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To improve our website and services</li>
                <li>To analyze usage patterns and trends</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Data Sharing</h2>
              <p className="text-gray-400 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share data with trusted service providers who assist us in operating 
                our website and conducting our business, subject to confidentiality agreements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Data Security</h2>
              <p className="text-gray-400 leading-relaxed">
                We implement appropriate technical and organizational measures to protect 
                your personal data against unauthorized access, alteration, disclosure, or 
                destruction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Your Rights</h2>
              <p className="text-gray-400 leading-relaxed">
                Under GDPR, you have the right to access, rectify, erase, restrict processing, 
                data portability, and object to processing of your personal data. To exercise 
                these rights, please contact us at privacy@tempestesports.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Contact</h2>
              <p className="text-gray-400 leading-relaxed">
                For any questions about this Privacy Policy, please contact us at:<br />
                Email: privacy@tempestesports.com<br />
                Address: Tempest eSports GmbH, Berlin, Germany
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
