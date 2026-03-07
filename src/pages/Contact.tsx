import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="px-5 md:px-8">
      <div className="mx-auto max-w-3xl py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h1>
        <p className="text-lg text-white/70 mb-12">
          Have a question? Want to discuss partnership opportunities? We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
        </p>

        <div className="rounded-lg border border-white/10 bg-white/5 p-8 md:p-12">
          <ContactForm />
        </div>

        <section className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold">Other Ways to Reach Us</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="mb-2 font-semibold text-white">Email</h3>
              <p className="text-white/70">hello@datafogstudios.com</p>
              <p className="mt-2 text-sm text-white/50">General inquiries</p>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="mb-2 font-semibold text-white">Partnerships</h3>
              <p className="text-white/70">partnerships@datafogstudios.com</p>
              <p className="mt-2 text-sm text-white/50">Business development</p>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="mb-2 font-semibold text-white">Press</h3>
              <p className="text-white/70">press@datafogstudios.com</p>
              <p className="mt-2 text-sm text-white/50">Media inquiries</p>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="mb-2 font-semibold text-white">Response Time</h3>
              <p className="text-white/70">24 hours</p>
              <p className="mt-2 text-sm text-white/50">Typical response time</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
