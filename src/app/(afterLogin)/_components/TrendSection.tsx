import React from 'react'
import style from './trendSection.module.css';
import Trend from './Trend';

const TrendSection = () => {
  return (
    <div className={style.trandBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  )
}

export default TrendSection