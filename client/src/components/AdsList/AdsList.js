import React, { useEffect, useState } from 'react'
import { fetchAds } from '../../redux/actions/adsAction'
import { useDispatch, useSelector } from 'react-redux'
import { getAds, getGoldAds, getSilverAds, getCommonAds } from '../../redux/selectors/adsSelector';
import './AdsList.scss'

export default function AdsList() {
  const dispatch = useDispatch();
  const ads = useSelector(getAds);
  const goldAds = useSelector(getGoldAds)
  const silverAds = useSelector(getSilverAds)
  const commonAds = useSelector(getCommonAds)

  useEffect(() => {
    dispatch(fetchAds())
  }, []);

  return (
    <ul className='adsList'>
      {goldAds.map((ad, i) => (
        <li className={`adsList__item ${ad.status}`} key={i}>
          <span>{ad.city} </span>
          <span><img src={`http://localhost:5000/api/images/${ad.img[0]}`} width='50' height='50' /></span>
          <span>{ad.title} </span>
          <span>{ad.type} </span>
          <span>{ad.date} </span>
          <span>{ad.productPrice}$ </span>
        </li>
      ))}
      {silverAds.map((ad, i) => (
        <li className={`adsList__item ${ad.status}`} key={i}>
          <span>{ad.city} </span>
          <span><img src={`http://localhost:5000/api/images/${ad.img[0]}`} width='50' height='50' /></span>
          <span>{ad.title} </span>
          <span>{ad.type} </span>
          <span>{ad.date} </span>
          <span>{ad.productPrice}$ </span>
        </li>
      ))}
      {commonAds.map((ad, i) => (
        <li className={`adsList__item ${ad.status}`} key={ad._id}>
          <span>{ad.city} </span>
          <span><img src={`http://localhost:5000/api/images/${ad.img[0]}`} width='50' height='50' /></span>
          <span>{ad.title} </span>
          <span>{ad.type} </span>
          <span>{ad.date} </span>
          <span>{ad.productPrice}$ </span>
        </li>
      ))}
    </ul>
  )
}
