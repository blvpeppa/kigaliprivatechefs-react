import { Link } from 'react-router-dom'
import { site } from '../config/site'

export default function Contact() {
  return (
    <main className="px-[30px] pb-20 pt-[150px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-10 lg:flex-row">

        <div className="flex-1 p-5 md:p-[95px] lg:p-10">

<Link to="/">
  <img
    src={site.logo}
    alt={`${site.displayName} logo`}
    className="h-28 md:h-36 lg:h-40 w-auto object-contain"
  />
</Link>

          <h1 className="my-5 text-[30px] font-semibold">
            Contact Us
          </h1>

          <h2 className="text-2xl font-semibold text-[#0d5215]">
            Contact Details
          </h2>

          <p className="my-4 leading-7">
            MOBILE:{' '}
            <a
              className="hover:text-saffron"
              href={`tel:${site.phone}`}
            >
              {site.phoneDisplay}
            </a>
            <br />
            EMAIL:{' '}
            <a
              className="hover:text-saffron"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>

          <form className="flex flex-col items-stretch gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Your Email Address..."
              className="min-h-[70px] w-full rounded border border-gray-300 bg-cultured px-4"
            />

            <button className="min-h-[70px] rounded bg-gradient-to-r from-[#0d5215] to-green-600 px-6 font-semibold uppercase text-white sm:w-1/2">
              Get Response Back
            </button>
          </form>
        </div>

        <figure className="w-full flex-1">
          <iframe
            title="Kigali map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125751.03807260178!2d76.18464664299258!3d9.957243150760043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
            className="h-[350px] w-full border-0 lg:h-[600px]"
            loading="lazy"
          />
        </figure>

      </div>
    </main>
  )
}