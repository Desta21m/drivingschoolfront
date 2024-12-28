import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
   const { t } = useTranslation('contact');
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center"> {t("ctitel")}</h2>
        <p className="text-center text-gray-300 mb-10">
        {t("ctext")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                {t("form1")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:border-red-600 focus:ring focus:ring-red-600"
                  placeholder={t("form1p")}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                {t("form2")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:border-red-600 focus:ring focus:ring-red-600"
                  placeholder={t("form2p")}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                {t("form3")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-1 block w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:border-red-600 focus:ring focus:ring-red-600"
                  placeholder={t("form3p")}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-md w-full"
              >
                {t("form4")}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-red-600">{t("sectitel")}</h3>
            <p className="text-gray-300">
              <FaMapMarkerAlt className="inline mr-2 text-red-600" />
              <strong>{t("add1")}</strong> 2017, ArbaMinche, University. nsr / 1577 / 14    Ethiopia  .
            </p>
            <p className="text-gray-300">
              <FaPhoneAlt className="inline mr-2 text-red-600" />
              <strong>{t("add2")}</strong>{' '}
              <a href="tel:+251915729756" className="hover:text-red-500">
                +251 (9) 1572-9756
              </a>
            </p>
            <p className="text-gray-300">
              <FaEnvelope className="inline mr-2 text-red-600" />
              <strong>{t("add3")}</strong>{' '}
              <a href="mailto:equardesta21@gmail.com" className="hover:text-red-500">
                equardesta21@gmail.com
              </a>
            </p>
            <div className="space-x-4 text-red-600">
              <a href="#" className="hover:text-red-500">
                <FaFacebook className="inline" />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaTwitter className="inline" />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaLinkedin className="inline" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
