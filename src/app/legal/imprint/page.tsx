export const metadata = {
  title: 'Imprint - Tempest eSports',
  description: 'Legal information and imprint for Tempest eSports.',
}

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-12">IMPRINT</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Information according to § 5 TMG</h2>
              <div className="text-gray-400 leading-relaxed space-y-1">
                <p>Tempest eSports GmbH</p>
                <p>Esports-Straße 42</p>
                <p>10115 Berlin</p>
                <p>Germany</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Represented by</h2>
              <p className="text-gray-400 leading-relaxed">
                Michael Chen, Chief Executive Officer (CEO)
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Contact</h2>
              <div className="text-gray-400 leading-relaxed space-y-1">
                <p>Phone: +49 (0) 30 123456789</p>
                <p>Email: contact@tempestesports.com</p>
                <p>Website: www.tempestesports.com</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Registration</h2>
              <div className="text-gray-400 leading-relaxed space-y-1">
                <p>Registered in the Commercial Register (Handelsregister)</p>
                <p>Registration Court: Amtsgericht Berlin-Charlottenburg</p>
                <p>Registration Number: HRB 123456 B</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">VAT Information</h2>
              <p className="text-gray-400 leading-relaxed">
                VAT identification number according to § 27a of the German VAT Act (Umsatzsteuergesetz):<br />
                DE 123456789
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Responsible for Content</h2>
              <p className="text-gray-400 leading-relaxed">
                Responsible for content according to § 55 Abs. 2 RStV:<br />
                Michael Chen<br />
                Tempest eSports GmbH<br />
                Esports-Straße 42<br />
                10115 Berlin
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Dispute Resolution</h2>
              <p className="text-gray-400 leading-relaxed">
                The European Commission provides a platform for online dispute resolution (OS): 
                https://ec.europa.eu/consumers/odr. We are not willing or obliged to participate 
                in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
