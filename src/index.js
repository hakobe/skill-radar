import React from 'react'
import ReactDOM from 'react-dom'
import { Chart, Radar } from 'react-chartjs-2'

import './style.scss'
import dataList from './data.tsv'

const axios = [
  '自分の興味',
  'Web技術者からの人気',
  'すぐに役立つか',
  '長く役立つか',
  '成果のでやすさ'
]

const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
}
const color = Chart.helpers.color

const App = () => {
  const items = dataList.map(d => {
    const data = {
      // labels: ['A', 'B', 'C', 'D', 'E'],
      labels: axios,
      datasets: [
        {
          data: axios.map(l => d[l]),
          borderColor: chartColors.blue,
          backgroundColor: color(chartColors.blue)
            .alpha(0.2)
            .rgbString()
        }
      ]
    }
    const options = {
      maintainAspectRatio: true,
      legend: {
        display: false
      },
      scale: {
        ticks: {
          display: false,
          beginAtZero: true,
          stepSize: 5,
          min: 0,
          max: 15
        }
      }
    }
    console.log(data)
    return (
      <li key={d['スキル']}>
        <div>
          {d['スキル']}({d['スコア']})
        </div>
        <Radar data={data} options={options} width={300} height={180} />
      </li>
    )
  })
  return (
    <main>
      <ul id="raders">{items}</ul>
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
