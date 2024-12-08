import React from 'react';
import './OverallSummary.css';

const OverallSummary = ({ summary }) => {
  return (
  <div className='overall'>
    <div className="overall-summary">
      <h2>Overall Summary :</h2>
      <div className="table1">
    <div class="title"><strong>MP BUILD</strong></div>
    <table>
      <tr>
        <th rowspan="2">Target Date</th>
        <th colspan="2">PRB</th>
      </tr>
      <tr>
        <th>EI H</th>
        <th>%</th>
      </tr>
      <tr>
        <td>TT</td>
        <td>112</td>
        <td>100</td>
      </tr>
      <tr>
        <td>TL</td>
        <td>123</td>
        <td>10</td>
      </tr>
      <tr>
        <td>TR</td>
        <td>456</td>
        <td>20</td>
      </tr>
      <tr>
        <td>LB</td>
        <td>789</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Le</td>
        <td>101</td>
        <td>12</td>
      </tr>
    </table>
  </div>
    </div>


























    <div className="overall-summary2">
      <h2>Fish Bone :</h2>
      <img className='fishbone' src="../src/assets/fishbone.jpeg" alt="" />
    </div>
  </div>
  );
};

export default OverallSummary;
