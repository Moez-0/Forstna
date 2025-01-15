import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQGeneralQuestions = () => {
  const { t } = useTranslation();

  const questions = [
    {
      question: t('faqQuestion1'),
      answer: t('faqAnswer1')
    },
    {
      question: t('faqQuestion2'),
      answer: t('faqAnswer2')
    },
    {
      question: t('faqQuestion3'),
      answer: t('faqAnswer3')
    },
    {
      question: t('faqQuestion4'),
      answer: t('faqAnswer4')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('faqTitle')}</h1>
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

export default FAQGeneralQuestions;
