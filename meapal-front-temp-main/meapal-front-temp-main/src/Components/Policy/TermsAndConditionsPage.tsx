import React from 'react';
import '../../style/policyStyle.scss';
import PolicyItem from './PolicyItem';

const termsAndConditionsList = [
  '“From an etymological point of view, CORELIA comes from the word correlation: establishing relationships between data, IT and business areas ; establishing relationships between our expertise and the  increasing complexity in projects, intelligence and technologies. This what CORELIA stands for. ”',
  '“From an etymological point of view, CORELIA comes from the word correlation: establishing relationships between data, IT and business areas ; establishing relationships between our expertise and the  increasing complexity in projects, intelligence and technologies. This what CORELIA stands for. ”',
  '“From an etymological point of view, CORELIA comes from the word correlation: establishing relationships between data, IT and business areas ; establishing relationships between our expertise and the  increasing complexity in projects, intelligence and technologies. This what CORELIA stands for. ”',
  '“From an etymological point of view, CORELIA comes from the word correlation: establishing relationships between data, IT and business areas ; establishing relationships between our expertise and the  increasing complexity in projects, intelligence and technologies. This what CORELIA stands for. ”',
  '“From an etymological point of view, CORELIA comes from the word correlation: establishing relationships between data, IT and business areas ; establishing relationships between our expertise and the  increasing complexity in projects, intelligence and technologies. This what CORELIA stands for. ”',
  '“From an etymological point of view, CORELIA comes from the word correlation: establishing relationships between data, IT and business areas ; establishing relationships between our expertise and the  increasing complexity in projects, intelligence and technologies. This what CORELIA stands for. ”',
];

function TermsAndConditionsPage() {
  const policyDiv = termsAndConditionsList.map((term, index) => (
    <PolicyItem content={term} index={index} />
  ));

  return (
    <div className="policypage">
      <h2 className="policypage-h2">
        Our
        <span className="highlight"> Terms and Condition</span>
      </h2>
      {policyDiv}
    </div>
  );
}
export default TermsAndConditionsPage;
