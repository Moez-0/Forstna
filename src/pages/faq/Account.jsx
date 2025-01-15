import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQAccountProblems = () => {
  const { t } = useTranslation();

  const questions = [
    {
      question: t('faqAcc.accountQuestion1'),
      answer: t('faqAcc.accountAnswer1')
    },
    {
      question: t('faqAcc.accountQuestion2'),
      answer: t('faqAcc.accountAnswer2')
    },
    {
      question: t('faqAcc.accountQuestion3'),
      answer: t('faqAcc.accountAnswer3')
    },
    {
      question: t('faqAcc.accountQuestion4'),
      answer: t('faqAcc.accountAnswer4')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('faqAcc.accountTitle')}</h1>
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

export default FAQAccountProblems;
