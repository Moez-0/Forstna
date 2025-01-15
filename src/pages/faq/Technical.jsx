import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQTechnicalSupport = () => {
  const { t } = useTranslation();

  const questions = [
    {
      question: t('faqTech.techQuestion1'),
      answer: t('faqTech.techAnswer1')
    },
    {
      question: t('faqTech.techQuestion2'),
      answer: t('faqTech.techAnswer2')
    },
    {
      question: t('faqTech.techQuestion3'),
      answer: t('faqTech.techAnswer3')
    },
    {
      question: t('faqTech.techQuestion4'),
      answer: t('faqTech.techAnswer4')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('faqTech.techTitle')}</h1>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQTechnicalSupport;
