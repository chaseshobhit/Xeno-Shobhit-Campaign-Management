import React, { useState } from 'react';
import axios from 'axios';

const AudienceForm = ({ setAudienceSize }) => {
  const [conditions, setConditions] = useState([]);

  const handleAddCondition = () => {
    setConditions([...conditions, { field: '', operator: '', value: '' }]);
  };

  const handleConditionChange = (index, field, value) => {
    const updatedConditions = [...conditions];
    updatedConditions[index][field] = value;
    setConditions(updatedConditions);
  };

  const handleCalculateAudience = () => {
    axios.post('http://localhost:5000/audience/calculate', { conditions })
      .then(res => {
        setAudienceSize(res.data.size);
        alert('Audience size calculated');
      })
      .catch(err => console.error('Error calculating audience', err));
  };

  return (
    <div>
      <h2>Create Audience</h2>
      {conditions.map((condition, index) => (
        <div key={index}>
          <select
            value={condition.field}
            onChange={e => handleConditionChange(index, 'field', e.target.value)}
          >
            <option value="">Select field</option>
            <option value="total_spending">Total Spending</option>
            <option value="visit_count">Visit Count</option>
            <option value="last_visit_date">Last Visit</option>
          </select>
          <select
            value={condition.operator}
            onChange={e => handleConditionChange(index, 'operator', e.target.value)}
          >
            <option value="">Select operator</option>
            <option value=">">Greater Than</option>
            <option value="<">Less Than</option>
            <option value="=">Equal To</option>
          </select>
          <input
            type="text"
            value={condition.value}
            onChange={e => handleConditionChange(index, 'value', e.target.value)}
            placeholder="Enter value"
          />
        </div>
      ))}
      <button onClick={handleAddCondition}>Add Condition</button>
      <button onClick={handleCalculateAudience}>Calculate Audience</button>
    </div>
  );
};

export default AudienceForm;
