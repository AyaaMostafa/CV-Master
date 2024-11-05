import React from 'react';
import '../../style/policyStyle.scss';

interface PolicyItemProps {
  content: string;
  index: number;
}

function PolicyItem({ content, index }: PolicyItemProps) {
  return (
    <div className="policy-div">
      <div className={`circle-${index % 2 === 0 ? 'blue' : 'red'}`} />
      <span className="policy-text">{content}</span>
    </div>
  );
}
export default PolicyItem;
