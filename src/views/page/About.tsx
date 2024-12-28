import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegCheckCircle, FaUserGraduate, FaClock, FaHeadset, FaPhoneAlt } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation('about');
  return (
    <section className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-5xl font-bold text-red-600 text-center lg:text-left mb-10"
            dangerouslySetInnerHTML={{ __html: t('titel') }}></h2>
            <h3 className="text-3xl font-semibold text-gray-800 text-center lg:text-left mb-6"
            dangerouslySetInnerHTML={{ __html: t('sub') }}>
            </h3>
            <p className="text-gray-600 text-center lg:text-left text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            {t('text')}
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="https://wizdrivingschool.com/wp-content/uploads/2024/04/driving-school-Manchester.jpg" 
              alt="Driving Training" 
              className="w-full max-w-sm rounded-lg shadow-lg" 
            />
          </div>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Quality Service */}
          <div className="bg-red-50 rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4 text-4xl text-red-600">
              <FaRegCheckCircle />
            </div>
            <h4 className="text-xl font-semibold text-black-600 mb-3">{t('card1Titel')}</h4>
            <p className="text-gray-700">
            {t('card1Sub')}
            </p>
          </div>

          {/* Experienced Instructors */}
          <div className="bg-red-50 rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4 text-4xl text-red-600">
              <FaUserGraduate />
            </div>
            <h4 className="text-xl font-semibold text-black-600 mb-3">{t('card2Titel')}</h4>
            <p className="text-gray-700">
            {t('card2Sub')}
            </p>
          </div>

          {/* Flexible Hours */}
          <div className="bg-red-50 rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4 text-4xl text-red-600">
              <FaClock />
            </div>
            <h4 className="text-xl font-semibold text-black-600 mb-3">{t('card3Titel')}</h4>
            <p className="text-gray-700">
            {t('card3Sub')}
            </p>
          </div>

          {/* Excellent Support */}
          <div className="bg-red-50 rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4 text-4xl text-red-600">
              <FaHeadset />
            </div>
            <h4 className="text-xl font-semibold text-black-600 mb-3">{t('card4Titel')}</h4>
            <p className="text-gray-700">
            {t('card4Sub')}
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <button className="bg-black text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-900">
          {t('callto')}
          </button>
          <p className="text-gray-800 mt-4 text-lg"
          dangerouslySetInnerHTML={{ __html: t('info') }}>
         </p>
        </div>
      </div>
    </section>
  );
};

export default About;
