import React from 'react'
import './BuildInput.css'

const BuildInput = () => {
  return (
    <div className='buildinput'>
        <div className='buildinput1'>
             <h2>Build Input Dates :</h2>
             <table className='table'>
                    <tr>
                        <th className='c'>Category</th>
                        <th  className='c'>Dates</th>
                    </tr>
                    <tr>
                        <td>Catagory A</td>
                        <td>10/10/2024</td>
                    </tr>
                    <tr>
                        <td>c - B</td>
                        <td>4/03/2025</td>
                     </tr>
                    <tr>
                        <td>c -c</td>
                        <td>6/05/2025</td>
                    </tr>
                </table>
        </div>
























































        <div className='buildinput2'>
                <h2>Target EIH Dates :</h2>
    <table>
        <thead>
            <tr>
                <th>Line</th>
                <th>ESP</th>
                <th>EIH</th>
                <th>ETD</th>
                <th>AIR</th>
                <th>SEA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="2">MLB</td>
                <td>A</td>
                <td>C</td>
                <td>E</td>
                <td>G</td>
                <td>I</td>
            </tr>
            <tr>
                <td>B</td>
                <td>D</td>
                <td>F</td>
                <td>H</td>
                <td>J</td>
            </tr>
            <tr>
                <td rowspan="2">SMLB</td>
                <td>1</td>
                <td>3</td>
                <td>5</td>
                <td>7</td>
                <td>9</td>
            </tr>
            <tr>
                <td>2</td>
                <td>4</td>
                <td>6</td>
                <td>8</td>
                <td>10</td>
            </tr>
            <tr>
                <td rowspan="2">FATP</td>
                <td>A</td>
                <td>C</td>
                <td>E</td>
                <td>G</td>
                <td>I</td>
            </tr>
            <tr>
                <td>B</td>
                <td>D</td>
                <td>F</td>
                <td>H</td>
                <td>J</td>
            </tr>
            <tr>
                <td rowspan="2">SFATP</td>
                <td>1</td>
                <td>3</td>
                <td>5</td>
                <td>7</td>
                <td>9</td>
            </tr>
            <tr>
                <td>2</td>
                <td>4</td>
                <td>6</td>
                <td>8</td>
                <td>10</td>
            </tr>
        </tbody>
    </table>
        </div>
    </div>
  )
}

export default BuildInput
