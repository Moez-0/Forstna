import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQBilling = () => {
  const { t } = useTranslation();

  const questions = [
    {
      question: t('faqBill.billingQuestion1'),
      answer: t('faqBill.billingAnswer1')
    },
    {
      question: t('faqBill.billingQuestion2'),
      answer: t('faqBill.billingAnswer2')
    },
    {
      question: t('faqBill.billingQuestion3'),
      answer: t('faqBill.billingAnswer3')
    },
    {
      question: t('faqBill.billingQuestion4'),
      answer: t('faqBill.billingAnswer4')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('faqBill.billingTitle')}</h1>
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

export default FAQBilling;
