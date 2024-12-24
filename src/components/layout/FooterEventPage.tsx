import Image from 'next/image'
import React from 'react'

const FooterEventPage = () => {
  return (
    <div className='container max-w-[1700px] mx-auto pb-[150px]'>
      <div className='flex flex-col items-center'>
        <Image src='/images/logo/rights-logo-01.webp' alt='rights-logo-01' height={91} width={82} className='object-contain mb-3' />
        <div className='flex gap-4 mb-[38px]'>
          <Image src='/images/logo/rights-logo-02.webp' alt='rights-logo-02' height={40} width={27} className='object-contain' />
          <Image src='/images/logo/rights-logo-03.webp' alt='rights-logo-03' height={40} width={98} className='object-contain' />
          <Image src='/images/logo/rights-logo-04.webp' alt='rights-logo-04' height={37} width={24} className='object-contain' />
          <Image src='/images/logo/rights-logo-05.webp' alt='rights-logo-05' height={40} width={147} className='object-contain' />
          <Image src='/images/logo/rights-logo-06.webp' alt='rights-logo-06' height={58} width={58} className='object-contain' />
          <Image src='/images/logo/rights-logo-07.webp' alt='rights-logo-07' height={54} width={54} className='object-contain' />
        </div>

        <div className='text-white text-center text-pretty flex flex-col items-center gap-5'>
          <p>adidas, the 3-Bars logo, the 3-Stripe trade mark, Predator, F50, Y-3 and Climacool are trademarks of the adidas Group, used with permission.  The use of certain player names, images and likenesses on a collective basis is authorised by FIFPRO Commercial Enterprises BV.  Officially Licensed Product of the MLSPA © [2024]  © 2024, DFB. Official Licensed Product of Deutscher Fußball-Bund produced by Konami Digital Entertainment.  © The Football Association Ltd 2024  Copyright FFF ©  Official Licensee of the FIGC  The FIGC logo is a registered trade mark of the Federazione Italiana Giuoco Calcio  ALL RIGHTS RESERVED BY JFA  Official Licensed Product of the RFEF  Officially Licensed by Eredivisie C.V. and Stichting CAO voor Contractspelers  ©J.LEAGUE  ©Ligue de Football Professionnel  ™ © 2024 THE ARSENAL FOOTBALL CLUB PLC, ALL RIGHTS RESERVED.  © S.L.B. Produto Oficial  © Manchester United Football Club Limited 2024 All rights reserved  © Wembley National Stadium Limited 2024  All other copyrights or trademarks are the property of their respective owners and are used under license.</p>

          <p>NASA
            (c)JAXA</p>
          <p>&#34;Pio FC&#34; is a registered trademark, the reproduction, use, copying, printing, distribution, publication, translation, adaptation, rearrangement and any other use or modification in whole or in part of the data and works contained in this site, by any means and in any form outside the content of this site is prohibited. Konami is authorized to use the trademark &#34;Pio FC&#34; on this site, without this implying a transfer or assignment of rights.</p>

          <p>&#34;Aniquiladores FC&#34; is a registered trademark, the reproduction, use, copying, printing, distribution, publication, translation, adaptation, rearrangement and any other use or modification in whole or in part of the data and works contained in this page, by any means and in any form outside the content of this site is prohibited. Konami is authorized to use the trademark &#34;Aniquiladores FC&#34; on this site, without this implying a transfer or assignment of rights.</p>

          <div className='flex gap-1'>
            <Image src='/images/logo/rights-logo-second.webp' alt='rights-logo-second' height={26} width={45} className='object-contain' />
            <p>is the eSports partner for eFootball™ in Thailand</p>
          </div>
          <p>©2024 Konami Digital Entertainment</p>

          <Image src='/images/logo/rights-logo-third.webp' alt='rights-logo-third' height={55} width={67} className='object-contain' />

          <p>&#34;  &#34;,&#34;PlayStation&#34; and &#34;  &#34;,&#34;  &#34; are registered trademarks or trademarks of Sony Interactive Entertainment Inc.
            Microsoft, the Xbox Sphere mark, the Series X logo, Series S logo, Series X|S logo, Xbox One, Xbox Series X, Xbox Series S, Xbox Series X|S, and Xbox Game Pass are trademarks of the Microsoft group of companies.</p>

          <p>©2024 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.
          </p>
          <p>Apple and Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries
            App Store is a trademark of Apple Inc.</p>

          <p>Google Play and the Google Play logo are trademarks of Google LLC.
            Android is a trademark of Google LLC.</p>

          <Image src='/images/logo/rights-logo-fourth.webp' alt='rights-logo-fourth' height={67} width={58} className='object-contain' />



          <p>&#34;eFootball&#34;, &#34;e-Football&#34;, &#34; &#34; and &#34; &#34; are registered trademarks or trademarks of Konami Digital Entertainment Co., Ltd. in Japan and other countries or regions
            ©Konami Digital Entertainment</p>


        </div>
      </div>
    </div>
  )
}

export default FooterEventPage